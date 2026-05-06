import { Mail, Github, Linkedin, Phone } from "lucide-react";

const navLinks = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
const socials = [
  { icon: Github, href: "https://github.com/portfoliognk3-2k9", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/naveenkumargudeece", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gudenaveenkumar9@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919652392414", label: "Phone" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-secondary dark:bg-card text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-2xl font-black mb-3">
              GNK<span className="text-primary">.</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              ECE student building at the intersection of hardware and intelligence.
            </p>
            <div className="flex gap-3 mt-5">
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
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                  onClick={() => scrollTo(link)}
                  className="text-left text-white/50 text-sm hover:text-white transition-colors py-0.5"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Contact</p>
            <div className="space-y-2">
              <p className="text-white/50 text-sm">gudenaveenkumar9@gmail.com</p>
              <p className="text-white/50 text-sm">+91 9652392414</p>
              <p className="text-white/50 text-sm">Vijayawada, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Gude Naveen Kumar. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with <span className="text-primary font-semibold">passion</span> for electronics &amp; AI
          </p>
        </div>
      </div>
    </footer>
  );
}
