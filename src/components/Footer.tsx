import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{profile.role}</p>
        </div>
        <SocialLinks />
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground md:text-left">
        © 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
