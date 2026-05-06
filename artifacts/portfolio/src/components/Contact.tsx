import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gudenaveenkumar9@gmail.com",
    href: "mailto:gudenaveenkumar9@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9652392414",
    href: "tel:+919652392414",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "naveenkumargudeece",
    href: "https://www.linkedin.com/in/naveenkumargudeece",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "portfoliognk3-2k9",
    href: "https://github.com/portfoliognk3-2k9",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up, .fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" data-testid="contact-section" ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">06. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Connect</h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
          <p className="text-white/50 mt-5 max-w-lg">
            Interested in collaborating on a project, or just want to discuss embedded systems and AI?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-up space-y-4" style={{ transitionDelay: "0.1s" }}>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  data-testid={`contact-info-${i}`}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#111] hover:border-[#00ff88]/30 hover:bg-[#00ff88]/3 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ff88]/20 transition-colors">
                    <Icon size={18} className="text-[#00ff88]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-white/80 text-sm mt-0.5 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/15 border border-[#00ff88]/30 flex items-center justify-center neon-glow">
                  <CheckCircle size={32} className="text-[#00ff88]" />
                </div>
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-white/50 text-center">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                data-testid="contact-form"
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl border border-white/8 bg-[#111] space-y-4"
              >
                <div>
                  <label className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-2">Name</label>
                  <input
                    data-testid="input-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00ff88]/50 focus:bg-[#00ff88]/2 transition-all"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-2">Email</label>
                  <input
                    data-testid="input-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00ff88]/50 focus:bg-[#00ff88]/2 transition-all"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    data-testid="input-message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00ff88]/50 focus:bg-[#00ff88]/2 transition-all resize-none"
                  />
                </div>

                <button
                  data-testid="button-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#00ff88] text-black font-bold text-sm hover:bg-[#00e87a] transition-all duration-200 hover:shadow-lg hover:shadow-[#00ff88]/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
