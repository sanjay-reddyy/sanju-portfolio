const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <p className="text-cyan-400 mb-3">
        CONTACT
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Let's Connect
      </h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        I'm always open to discussing
        DevOps, Cloud Engineering,
        Full Stack Development and
        exciting opportunities.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="mailto:sanjureddyb7@gmail.com"
          className="bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          <h3 className="text-cyan-400 font-semibold">
            Email
          </h3>

          <p className="mt-3 text-gray-300">
            sanjureddyb7@gmail.com
          </p>
        </a>

        <a
          href="https://github.com/sanjay-reddyy"
          target="_blank"
          rel="noreferrer"
          className="bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          <h3 className="text-cyan-400 font-semibold">
            GitHub
          </h3>

          <p className="mt-3 text-gray-300">
            github.com/sanjay-reddyy
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/sanjay-kumar-070943318/"
          target="_blank"
          rel="noreferrer"
          className="bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          <h3 className="text-cyan-400 font-semibold">
            LinkedIn
          </h3>

          <p className="mt-3 text-gray-300">
            linkedin.com/in/sanjay-kumar-070943318/
          </p>
        </a>

      </div>
    </section>
  );
};

export default Contact;