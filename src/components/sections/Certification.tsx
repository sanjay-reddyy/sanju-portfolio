import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import rhcsa from "../../assets/images/rhcsa.jpg";

const Certifications = () => {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
          Certifications
        </p>

        <h2 className="mb-12 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Professional validation for Linux administration.
        </h2>

        <div className="grid gap-6 rounded-lg border border-white/10 bg-[#10131f]/75 p-5 md:grid-cols-[1fr_340px] md:p-8">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-200 text-slate-950">
                <Award size={24} />
              </div>

              <h3 className="text-4xl font-black text-white">RHCSA</h3>

              <p className="mt-3 text-xl font-semibold text-teal-200">
                Red Hat Certified System Administrator
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Certified by Red Hat in Linux system administration, user
                management, networking, storage management, and enterprise
                Linux operations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <ShieldCheck size={16} className="text-teal-200" />
                Enterprise Linux
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <ExternalLink size={16} className="text-amber-200" />
                Red Hat Credential
              </span>
            </div>
          </div>

          <img
            src={rhcsa}
            alt="RHCSA Certificate"
            className="h-full min-h-[260px] w-full rounded-md border border-white/10 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
