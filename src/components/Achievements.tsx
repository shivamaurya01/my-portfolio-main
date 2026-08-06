import { Award, ExternalLink } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Certifications & milestones."
      className="bg-surface/40"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <article className="surface-card h-full rounded-2xl p-6">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                <Award size={18} aria-hidden="true" />
              </span>

              <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                {item.org}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-snug">
                {item.title}
              </h3>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Certificate
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}