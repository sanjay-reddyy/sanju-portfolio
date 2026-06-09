import { motion } from "framer-motion";
import { Boxes, Cloud, Code2, Database } from "lucide-react";

const stacks = [
  {
    title: "Cloud",
    Icon: Cloud,
    tech: ["AWS", "GCP"],
  },
  {
    title: "DevOps",
    Icon: Boxes,
    tech: ["Docker", "Kubernetes", "Jenkins", "Linux"],
  },
  {
    title: "Backend",
    Icon: Database,
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Frontend",
    Icon: Code2,
    tech: ["React", "Tailwind CSS", "TypeScript"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
          Tech Stack
        </p>

        <h2 className="mb-12 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Tools I use to ship, scale, and maintain systems.
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => (
            <motion.div
              key={stack.title}
              whileHover={{ y: -8 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-teal-300/35"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-300/10 text-teal-200">
                <stack.Icon size={22} />
              </div>

              <h3 className="mb-5 text-xl font-bold text-white">
                {stack.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {stack.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
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

export default TechStack;
