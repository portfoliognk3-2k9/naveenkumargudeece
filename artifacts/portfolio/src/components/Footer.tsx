import { Mail, Github, Linkedin, Phone } from "lucide-react";

const navLinks = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
const socials = [
  { icon: Github, href: "https://github.com/portfoliognk3-2k9", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/naveenkumargudeece", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gudenaveenkumar9@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919652392414", label: "Phone" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer data-testid="footer" className="bg-secondary dark:bg-card text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/nk_logo.png" alt="NK Logo" className="w-10 h-10 object-contain mb-4 opacity-90" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              ECE student building at the intersection of hardware and intelligence.
            </p>
            <div className="flex gap-2.5 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-bold mb-5">Navigation</p>
            <div className="grid grid-cols-2 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                  onClick={() => scrollTo(link)}
                  className="text-left text-white/40 text-sm hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.15em] font-bold mb-5">Contact</p>
            <div className="space-y-2.5">
              <p className="text-white/40 text-sm">gudenaveenkumar9@gmail.com</p>
              <p className="text-white/40 text-sm">+91 9652392414</p>
              <p className="text-white/40 text-sm">Vijayawada, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Gude Naveen Kumar. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Built with <span className="text-primary/70 font-semibold">passion</span> for electronics &amp; AI
          </p>
        </div>
      </div>
    </footer>
  );
}
