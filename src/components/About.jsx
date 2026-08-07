import { motion } from "framer-motion";
import { Code2, Sparkles, Users, Rocket } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering Journey",
    text: "4th semester into a BS in Software Engineering at HITMS, holding a 3.72/4.0 CGPA while shipping real projects alongside coursework.",
  },
  {
    icon: Sparkles,
    title: "Frontend & AI Curiosity",
    text: "Focused on building clean, responsive interfaces with HTML, CSS, and JavaScript — and exploring how AI tools like computer vision and prompting reshape frontend workflows.",
  },
  {
    icon: Users,
    title: "Leadership & Community",
    text: "Recognized leader for Women's Futsal representing Al-Qureshi Academy, an active ACM Student Chapter and IT Club member, and a regular event coordinator and emcee.",
  },
  {
    icon: Rocket,
    title: "Continuous Builder",
    text: "From a civic-tech platform to a gesture-controlled AI meme app, I learn by shipping — documenting problems, debugging deeply, and iterating fast.",
  },
];

const stats = [
  { value: "9+", label: "Projects Completed" },
  { value: "6+", label: "Certifications" },
  { value: "3.72", label: "CGPA / 4.0" },
  { value: "4th", label: "Semester at HITMS" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// about-me</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Building with curiosity,{" "}
            <span className="text-gradient">shipping with purpose</span>
          </h2>
          <p className="text-[var(--text-body)] leading-relaxed">
            I'm a Software Engineering student at HITMS, Hyderabad, with a strong
            interest in frontend development, AI-driven tools, and community
            leadership. My journey blends classroom fundamentals — data structures,
            OOP, and database design — with self-driven projects where I get to
            build, break, and rebuild things that solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20 border border-[var(--border-glass)] flex items-center justify-center text-[var(--accent-cyan)]">
                <h.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold mb-1.5 text-[var(--text-heading)]">
                  {h.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {h.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--border-glass)]"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
