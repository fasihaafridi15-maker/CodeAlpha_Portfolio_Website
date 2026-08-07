import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./icons";
import { site } from "../data/site";
import { sendContactEmail } from "../lib/sendContactEmail";

const initialForm = { user_name: "", user_email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.user_name.trim()) errors.user_name = "Please enter your name.";
  if (!form.user_email.trim()) {
    errors.user_email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.user_email)) {
    errors.user_email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) {
    errors.message = "Please write a message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: LinkedinGlyph,
    label: "LinkedIn",
    value: "afridi-fasiha",
    href: site.linkedin,
  },
  {
    icon: GithubGlyph,
    label: "GitHub",
    value: "fasihaafridi15-maker",
    href: site.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
    href: null,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await sendContactEmail(formRef.current);
      setStatus("success");
      setForm(initialForm);
      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// contact</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">build something together</span>
          </h2>
          <p className="text-[var(--text-body)] leading-relaxed">
            Open to frontend internships, collaborations, and community
            projects. My inbox is always open — reach out directly or use the
            form.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((c) => {
              const content = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20 border border-[var(--border-glass)] flex items-center justify-center text-[var(--accent-cyan)] shrink-0">
                    <c.icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wide">
                      {c.label}
                    </div>
                    <div className="text-sm text-[var(--text-heading)] font-medium truncate">
                      {c.value}
                    </div>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 hover:border-[var(--accent-cyan)]/40 transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={c.label} className="glass-card p-4 flex items-center gap-4">
                  {content}
                </div>
              );
            })}

            <div className="glass-card p-5 mt-2">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Prefer resume-first conversations?{" "}
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-cyan)] font-medium hover:underline"
                >
                  Download my resume
                </a>{" "}
                for a full overview of my education, projects, and skills.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass-card p-6 sm:p-8"
          >
            <input type="hidden" name="reply_to" value={form.user_email} />

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  placeholder="Ayesha Khan"
                  className={`w-full rounded-lg bg-white/[0.03] border px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent-cyan)]/60 ${
                    errors.user_name ? "border-red-400/60" : "border-[var(--border-glass)]"
                  }`}
                />
                {errors.user_name && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.user_name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg bg-white/[0.03] border px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent-cyan)]/60 ${
                    errors.user_email ? "border-red-400/60" : "border-[var(--border-glass)]"
                  }`}
                />
                {errors.user_email && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.user_email}</p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Internship opportunity"
                className={`w-full rounded-lg bg-white/[0.03] border px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent-cyan)]/60 ${
                  errors.subject ? "border-red-400/60" : "border-[var(--border-glass)]"
                }`}
              />
              {errors.subject && (
                <p className="text-xs text-red-400 mt-1.5">{errors.subject}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-[var(--text-muted)] mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className={`w-full rounded-lg bg-white/[0.03] border px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors resize-none focus:border-[var(--accent-cyan)]/60 ${
                  errors.message ? "border-red-400/60" : "border-[var(--border-glass)]"
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={17} /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400 mt-4">
                <CheckCircle2 size={16} /> Message sent successfully — thank
                you! I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400 mt-4">
                <AlertCircle size={16} /> Message could not be sent. Please try
                again, or email me directly at {site.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
