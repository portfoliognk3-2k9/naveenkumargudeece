import { motion } from "framer-motion";
import { Cpu, Wifi, BrainCircuit, Zap, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    icon: Cpu,
    title: "Embedded Systems Development",
    description: "Designing and programming microcontroller-based systems using Arduino, ESP32, and 8051 for real-world applications.",
    tags: ["Arduino", "ESP32", "C/C++", "Firmware"],
  },
  {
    icon: Wifi,
    title: "IoT-Based Solutions",
    description: "Building connected devices that communicate over Wi-Fi and sensor networks for smart home and remote monitoring.",
    tags: ["ESP8266", "Sensors", "Automation"],
  },
  {
    icon: BrainCircuit,
    title: "AI + Electronics Projects",
    description: "Integrating machine learning and computer vision with physical hardware using Python-driven AI models.",
    tags: ["Python", "AI/ML", "Computer Vision"],
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Creating automated control systems for safety and security — from fire alarm systems to autonomous bots.",
    tags: ["Control Systems", "Sensors", "Safety"],
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 bg-muted/30 dark:bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary dark:text-foreground mb-4">What I Can Do</h2>
          <p className="text-lg text-muted-foreground">Areas of expertise and contribution.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
                data-testid={`service-card-${i}`}
                className="group p-6 rounded-2xl border border-border bg-white dark:bg-card shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-secondary dark:text-foreground font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full bg-muted dark:bg-secondary/40 text-muted-foreground text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
