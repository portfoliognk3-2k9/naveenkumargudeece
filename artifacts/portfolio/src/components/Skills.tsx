import { motion } from "framer-motion";
import { SiArduino, SiPython, SiC, SiRaspberrypi } from "react-icons/si";
import { Cpu, Wifi, Brain, Layers, Zap, Mic2, BarChart2, GitBranch, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C Programming", icon: SiC },
      { name: "Python", icon: SiPython },
      { name: "MATLAB", icon: BarChart2 },
    ],
  },
  {
    title: "Embedded & Hardware",
    skills: [
      { name: "Arduino", icon: SiArduino },
      { name: "ESP8266 / ESP32", icon: Wifi },
      { name: "8051 Microcontroller", icon: Cpu },
      { name: "PCB Design", icon: Layers },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Artificial Intelligence", icon: Brain },
      { name: "IoT Systems", icon: GitBranch },
      { name: "Digital Electronics", icon: Zap },
      { name: "Verilog", icon: Cpu },
      { name: "Drone Systems", icon: Layers },
      { name: "Raspberry Pi", icon: SiRaspberrypi },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", icon: Users },
      { name: "Communication", icon: Mic2 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-24 bg-muted/30 dark:bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary dark:text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">Tools and technologies I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: ci * 0.1 } } }}
              data-testid={`skill-category-${ci}`}
              className="bg-white dark:bg-card rounded-2xl border border-border p-6 shadow-sm hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.06 }}
                      data-testid={`skill-${skill.name.toLowerCase().replace(/[\s/]+/g, "-")}`}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border dark:border-border bg-muted/50 dark:bg-secondary/30 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group cursor-default"
                    >
                      <Icon className="text-primary w-4 h-4 flex-shrink-0" />
                      <span className="text-secondary dark:text-foreground font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
