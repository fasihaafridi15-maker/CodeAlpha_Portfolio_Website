import { motion } from "framer-motion";
import { Trophy, Users2, Mic2, MessagesSquare } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Women's Futsal Leader",
    org: "Al-Qureshi Academy · British Sports",
    text: "Officially recognized as Leader of Women's Futsal, representing Al-Qureshi Academy at the Sindh Women's Futsal Super League (Season 6, 2023) and the 7th All Pakistan School & College Girls Futsal Super League, Hyderabad Zone (2023 & 2026).",
  },
  {
    icon: Users2,
    title: "ACM Student Chapter & IT Club",
    org: "HITMS",
    text: "Active member of the ACM Student Chapter and Core Member of the University IT Club, helping organize technical workshops, awareness sessions, and student competitions.",
  },
  {
    icon: Mic2,
    title: "Event Coordinator & Emcee",
    org: "HITMS Campus Events",
    text: "Managed on-campus and outdoor events as coordinator and compere, ensuring smooth planning, execution, and participant communication.",
  },
  {
    icon: MessagesSquare,
    title: "Debates & Public Speaking",
    org: "University Circuit",
    text: "Regular participant in university debates and public speaking events, driven by an interest in youth leadership and social impact through technology.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad relative bg-grid">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// leadership</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Leading beyond the{" "}
            <span className="text-gradient">classroom & the codebase</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 border border-[var(--border-glass)] flex items-center justify-center text-[var(--accent-cyan)]">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[var(--text-heading)] mb-0.5">
                  {item.title}
                </h3>
                <p className="font-mono text-[11px] text-[var(--accent-cyan)] mb-2">
                  {item.org}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
