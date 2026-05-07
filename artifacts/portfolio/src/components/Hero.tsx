import { motion } from "framer-motion";
import { Zap, Database, Brain, ArrowRight, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const marqueeItems = [
  "AI", "MICROCONTROLLERS", "PCB DESIGN", "COMPUTER VISION", "MATLAB",
  "VERILOG", "IoT", "ARDUINO", "ESP32", "PYTHON", "EMBEDDED SYSTEMS", "DRONES",
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen bg-white dark:bg-background overflow-hidden pt-20">

      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } } }}
              data-testid="hero-name"
              className="text-5xl md:text-7xl font-black text-secondary dark:text-foreground leading-[1.1] tracking-tight mb-6"
            >
              ECE Student &{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">
                  Embedded Systems
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-primary">
                  AI Enthusiast
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } } }}
              data-testid="hero-intro"
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Aspiring engineer specializing in embedded systems, IoT, and AI-powered
              applications — building intelligent hardware-software solutions.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } } }}
              className="flex flex-wrap gap-4"
            >
              <button
                data-testid="cta-projects"
                onClick={() => scrollTo("projects")}
                className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </button>
              <button
                data-testid="cta-contact"
                onClick={() => scrollTo("contact")}
                className="px-8 py-3.5 rounded-full border border-secondary/20 dark:border-foreground/20 text-secondary dark:text-foreground font-semibold text-sm hover:bg-secondary/5 dark:hover:bg-foreground/5 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Contact Me <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } } }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "4+", label: "Projects Built" },
                { value: "3+", label: "Technologies" },
                { value: "2027", label: "Graduating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative justify-self-center lg:justify-self-end"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 blur-2xl scale-90" />

            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Spinning dashed ring */}
              <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-card shadow-2xl z-10"
                style={{ boxShadow: "0 0 0 8px hsl(190 90% 45% / 0.1), 0 25px 60px -12px hsl(190 90% 45% / 0.25)" }}>
                <img
                  src="/profile_photo.png"
                  alt="Gude Naveen Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-4 -left-6 z-20">
                <div className="bg-white dark:bg-card px-4 py-2.5 rounded-2xl shadow-xl border border-border flex items-center gap-2.5 font-bold text-sm text-secondary dark:text-foreground"
                  style={{ boxShadow: "0 8px 24px -4px hsl(190 90% 45% / 0.2)" }}>
                  <div className="w-7 h-7 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center">
                    <Zap size={14} className="text-yellow-500" />
                  </div>
                  ESP32
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-6 z-20">
                <div className="bg-white dark:bg-card px-4 py-2.5 rounded-2xl shadow-xl border border-border flex items-center gap-2.5 font-bold text-sm text-secondary dark:text-foreground"
                  style={{ boxShadow: "0 8px 24px -4px hsl(190 90% 45% / 0.2)" }}>
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain size={14} className="text-primary" />
                  </div>
                  AI
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 -left-2 z-20">
                <div className="bg-white dark:bg-card px-4 py-2.5 rounded-2xl shadow-xl border border-border flex items-center gap-2.5 font-bold text-sm text-secondary dark:text-foreground"
                  style={{ boxShadow: "0 8px 24px -4px hsl(190 90% 45% / 0.2)" }}>
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database size={14} className="text-primary" />
                  </div>
                  IoT
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-8 bg-secondary dark:bg-card text-white py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10" />
        <div className="flex animate-marquee whitespace-nowrap relative z-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8 text-xs font-black tracking-[0.2em] uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
