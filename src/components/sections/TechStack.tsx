import { motion } from "framer-motion";

const stacks = [
  {
    title: "Cloud",
    tech: ["AWS", "GCP"],
  },
  {
    title: "DevOps",
    tech: ["Docker", "Kubernetes", "Jenkins", "Ansible"],
  },
  {
    title: "Backend",
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Frontend",
    tech: ["React", "Tailwind CSS", "TypeScript"],
  },
];

const TechStack = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <p className="text-cyan-400 mb-3">
        TECH STACK
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        Technologies I Work With
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stacks.map((stack) => (
          <motion.div
            key={stack.title}
            whileHover={{
              y: -10,
            }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-lg
            "
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              {stack.title}
            </h3>

            <div className="space-y-3">
              {stack.tech.map((item) => (
                <div
                  key={item}
                  className="
                    bg-white/5
                    rounded-xl
                    px-3
                    py-2
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default TechStack;