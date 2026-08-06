import { Briefcase, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

function TimelineItem({
  title,
  subtitle,
  period,
  meta,
  description,
  Icon,
}: {
  title: string;
  subtitle: string;
  period: string;
  meta?: string;
  description?: string;
  Icon: typeof Briefcase;
}) {
  return (
    <li className="relative pl-12">
      <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-xl border border-border bg-surface text-primary">
        <Icon size={16} aria-hidden="true" />
      </span>
      <div className="surface-card rounded-2xl p-5">
        <p className="font-mono text-xs text-primary">{period}</p>
        <h3 className="mt-2 text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        {meta ? <p className="mt-1 text-xs text-muted-foreground">{meta}</p> : null}
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </li>
  );
}


export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <ol className="relative space-y-6 before:absolute before:left-4 before:top-3 before:h-full before:w-px before:bg-border">
        {education.map((item) => (
          <Reveal key={item.institute}>
            <TimelineItem
              title={item.institute}
              subtitle={item.degree}
              period={item.period}
              meta={`${item.location} · ${item.status}`}
              Icon={GraduationCap}
            />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
