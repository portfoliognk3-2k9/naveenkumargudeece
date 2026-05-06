import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "What I Can Do", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#00ff88]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => handleNav("#home")}
          className="font-mono text-lg font-semibold tracking-tight"
        >
          <span className="neon-text">GNK</span>
          <span className="text-white/40 text-sm ml-1">{"// dev"}</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                data-testid={`nav-link-${id}`}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#00ff88] relative group ${
                  active === id ? "text-[#00ff88]" : "text-white/60"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-200 bg-[#00ff88] ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <button
          data-testid="nav-menu-toggle"
          className="md:hidden text-white/70 hover:text-[#00ff88] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-md border-b border-[#00ff88]/10 px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                data-testid={`mobile-nav-${id}`}
                onClick={() => handleNav(link.href)}
                className={`text-left text-sm font-medium py-2 border-b border-white/5 transition-colors hover:text-[#00ff88] ${
                  active === id ? "text-[#00ff88]" : "text-white/60"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
