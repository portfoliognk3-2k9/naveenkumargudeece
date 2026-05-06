import { Mail, Github, Linkedin, Phone } from "lucide-react";

const quickLinks = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
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
    <footer data-testid="footer" className="border-t border-white/5 bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-mono text-xl font-bold mb-3">
              <span className="neon-text">GNK</span>
              <span className="text-white/30 text-sm ml-1">{"// dev"}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              ECE student building at the intersection of hardware and intelligence.
            </p>
          </div>

          <div>
            <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                  onClick={() => scrollTo(link)}
                  className="text-left text-white/40 text-sm hover:text-[#00ff88] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
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
                    className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-white/40 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <p className="text-white/25 text-xs mt-4">gudenaveenkumar9@gmail.com</p>
            <p className="text-white/25 text-xs mt-1">+91 9652392414</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-mono">
            &copy; {new Date().getFullYear()} Gude Naveen Kumar. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with <span className="neon-text">passion</span> for electronics &amp; AI
          </p>
        </div>
      </div>
    </footer>
  );
}
