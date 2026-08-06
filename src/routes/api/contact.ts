import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const { name, email, subject, message } = body;

          if (!name || !email || !subject || !message) {
            return Response.json(
              { success: false, message: "All fields are required." },
              { status: 400 },
            );
          }

          const result = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: subject,
            html: `
              <h2>New Portfolio Contact Message</h2>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>

              <hr />

              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          });

          if (result.error) {
            console.error("Resend error:", result.error);

            return Response.json(
              {
                success: false,
                message: "Failed to send email.",
              },
              { status: 500 },
            );
          }

          return Response.json({
            success: true,
            message: "Message sent successfully!",
          });
        } catch (error) {
          console.error("Contact API error:", error);

          return Response.json(
            {
              success: false,
              message: "Something went wrong.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});