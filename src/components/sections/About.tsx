import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 mb-3">
          ABOUT ME
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Building Cloud Infrastructure
          & Modern Applications
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Who Am I?
          </h3>

          <p className="text-gray-400 leading-8">
            I am a DevOps & Cloud Engineer
            currently working at EV91 Technologies.

            My expertise includes CI/CD
            automation, Docker, Kubernetes,
            AWS, GCP and Linux administration.

            Alongside infrastructure work,
            I enjoy building scalable web
            applications and production-ready
            platforms.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-6">
            Quick Facts
          </h3>

          <div className="space-y-4">

            <div>
              📍 Bengaluru, India
            </div>

            <div>
              🏢 EV91 Technologies
            </div>

            <div>
              🎓 BE Information Science
            </div>

            <div>
              🏆 RHCSA Certified
            </div>

            <div>
              ☁ AWS + GCP
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;