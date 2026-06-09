import { motion } from "framer-motion";
import { ArrowUpRight, Building2, HeartPulse, Layers3 } from "lucide-react";

const projects = [
  {
    title: "EV91 Fleet Operations Command Center",
    type: "Enterprise Platform",
    Icon: Building2,
    description:
      "Built a real-time fleet monitoring dashboard integrating OpsPod and Alt Mobility APIs for vehicle tracking, operational visibility, and fleet management.",
    tech: ["React", "TypeScript", "OpsPod", "Alt Mobility", "Maps"],
  },
  {
    title: "Spark Diagnostics",
    type: "Healthcare Platform",
    Icon: HeartPulse,
    description:
      "Designed and developed a healthcare platform with appointment management, diagnostics services, and a responsive user experience.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "EV91 Platform",
    type: "Microservices",
    Icon: Layers3,
    description:
      "Worked on enterprise EV ecosystem modules using React, TypeScript, containerization, cloud services, and backend integrations.",
    tech: ["Docker", "Kubernetes", "AWS", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
              Projects
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Selected work with real operational context.
            </h2>
          </div>
          <a
            href="https://github.com/sanjay-reddyy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-teal-300/50 hover:bg-white/[0.04]"
          >
            GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex min-h-[360px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-300/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-950">
                  <project.Icon size={23} />
                </div>
                <span className="rounded-md border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black leading-tight text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-teal-300/10 px-2.5 py-1 text-xs font-medium text-teal-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
