import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  GraduationCap,
  MapPin,
} from "lucide-react";
import profileImage from "../../assets/images/sanju-1image.jpeg";
import collegeImage from "../../assets/images/graduated image.jpeg";
import degreeCertificate from "../../assets/images/BE-certified.png";

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
            <div className="grid items-center gap-8 md:grid-cols-[1fr_230px] lg:grid-cols-[1fr_260px]">
              <div>
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

              <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-teal-200/40 bg-gradient-to-br from-teal-300/20 via-white/10 to-amber-200/20 p-2 shadow-[0_0_45px_rgba(45,212,191,0.18)] md:mx-0 md:ml-auto lg:h-64 lg:w-64">
                <div className="h-full w-full rounded-full border-2 border-white/20 bg-slate-950 p-1 shadow-[inset_0_0_24px_rgba(255,255,255,0.08)]">
                  <img
                    src={profileImage}
                    alt="Sanju profile"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
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

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#10131f]/70"
        >
          <div className="grid items-stretch lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-80 overflow-hidden lg:min-h-full">
              <img
                src={collegeImage}
                alt="College journey"
                className="h-full min-h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a12]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#10131f]/60" />
              <div className="absolute left-5 top-5 rounded-lg border border-white/15 bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                2025 Graduate
              </div>
            </div>

            <div className="grid items-center gap-8 p-7 md:p-8 lg:p-10 xl:grid-cols-[1fr_260px]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                  College Journey
                </p>

                <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                  Information Science shaped my engineering foundation.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I studied Information Science Engineering at Acharya Institute
                  of Technology, where I built the foundation that now supports
                  my work across DevOps, cloud infrastructure, Linux systems,
                  and full-stack delivery.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-slate-200">
                    <GraduationCap size={18} className="text-teal-200" />
                    BE Information Science
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-slate-200">
                    <CalendarDays size={18} className="text-teal-200" />
                    Graduated in May 2025
                  </div>
                </div>
              </div>

              <div className="mx-auto flex aspect-square w-52 items-center justify-center rounded-full border border-amber-200/45 bg-gradient-to-br from-amber-200/20 via-white/8 to-teal-300/20 p-2 shadow-[0_0_55px_rgba(251,191,36,0.16)] sm:w-60 xl:ml-auto">
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-dashed border-white/25 bg-[#080a12]/80 p-2 shadow-[inset_0_0_28px_rgba(255,255,255,0.08)]">
                  <img
                    src={degreeCertificate}
                    alt="Degree certificate"
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="certificate-badge absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-center backdrop-blur-md">
                    <p className="certificate-badge-text text-sm font-bold text-white">
                      Degree Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
