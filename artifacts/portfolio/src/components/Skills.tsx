import { useEffect, useRef } from "react";
import { SiArduino, SiPython, SiC } from "react-icons/si";
import { Cpu, Wifi, Brain, Layers, Zap, Mic2, BarChart2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C", icon: SiC, level: 80 },
      { name: "Python", icon: SiPython, level: 75 },
      { name: "MATLAB", icon: BarChart2, level: 60 },
    ],
  },
  {
    title: "Embedded & Hardware",
    skills: [
      { name: "Arduino", icon: SiArduino, level: 85 },
      { name: "ESP8266/ESP32", icon: Wifi, level: 75 },
      { name: "8051 Microcontroller", icon: Cpu, level: 70 },
      { name: "PCB Design", icon: Layers, level: 65 },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Artificial Intelligence", icon: Brain, level: 65 },
      { name: "IoT", icon: Wifi, level: 80 },
      { name: "Digital Electronics", icon: Zap, level: 85 },
      { name: "Verilog", icon: Cpu, level: 55 },
      { name: "Drones", icon: Layers, level: 60 },
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            const bars = e.target.querySelectorAll("[data-width]");
            bars.forEach((bar) => {
              const w = (bar as HTMLElement).dataset.width;
              if (w) setTimeout(() => { (bar as HTMLElement).style.width = w; }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up, .fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" data-testid="skills-section" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">03. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Toolkit</h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <div
              key={ci}
              data-testid={`skill-category-${ci}`}
              className="fade-in-up p-6 rounded-2xl border border-white/8 bg-[#111] card-hover"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <div key={si} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <Icon className="text-[#00ff88]/70 w-4 h-4 flex-shrink-0" />
                          <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-white/30 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00ff88] to-[#00e87a] transition-all duration-1000 ease-out"
                          style={{ width: "0%", transitionDelay: `${si * 0.1}s` }}
                          data-width={`${skill.level}%`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
