import { motion } from "framer-motion";
import { SiArduino, SiPython, SiC, SiRaspberrypi } from "react-icons/si";
import { Cpu, Wifi, Brain, Layers, Zap, Mic2, BarChart2, GitBranch } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C Programming", icon: SiC, level: 80 },
      { name: "Python", icon: SiPython, level: 75 },
      { name: "MATLAB", icon: BarChart2, level: 60 },
    ],
  },
  {
    title: "Embedded & Hardware",
    skills: [
      { name: "Arduino", icon: SiArduino, level: 85 },
      { name: "ESP8266 / ESP32", icon: Wifi, level: 80 },
      { name: "8051 Microcontroller", icon: Cpu, level: 70 },
      { name: "PCB Design", icon: Layers, level: 65 },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Artificial Intelligence", icon: Brain, level: 65 },
      { name: "IoT Systems", icon: GitBranch, level: 80 },
      { name: "Digital Electronics", icon: Zap, level: 85 },
      { name: "Verilog", icon: Cpu, level: 55 },
      { name: "Drone Systems", icon: Layers, level: 60 },
      { name: "Raspberry Pi", icon: SiRaspberrypi, level: 60 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", icon: Mic2, level: 80 },
      { name: "Communication", icon: Mic2, level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary mb-4">Technical Skills</h2>
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
              className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <div key={si} data-testid={`skill-${skill.name.toLowerCase().replace(/[\s/]+/g, "-")}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <Icon className="text-primary w-4 h-4 flex-shrink-0" />
                          <span className="text-secondary font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: si * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-blue-500"
                        />
                      </div>
                    </div>
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
