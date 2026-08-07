import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="eyebrow font-mono mb-4">// projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Things I&apos;ve <span className="text-gradient">built &amp; shipped</span>
          </h2>
          <p className="text-[var(--text-body)] leading-relaxed">
            A mix of AI experiments, civic-tech, academic systems, and internship
            work — each one taught me something different about building real
            software.
          </p>
        </motion.div>

        <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-5">
          Featured
        </h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured />
          ))}
        </div>

        <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-5">
          More Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
