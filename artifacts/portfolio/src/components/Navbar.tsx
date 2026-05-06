import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme, toggle } = useTheme();

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
      } bg-white/80 dark:bg-secondary/80 backdrop-blur-md border-b border-border`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("home")}
          className="flex items-center hover:opacity-85 transition-opacity"
        >
          <img
            src="/nk_logo.png"
            alt="NK logo"
            className="w-10 h-10 object-contain"
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-testid={`nav-link-${link.href}`}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-secondary dark:hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}

          <button
            data-testid="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary dark:hover:text-foreground hover:border-primary/40 transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            data-testid="nav-contact-btn"
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-full bg-secondary dark:bg-primary text-white text-sm font-semibold hover:bg-secondary/90 dark:hover:bg-primary/90 transition-all shadow-lg shadow-secondary/20"
          >
            Contact Me
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            data-testid="theme-toggle-mobile"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary dark:hover:text-foreground transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            data-testid="nav-menu-toggle"
            className="text-secondary dark:text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary border-b border-border px-6 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-testid={`mobile-nav-${link.href}`}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-secondary dark:hover:text-foreground py-2 border-b border-border/50 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 px-5 py-2.5 rounded-full bg-secondary dark:bg-primary text-white text-sm font-semibold"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
