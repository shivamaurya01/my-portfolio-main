import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";

import {
  about,
  achievements,
  education,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

/** Portfolio facts the assistant is allowed to talk about. */
function buildSystemPrompt() {
  const skills = skillGroups
    .map((g) => `${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const projectLines = projects
    .map(
      (p) =>
        `- ${p.name}: ${p.description} Tech: ${p.tech.join(", ")}.${
          p.features
            ? ` Features: ${p.features.join(", ")}.`
            : ""
        }`,
    )
    .join("\n");

  const educationLines = education
    .map(
      (e) =>
        `- ${e.degree}, ${e.institute} (${e.period}), ${e.location}, ${e.status}`,
    )
    .join("\n");

  const achievementLines = achievements
    .map((a) => `- ${a.org}: ${a.title}`)
    .join("\n");

  return `You are the AI assistant on ${profile.name}'s portfolio website.

Answer recruiter and visitor questions about Shiva in a concise, professional and friendly tone.

Keep answers short, usually 1-3 sentences unless the user asks for more detail.

IMPORTANT RULES:
- Only use the information provided below.
- Never invent skills, projects, companies, dates, statistics or achievements.
- If information is not provided, say that you do not have that information and suggest contacting Shiva.
- Do not discuss information unrelated to Shiva's portfolio.
- Do not claim Shiva has experience that is not listed below.

ABOUT
${about.paragraphs.join("\n")}

QUICK FACTS
${about.facts
  .map((f) => `${f.label}: ${f.value}`)
  .join("\n")}

SKILLS
${skills}

PROJECTS
${projectLines}

EDUCATION
${educationLines}

ACHIEVEMENTS & CERTIFICATIONS
${achievementLines}

LINKS
GitHub: ${profile.github}
LeetCode: ${profile.leetcode}
Email: ${profile.email}
Resume: available in the Resume section of the portfolio.`;
}

type ChatRequestBody = {
  messages?: unknown;
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } =
            (await request.json()) as ChatRequestBody;

          if (!Array.isArray(messages)) {
            return new Response("Messages are required", {
              status: 400,
            });
          }

          const result = streamText({
            model: google("gemini-3.6-flash"),
            system: buildSystemPrompt(),
            messages: await convertToModelMessages(
              messages as UIMessage[],
            ),
          });

          return result.toUIMessageStreamResponse();
        } catch (error) {
          console.error("Gemini API Error:", error);

          return new Response(
            "The AI assistant is currently unavailable.",
            {
              status: 500,
            },
          );
        }
      },
    },
  },
});