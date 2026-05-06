import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      } bg-white/80 backdrop-blur-md border-b border-border`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("home")}
          className="text-2xl font-black text-secondary tracking-tight hover:text-primary transition-colors"
        >
          GNK<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-testid={`nav-link-${link.href}`}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            data-testid="nav-contact-btn"
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
          >
            Contact Me
          </button>
        </div>

        <button
          data-testid="nav-menu-toggle"
          className="md:hidden text-secondary hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-testid={`mobile-nav-${link.href}`}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-secondary py-2 border-b border-border/50 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 px-5 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
