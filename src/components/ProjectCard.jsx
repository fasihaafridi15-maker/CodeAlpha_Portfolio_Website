import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { GithubGlyph } from "./icons";

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`glass-card p-6 flex flex-col ${featured ? "sm:p-7" : ""}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-[11px] text-[var(--accent-cyan)] px-2.5 py-1 rounded-full border border-[var(--accent-cyan)]/25 bg-[var(--accent-cyan)]/5">
          {project.tag}
        </span>
      </div>

      <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-heading)] mb-2.5">
        {project.title}
      </h3>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-[var(--text-body)] px-2.5 py-1 rounded-md bg-white/[0.04] border border-[var(--border-glass)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-1">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-heading)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <GithubGlyph size={16} /> Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Lock size={15} /> Private / Team Repo
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-heading)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
