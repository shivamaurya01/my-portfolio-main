import { about } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer focused on building and problem solving.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {text}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="surface-card rounded-2xl p-6">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-b border-border/70 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                  {fact.label}
                </dt>
                <dd className="text-sm text-foreground sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
