import { motion } from "framer-motion";
import { BadgeCheck, CloudCog, Rocket } from "lucide-react";

const stats = [
  {
    Icon: BadgeCheck,
    number: "RHCSA",
    title: "Red Hat Certified",
    tone: "text-amber-200",
  },
  {
    Icon: CloudCog,
    number: "2",
    title: "Cloud Platforms",
    tone: "text-teal-200",
  },
  {
    Icon: Rocket,
    number: "4+",
    title: "Production Projects",
    tone: "text-rose-200",
  },
];

const Achievements = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
          Impact & Achievements
        </p>

        <h2 className="mb-12 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          Signals that reflect hands-on engineering growth.
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-lg border border-white/10 bg-[#10131f]/70 p-7"
            >
              <item.Icon size={26} className={item.tone} />

              <h3 className="mt-8 text-4xl font-black text-white">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-400">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
