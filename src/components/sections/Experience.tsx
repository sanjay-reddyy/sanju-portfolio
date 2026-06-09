import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "RHCSA Certified",
    desc: "Achieved Red Hat Certified System Administrator certification.",
  },
  {
    year: "2025",
    title: "Joined EV91 Technologies",
    desc: "Started working as DevOps & Cloud Engineer.",
  },
  {
    year: "2025",
    title: "Enterprise DevOps Automation",
    desc: "Built Jenkins pipelines and automated deployments.",
  },
  {
    year: "2025-26",
    title: "AWS to GCP Migration",
    desc: "Migrated workloads and infrastructure to GCP.",
  },
  {
    year: "2026",
    title: "Production Deployments",
    desc: "Deployed applications using Docker, Kubernetes and cloud services.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
          Experience
        </p>

        <h2 className="mb-14 text-4xl font-black leading-tight md:text-5xl">
          My professional journey
        </h2>

        <div className="relative ml-4 border-l border-teal-300/25">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 ml-8 rounded-lg border border-white/10 bg-white/[0.035] p-5"
            >
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4 border-[#0a0c13] bg-teal-300" />

              <span className="text-sm font-semibold text-amber-200">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
