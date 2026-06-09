import { GitPullRequest, Mail, Network } from "lucide-react";

const contacts = [
  {
    Icon: Mail,
    title: "Email",
    value: "sanjureddyb7@gmail.com",
    href: "mailto:sanjureddyb7@gmail.com",
  },
  {
    Icon: GitPullRequest,
    title: "GitHub",
    value: "github.com/sanjay-reddyy",
    href: "https://github.com/sanjay-reddyy",
  },
  {
    Icon: Network,
    title: "LinkedIn",
    value: "linkedin.com/in/sanjay-kumar-070943318",
    href: "https://www.linkedin.com/in/sanjay-kumar-070943318/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
            Contact
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Let's build something reliable.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I'm open to conversations around DevOps, cloud engineering, full
            stack development, and strong engineering opportunities.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contacts.map(({ Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-lg border border-white/10 bg-[#10131f]/70 p-5 transition hover:-translate-y-1 hover:border-teal-300/40"
              >
                <Icon size={24} className="text-amber-200" />
                <h3 className="mt-5 font-bold text-white">{title}</h3>
                <p className="mt-2 break-words text-sm leading-6 text-slate-400 group-hover:text-slate-200">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
