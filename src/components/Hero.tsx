import { ArrowRight, Download, FolderGit2, User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">— Introduction</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
              Hi, I&apos;m
              <span className="block">{profile.name}.</span>
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-6 font-mono text-sm text-primary sm:text-base">{profile.role}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <FolderGit2 size={16} aria-hidden="true" /> View My Projects
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                <Download size={16} aria-hidden="true" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <User size={16} aria-hidden="true" /> Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
            {/* Profile image area — drop your photo in src/assets and set `src` below */}
            <div className="surface-card relative overflow-hidden rounded-[1.75rem] p-1.5">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-4/5 w-full rounded-[1.4rem] object-cover"
                />
              ) : (
                <div className="grid aspect-4/5 w-full place-items-center rounded-[1.4rem] bg-surface-2">
                  <div className="text-center">
                    <span className="font-display text-5xl font-semibold text-primary">SM</span>
                    <p className="mt-3 px-6 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                      Profile photo placeholder
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between gap-3 px-4 py-4">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">B.Tech CSE · 2023–2027</p>
                  <p className="text-sm font-medium">Open to SDE roles &amp; internships</p>
                </div>
                <a
                  href="#about"
                  aria-label="Read more about Shiva"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
