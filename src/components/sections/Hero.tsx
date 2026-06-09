import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  GitPullRequest,
  Mail,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/profile-red.jpg";

const metrics = [
  ["1+", "Years Experience"],
  ["4+", "Production Projects"],
  ["RHCSA", "Certified"],
  ["AWS + GCP", "Cloud Platforms"],
];

const focus = [
  { icon: Server, label: "CI/CD Automation" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: ShieldCheck, label: "Linux Operations" },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Available for DevOps & Cloud roles
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Sanjay Kumar
          </h1>

          <div className="mt-6 min-h-[44px] text-2xl font-semibold text-teal-200 md:text-3xl">
            <TypeAnimation
              sequence={[
                "DevOps Engineer",
                1800,
                "Cloud Engineer",
                1800,
                "RHCSA Certified",
                1800,
                "CI/CD Automation Engineer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build reliable cloud infrastructure, automate CI/CD pipelines,
            ship containerized applications, and keep production systems
            predictable under real-world pressure.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Explore Work
              <ArrowUpRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-amber-200/70 hover:bg-amber-200/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            {[
              { href: "https://github.com/sanjay-reddyy", label: "GitHub", Icon: GitPullRequest },
              { href: "https://www.linkedin.com/in/sanjay-kumar-070943318/", label: "LinkedIn", Icon: Network },
              { href: "mailto:sanjureddyb7@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300 transition hover:border-teal-300/40 hover:text-white"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map(([number, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <h3 className="text-xl font-black text-white">{number}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40">
            <img
              src={profile}
              alt="Sanjay Kumar"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-[#10131f]/90 p-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Current Focus
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {focus.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-200">
                  <Icon size={16} className="text-teal-200" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
