import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080a12]/78 backdrop-blur-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-teal-300/30 bg-teal-300/10 text-sm font-black text-teal-200">
            SK
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            Sanjay Kumar
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-teal-300/40 hover:text-white"
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 lg:flex"
          >
            <ArrowDownToLine size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white"
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#080a12]/95 md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4 text-base text-slate-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 hover:bg-white/8 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
