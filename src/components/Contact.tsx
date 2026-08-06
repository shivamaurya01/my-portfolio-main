import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const details = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/shivamaurya01",
    href: profile.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: MapPin,
  },
];

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What is this about?",
  },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const contactData = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const contentType = response.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        throw new Error("The contact server returned an invalid response.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message.",
        );
      }

      setSent(true);

      // Clear form after successful submission
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Work Together"
      description="I am open to software development opportunities, internships, collaborations, and interesting projects."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <form
            className="surface-card rounded-2xl p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={
                    field.name === "subject"
                      ? "sm:col-span-2"
                      : ""
                  }
                >
                  <label
                    htmlFor={field.name}
                    className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    disabled={sending}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary disabled:opacity-60"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={sending}
                  placeholder="Tell me about the role or project…"
                  className="mt-2 w-full resize-y rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary disabled:opacity-60"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            <p
              aria-live="polite"
              className="mt-3 text-xs text-muted-foreground"
            >
              {sent
                ? "Message sent successfully! I'll get back to you soon."
                : error
                  ? error
                  : ""}
            </p>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-4">
            {details.map(
              ({ label, value, href, Icon }) => (
                <li
                  key={label}
                  className="surface-card rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <Icon
                        size={18}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                        {label}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel="noreferrer"
                          className="block truncate text-sm text-foreground transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}