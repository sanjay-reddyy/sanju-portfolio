import { motion } from "framer-motion";

const projects = [
  {
    title: "EV91 Fleet Operations Command Center",
    type: "Enterprise Platform",
    description:
      "Built a real-time fleet monitoring dashboard integrating OpsPod and Alt Mobility APIs for vehicle tracking, operational visibility and fleet management.",
    tech: [
      "React",
      "TypeScript",
      "OpsPod",
      "Alt Mobility",
      "Maps"
    ],
  },

  {
    title: "Spark Diagnostics",
    type: "Healthcare Platform",
    description:
      "Designed and developed a healthcare platform with appointment management, diagnostics services and responsive UI.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind"
    ],
  },

  {
    title: "EV91 Platform",
    type: "Microservices",
    description:
      "Worked on enterprise EV ecosystem modules using React, TypeScript and backend integrations.",
    tech: [
      "Docker",
      "Kubernetes",
      "AWS",
      "PostgreSQL"
    ],
  },
];

const Projects = () => {
  return (
    <section
  id="projects"
  className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-cyan-400 text-sm mb-3">{project.type}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;