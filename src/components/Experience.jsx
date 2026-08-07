import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Built two responsive, production-quality web applications — a scientific calculator and an interactive image gallery — from scratch in vanilla HTML, CSS, and JavaScript.",
  "Worked hands-on with HTML5, CSS3, and modern JavaScript (ES6+) to translate UI concepts into fully functional, accessible interfaces.",
  "Maintained a consistent, soft-premium design language and clean component structure across both deliverables.",
  "Strengthened frontend development fundamentals — responsive layout, DOM interaction, and UI polish — through real task deadlines.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-grid">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Where I&apos;ve <span className="text-gradient">put skills to work</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-9 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--accent-purple)]/10 blur-[80px]" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/25 to-[var(--accent-purple)]/25 flex items-center justify-center text-[var(--accent-cyan)] shrink-0">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--text-heading)]">
                Frontend Development Intern
              </h3>
              <p className="text-sm text-[var(--text-muted)] font-mono">
                CodeAlpha · Remote Internship
              </p>
            </div>
          </div>

          <ul className="relative grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {responsibilities.map((r) => (
              <li key={r} className="flex gap-3 text-sm text-[var(--text-body)] leading-relaxed">
                <CheckCircle2
                  size={18}
                  className="text-[var(--accent-cyan)] shrink-0 mt-0.5"
                />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
