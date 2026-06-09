import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Cloud,
  GraduationCap,
  MapPin,
} from "lucide-react";

const facts = [
  { Icon: MapPin, label: "Bengaluru, India" },
  { Icon: BriefcaseBusiness, label: "EV91 Technologies" },
  { Icon: GraduationCap, label: "BE Information Science" },
  { Icon: Award, label: "RHCSA Certified" },
  { Icon: Cloud, label: "AWS + GCP" },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Building cloud infrastructure and modern applications with
            production discipline.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 md:p-8">
            <h3 className="text-2xl font-bold text-white">Who Am I?</h3>

            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I am a DevOps & Cloud Engineer currently working at EV91
                Technologies, focused on automation, reliability, and cloud
                delivery.
              </p>

              <p>
                My core work spans CI/CD pipelines, Docker, Kubernetes, AWS,
                GCP, Linux administration, and production-ready full-stack
                platforms.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#10131f]/70 p-7 md:p-8">
            <h3 className="text-2xl font-bold text-white">Quick Facts</h3>

            <div className="mt-6 grid gap-3">
              {facts.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200"
                >
                  <Icon size={18} className="text-amber-200" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
