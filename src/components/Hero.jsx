import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { site } from "../data/site";

const techChips = [
  { label: "HTML5", pos: "top-[6%] left-[2%]", delay: 0 },
  { label: "CSS3", pos: "top-[18%] right-[0%]", delay: 0.6 },
  { label: "JavaScript", pos: "bottom-[28%] left-[-4%]", delay: 1.2 },
  { label: "React", pos: "bottom-[10%] right-[4%]", delay: 0.3 },
  { label: "Java", pos: "top-[45%] left-[-8%]", delay: 0.9 },
  { label: "Git", pos: "top-[52%] right-[-6%]", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-grid"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[var(--accent-blue)]/20 blur-[110px]" />
        <div className="animate-float-slower absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-[var(--accent-purple)]/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] rounded-full bg-[var(--accent-cyan)]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow mb-6 font-mono">
            $ whoami · open to internships
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Fasiha Afridi</span>
          </h1>

          <p className="font-mono text-base sm:text-lg text-[var(--accent-cyan)] mb-5 cursor-blink">
            Software Engineering Student &amp; Frontend Developer
          </p>

          <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed max-w-xl mb-9">
            {site.intro}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={17} />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Download size={17} /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={17} /> Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["9+", "Projects Built"],
              ["6+", "Certifications"],
              ["3.72", "CGPA / 4.0"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-[var(--text-heading)]">
                  {value}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: profile frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Floating tech chips */}
          {techChips.map((c) => (
            <span
              key={c.label}
              className={`animate-chip-bob hidden sm:flex absolute ${c.pos} z-20 items-center px-3 py-1.5 rounded-full glass-card font-mono text-xs text-[var(--text-heading)]`}
              style={{ animationDelay: `${c.delay}s` }}
            >
              {c.label}
            </span>
          ))}

          {/* Editor-window frame */}
          <div className="glass-card glow-blue relative rounded-2xl p-3 overflow-hidden">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#facc15]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/70" />
              <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)]">
                fasiha-afridi.jsx
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src={site.profileImage}
                alt="Fasiha Afridi — Software Engineering Student & Frontend Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/70 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-muted)] text-xs font-mono"
      >
        scroll
        <span className="w-5 h-8 rounded-full border border-[var(--border-glass)] flex justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-[var(--accent-cyan)]"
          />
        </span>
      </a>
    </section>
  );
}
