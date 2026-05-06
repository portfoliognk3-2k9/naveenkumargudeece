import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CollaborateCTA() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      data-testid="collaborate-cta"
      className="bg-secondary text-white py-24 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 max-w-3xl mx-auto leading-tight">
            Want to collaborate on something meaningful?
          </h2>
          <button
            data-testid="cta-hire-me"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-10 h-14 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-xl shadow-primary/20 transition-all"
          >
            Hire Me! <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
