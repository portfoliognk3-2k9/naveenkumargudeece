import { motion } from "framer-motion";
import { Cpu, Wifi, BrainCircuit, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  { icon: Cpu, label: "Embedded Systems", desc: "Arduino, ESP8266/ESP32, 8051 MCU", color: "from-cyan-500 to-blue-500" },
  { icon: Wifi, label: "IoT Engineering", desc: "Smart devices & sensor networks", color: "from-primary to-cyan-400" },
  { icon: BrainCircuit, label: "AI Integration", desc: "Python-driven AI on hardware", color: "from-blue-500 to-primary" },
  { icon: Zap, label: "PCB & Electronics", desc: "Circuit design & Digital Electronics", color: "from-cyan-400 to-blue-600" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 bg-primary/5 dark:bg-primary/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My fascination with technology started the moment I realized how simple
              electronic components could be orchestrated to perform complex tasks. Today,
              I combine my foundational knowledge of Electronics with Artificial Intelligence
              to create smart, responsive systems.
            </p>
            <p>
              I have extensive hands-on experience working with microcontrollers like Arduino,
              ESP8266, and ESP32, integrating them with various sensors to build functional IoT
              networks. I also write the firmware and higher-level logic (in C and Python) that
              brings these devices to life.
            </p>
            <div className="p-5 rounded-2xl bg-white dark:bg-card border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-500 rounded-l-2xl" />
              <p className="font-semibold text-secondary dark:text-foreground pl-3">
                My career goal is clear: To become a skilled engineer capable of developing
                intelligent and impactful technology solutions that make a tangible difference.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  data-testid={`highlight-card-${i}`}
                  className="group relative p-5 rounded-2xl border border-border bg-white dark:bg-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color}`} />
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-secondary dark:text-foreground font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.label}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
