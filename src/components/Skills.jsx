import { motion } from "framer-motion";
import { Layers, Cpu, Database, Wrench } from "lucide-react";
import { skillGroups } from "../data/skills";

const categoryIcons = {
  Frontend: Layers,
  Programming: Cpu,
  Database: Database,
  "Tools & Practices": Wrench,
};

function SkillBar({ item, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-[var(--text-heading)] font-medium">
          {item.name}
        </span>
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          {item.note ?? `${item.level}%`}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-grid">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">{"<Skills />"}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Tools I reach for to{" "}
            <span className="text-gradient">turn ideas into interfaces</span>
          </h2>
          <p className="text-[var(--text-body)] leading-relaxed">
            A working toolkit built through coursework, internships, and
            self-driven projects — proficiency levels reflect where I genuinely
            am today, including what I'm still actively learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = categoryIcons[group.category] ?? Layers;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: gi * 0.08 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-purple)]/25 to-[var(--accent-blue)]/25 flex items-center justify-center text-[var(--accent-cyan)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-[var(--text-heading)]">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-5">
                  {group.items.map((item, i) => (
                    <SkillBar key={item.name} item={item} delay={i * 0.1} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
