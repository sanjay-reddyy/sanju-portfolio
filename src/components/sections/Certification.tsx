import rhcsa from "../../assets/images/rhcsa.jpg";

const Certifications = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <p className="text-cyan-400 mb-3">
        CERTIFICATIONS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Professional Certifications
      </h2>

      <div className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur-lg
      ">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-3xl font-bold">
              RHCSA
            </h3>

            <p className="text-cyan-400 mt-2">
              Red Hat Certified System Administrator
            </p>

            <p className="text-gray-400 mt-6 max-w-2xl">
              Certified by Red Hat in Linux system
              administration, user management,
              networking, storage management and
              enterprise Linux operations.
            </p>
          </div>

          <img
  src={rhcsa}
  alt="RHCSA Certificate"
  className="
    w-full
    max-w-[300px]
    rounded-2xl
    border
    border-white/10
  "
/>

        </div>
      </div>
    </section>
  );
};

export default Certifications;