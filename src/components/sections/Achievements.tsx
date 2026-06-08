import { motion } from "framer-motion";

const stats = [
  {
    number: "RHCSA",
    title: "Red Hat Certified",
  },
  {
    number: "2",
    title: "Cloud Platforms",
  },
  {
    number: "4+",
    title: "Production Projects",
  },
];

const Achievements = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <p className="text-cyan-400 mb-3">
        IMPACT & ACHIEVEMENTS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        Numbers That Reflect My Journey
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-lg
              text-center
            "
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.title}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Achievements;