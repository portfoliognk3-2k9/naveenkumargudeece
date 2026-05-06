import { motion } from "framer-motion";
import { Zap, Database, Brain, ArrowRight } from "lucide-react";

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
    <section id="home" data-testid="hero-section" className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary pt-20">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                Gude Naveen Kumar
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } } }}
              data-testid="hero-name"
              className="text-5xl md:text-7xl font-black text-secondary leading-[1.1] tracking-tight mb-6"
            >
              ECE Student{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Embedded Systems &amp; AI Enthusiast
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } } }}
              data-testid="hero-intro"
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Aspiring engineer specializing in embedded systems, IoT, and AI-powered applications.
              Passionate about building intelligent systems by combining hardware and software to solve real-world problems.
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
                className="px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20"
              >
                View Projects
              </button>
              <button
                data-testid="cta-contact"
                onClick={() => scrollTo("contact")}
                className="px-8 py-3.5 rounded-full border border-secondary/20 text-secondary font-semibold text-sm hover:bg-secondary/5 transition-all flex items-center gap-2"
              >
                Contact Me <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative justify-self-center lg:justify-self-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full p-4">
              <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 animate-pulse" style={{ animationDuration: "4s" }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <img
                  src="/profile_photo.png"
                  alt="Gude Naveen Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-8 -left-4 z-20"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2 font-bold text-sm text-secondary">
                  <Zap size={16} className="text-yellow-500" /> ESP32
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-4 z-20"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2 font-bold text-sm text-secondary">
                  <Brain size={16} className="text-primary" /> AI
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-0 z-20"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2 font-bold text-sm text-secondary">
                  <Database size={16} className="text-primary" /> IoT
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-secondary text-white py-4 overflow-hidden mt-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-bold tracking-widest uppercase">
              {item}
              <span className="text-primary">+</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
