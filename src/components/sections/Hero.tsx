import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/profile-red.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 md:pt-0">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-10 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-4">
            Hello, I'm
          </p>

         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Sanjay Kumar
          </h1>

          <div className="mt-6 text-2xl md:text-3xl text-cyan-300 font-medium h-[80px]">
  <TypeAnimation
sequence={[
  "DevOps Engineer",
  2000,
  "Cloud Engineer",
  2000,
  "RHCSA Certified",
  2000,
  "AWS & GCP Engineer",
  2000,
  "CI/CD Automation Engineer",
  2000,
]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>

          <p className="mt-6 text-gray-400 max-w-xl">
            DevOps & Cloud Engineer passionate about
            building scalable infrastructure, automating
            CI/CD pipelines, deploying containerized
            applications, and delivering production-ready
            web solutions.
          </p>

        <div className="flex flex-wrap gap-4 mt-8">

  <a
    href="#experience"
    className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 inline-block text-center"
  >
    Explore My Work
  </a>

  <a
    href="/resume.pdf"
    download
    className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition"
  >
    Download CV
  </a>

</div>

<div className="flex gap-6 mt-8 text-cyan-400">

  <a
    href="https://github.com/sanjay-reddyy"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/sanjay-kumar-070943318/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:sanjureddyb7@gmail.com">
    Email
  </a>

</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <h3 className="text-cyan-400 text-xl font-bold">1+</h3>
    <p className="text-sm text-gray-400">Years Experience</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <h3 className="text-cyan-400 text-xl font-bold">4+</h3>
    <p className="text-sm text-gray-400">Projects</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <h3 className="text-cyan-400 text-xl font-bold">RHCSA</h3>
    <p className="text-sm text-gray-400">Certified</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <h3 className="text-cyan-300 text-xl font-bold">AWS+GCP</h3>
    <p className="text-sm text-gray-400">Cloud</p>
  </div>
</div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
            <motion.div
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"
/>
          <img
  src={profile}
  alt="profile"
  className="
    w-[260px]
    sm:w-[300px]
    md:w-[380px]
    lg:w-[450px]
    rounded-3xl
    object-cover
    border
    border-white/10
    shadow-2xl
    hover:scale-105
    transition-all
    duration-500
  "
/>

          {/* Floating Badges */}

          <div className="hidden md:block absolute top-10 -left-5 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
            Docker
          </div>

          <div className="hidden md:block absolute bottom-16 -left-10 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
            Kubernetes
          </div>

          <div className="hidden md:block absolute top-24 -right-5 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
            AWS
          </div>

          <div className="hidden md:block absolute bottom-24 -right-8 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
            RHCSA
          </div>
          <div className="hidden md:block absolute top-1/2 -right-12 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
           Jenkins
          </div>

          <div className="hidden md:block absolute top-1/2 -left-14 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
           GCP
          </div>

          <div className="hidden md:block absolute bottom-2 left-1/2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl">
          Linux
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;