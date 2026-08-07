import { Mail, Terminal } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./icons";
import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--border-glass)] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm text-[var(--text-heading)]">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-[#051019]">
            <Terminal size={15} strokeWidth={2.5} />
          </span>
          fasiha<span className="text-[var(--accent-cyan)]">.</span>dev
        </a>

        <p className="text-xs text-[var(--text-muted)] text-center">
          © {year} {site.name}. Built with React, Tailwind CSS &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} aria-label="Email" className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            <Mail size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            <LinkedinGlyph size={18} />
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors">
            <GithubGlyph size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
