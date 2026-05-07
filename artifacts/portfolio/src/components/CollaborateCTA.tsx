import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CollaborateCTA() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section data-testid="collaborate-cta" className="relative py-28 overflow-hidden bg-secondary dark:bg-card">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-8">
            <Sparkles size={12} /> Open to Collaborations
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-3xl mx-auto leading-tight">
            Want to collaborate on something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">meaningful?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Let's build something that matters — combining hardware, software, and intelligence.
          </p>

          <button
            data-testid="cta-hire-me"
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-3 px-10 h-14 rounded-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 text-white text-base font-bold transition-all duration-200"
          >
            Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
