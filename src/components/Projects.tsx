import { useMemo, useState } from "react";
import { ExternalLink, Gamepad2, Github, Map, MessagesSquare, Music } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const accentIcons = {
  chat: MessagesSquare,
  map: Map,
  music: Music,
  game: Gamepad2,
};

const filters = ["All", "React.js", "Node.js", "MongoDB", "JavaScript"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Applications I have designed and built."
      description="A selection of full-stack and frontend projects. Repository and demo links are easy to update."
    >
      <Reveal>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {filters.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setFilter(tech)}
              aria-pressed={filter === tech}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                filter === tech
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => {
          const Icon = accentIcons[project.accent as keyof typeof accentIcons] ?? MessagesSquare;
          return (
            <Reveal key={project.name} delay={i * 80}>
              <article className="surface-card flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Project visual — replace with a screenshot when available */}
                <div className="hero-bg relative grid h-40 place-items-center border-b border-border">
                  <div className="grid-lines absolute inset-0" aria-hidden="true" />
                  <Icon size={40} className="relative text-primary" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {project.features ? (
                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} aria-hidden="true" /> Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
