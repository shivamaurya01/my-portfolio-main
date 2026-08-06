import {
  Code2,
  Cpu,
  Database,
  MonitorSmartphone,
  Server,
  Wrench,
  Coffee,
  Braces,
  Atom,
  GitBranch,
  Github,
  Palette,
  Globe,
  Terminal,
  Network,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const icons = {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Wrench,
  Cpu,
};

const skillIcons: Record<string, any> = {
  Java: Coffee,
  JavaScript: Braces,
  Python: Terminal,
  HTML: Globe,
  HTML5: Globe,
  CSS: Palette,
  CSS3: Palette,
  React: Atom,
  "React.js": Atom,
  "Node.js": Server,
  "Express.js": Server,
  MongoDB: Database,
  Mongoose: Database,
  SQL: Database,
  Git: GitBranch,
  GitHub: Github,
  "Data Structures & Algorithms": Cpu,
  DSA: Cpu,
  "Operating Systems": Cpu,
  "Computer Networks": Network,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills & tools I work with."
      description="Technologies I use to build full-stack applications, plus the core computer science foundations behind them."
      className="bg-surface/40"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon as keyof typeof icons];

          return (
            <Reveal key={group.title} delay={i * 70}>
              <article className="surface-card h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <h3 className="text-base font-semibold">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const SkillIcon = skillIcons[item] || Code2;

                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                      >
                        <SkillIcon
                          size={13}
                          className="text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}