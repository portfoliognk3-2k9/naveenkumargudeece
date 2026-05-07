import { motion } from "framer-motion";
import { Cpu, Wifi, BrainCircuit, Zap } from "lucide-react";

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
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wifi,
    title: "IoT-Based Solutions",
    description: "Building connected devices that communicate over Wi-Fi and sensor networks for smart home and remote monitoring.",
    tags: ["ESP8266", "Sensors", "Automation"],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI + Electronics Projects",
    description: "Integrating machine learning and computer vision with physical hardware using Python-driven AI models.",
    tags: ["Python", "AI/ML", "Computer Vision"],
    gradient: "from-blue-500 to-primary",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Creating automated control systems for safety and security — from fire alarm systems to autonomous bots.",
    tags: ["Control Systems", "Sensors", "Safety"],
    gradient: "from-cyan-400 to-blue-600",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 bg-primary/5 dark:bg-primary/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-4">What I Can Do</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 mx-auto" />
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
                className="group relative bg-white dark:bg-card rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-secondary dark:text-foreground font-bold text-base leading-snug group-hover:text-primary transition-colors pt-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-lg bg-muted/60 dark:bg-secondary/40 text-muted-foreground text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
