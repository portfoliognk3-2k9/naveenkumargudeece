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
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "C Programming", icon: SiC },
      { name: "Python", icon: SiPython },
      { name: "MATLAB", icon: BarChart2 },
    ],
  },
  {
    title: "Embedded & Hardware",
    gradient: "from-primary to-cyan-400",
    skills: [
      { name: "Arduino", icon: SiArduino },
      { name: "ESP8266 / ESP32", icon: Wifi },
      { name: "8051 Microcontroller", icon: Cpu },
      { name: "PCB Design", icon: Layers },
    ],
  },
  {
    title: "Technologies",
    gradient: "from-blue-500 to-primary",
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
    gradient: "from-cyan-400 to-blue-600",
    skills: [
      { name: "Leadership", icon: Users },
      { name: "Communication", icon: Mic2 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 bg-secondary/5 dark:bg-[hsl(222,47%,9%)] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: ci * 0.1 } } }}
              data-testid={`skill-category-${ci}`}
              className="group relative bg-white dark:bg-white/5 rounded-2xl border border-border dark:border-white/10 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${cat.gradient}`} />

              <div className="p-6">
                <h3 className={`text-xs font-black uppercase tracking-[0.15em] mb-5 text-transparent bg-clip-text bg-gradient-to-r ${cat.gradient}`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={si}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: si * 0.07 }}
                        data-testid={`skill-${skill.name.toLowerCase().replace(/[\s/]+/g, "-")}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-primary/10 dark:hover:bg-primary/20 border border-transparent hover:border-primary/30 transition-all duration-200 cursor-default"
                      >
                        <Icon className="text-primary w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-secondary dark:text-white font-semibold text-xs">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
