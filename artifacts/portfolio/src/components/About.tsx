import { motion } from "framer-motion";
import { Cpu, Wifi, BrainCircuit, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  { icon: Cpu, label: "Embedded Systems", desc: "Arduino, ESP8266/ESP32, 8051 MCU" },
  { icon: Wifi, label: "IoT Engineering", desc: "Smart devices & sensor networks" },
  { icon: BrainCircuit, label: "AI Integration", desc: "Python-driven AI on hardware" },
  { icon: Zap, label: "PCB & Electronics", desc: "Circuit design & Digital Electronics" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary dark:text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">The story behind the engineer.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              My fascination with technology started the moment I realized how simple
              electronic components could be orchestrated to perform complex tasks. Today,
              I combine my foundational knowledge of Electronics with Artificial Intelligence
              to create smart, responsive systems.
            </p>
            <p>
              I have extensive hands-on experience working with microcontrollers like Arduino,
              ESP8266, and ESP32, integrating them with various sensors to build functional IoT
              networks. But I don't stop at hardware — I write the firmware and the higher-level
              logic (in C and Python) that brings these devices to life.
            </p>
            <p className="font-semibold text-secondary dark:text-foreground">
              My career goal is clear: To become a skilled engineer capable of developing
              intelligent and impactful technology solutions that make a tangible difference.
            </p>
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
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                  data-testid={`highlight-card-${i}`}
                  className="p-5 rounded-2xl border border-border bg-white dark:bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-secondary dark:text-foreground font-bold text-sm mb-1">{item.label}</h3>
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
