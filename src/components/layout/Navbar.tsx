import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          SANJ<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="flex flex-col gap-3 px-6 py-4 text-gray-200 text-base">
            <a
              href="#about"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;