import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, MapPin, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_4zl3s3p";
const EMAILJS_TEMPLATE_ID = "template_r0mtplg";
const EMAILJS_PUBLIC_KEY = "iMRXEP-rTvCWLZCE7";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactItems = [
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
  {
    icon: MapPin,
    label: "Location",
    value: "Vijayawada, Andhra Pradesh",
    href: "#",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary dark:text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1 } } }}
          >
            <h3 className="text-2xl font-black text-secondary dark:text-foreground mb-3">Let's talk.</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm open to internship opportunities, project collaborations, and conversations
              about embedded systems, IoT, and AI. Don't hesitate to reach out.
            </p>

            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    data-testid={`contact-info-${i}`}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white dark:bg-card hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{item.label}</p>
                      <p className="text-secondary dark:text-foreground text-sm font-medium mt-0.5 group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h3 className="text-secondary dark:text-foreground text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2.5 rounded-full border border-border text-sm font-semibold text-secondary dark:text-foreground hover:border-primary/40 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-secondary dark:text-foreground mb-2">Full Name</label>
                  <input
                    data-testid="input-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-card text-secondary dark:text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary dark:text-foreground mb-2">Email Address</label>
                  <input
                    data-testid="input-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-card text-secondary dark:text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary dark:text-foreground mb-2">Message</label>
                  <textarea
                    data-testid="input-message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-card text-secondary dark:text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  data-testid="button-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-secondary dark:bg-primary text-white font-bold text-sm hover:bg-secondary/90 dark:hover:bg-primary/90 transition-all shadow-xl shadow-secondary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
