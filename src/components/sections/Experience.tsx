import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "RHCSA Certified",
    desc: "Achieved Red Hat Certified System Administrator certification."
  },
  {
    year: "2025",
    title: "Joined EV91 Technologies",
    desc: "Started working as DevOps & Cloud Engineer."
  },
  {
    year: "2025",
    title: "Enterprise DevOps Automation",
    desc: "Built Jenkins pipelines and automated deployments."
  },
  {
    year: "2025-26",
    title: "AWS → GCP Migration",
    desc: "Migrated workloads and infrastructure to GCP."
  },
  {
    year: "2026",
    title: "Production Deployments",
    desc: "Deployed applications using Docker, Kubernetes and cloud services."
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6 max-w-5xl mx-auto"
    >
      <p className="text-cyan-400 mb-3">
        EXPERIENCE
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        My Professional Journey
      </h2>

      <div className="relative border-l border-cyan-500/30 ml-4">

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12 ml-8"
          >
            <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-cyan-400" />

            <span className="text-cyan-400 text-sm">
              {item.year}
            </span>

            <h3 className="text-2xl font-semibold mt-2">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;