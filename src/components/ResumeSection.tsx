import { Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ResumeSection() {
  return (
    <section id="resume" className="bg-surface/40 px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
            <div
              className="pointer-events-none absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <p className="eyebrow relative">— Resume</p>
            <h2 className="relative mt-3 text-3xl font-semibold sm:text-4xl">My Resume</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Interested in my background and experience? Download my resume to learn more about my
              skills, projects, education, and experience.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download size={16} aria-hidden="true" /> Download Resume
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FileText size={16} aria-hidden="true" /> View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
