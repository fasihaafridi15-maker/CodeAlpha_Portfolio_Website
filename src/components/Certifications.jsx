import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certificates, additionalCredentials } from "../data/certificates";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// certifications</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Proof of <span className="text-gradient">continuous learning</span>
          </h2>
          <p className="text-[var(--text-body)] leading-relaxed">
            Certifications earned through Anthropic, Google, Microsoft Learn, and
            university-led programs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-card-soft)]">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate — ${cert.org}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-full bg-[#080B14]/70 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)]">
                  <BadgeCheck size={13} /> Verified
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-[var(--text-heading)] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  {cert.org} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-[var(--accent-cyan)]" />
            <h3 className="font-display text-sm font-semibold text-[var(--text-heading)]">
              Additional Credentials
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {additionalCredentials.map((c) => (
              <span
                key={c}
                className="font-mono text-xs text-[var(--text-body)] px-3 py-1.5 rounded-full bg-white/[0.04] border border-[var(--border-glass)]"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
