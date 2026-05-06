import { useEffect, useRef } from "react";
import { Cpu, Wifi, BrainCircuit, Zap } from "lucide-react";

const highlights = [
  { icon: Cpu, label: "Embedded Systems", desc: "Arduino, ESP8266/ESP32, 8051 Microcontroller" },
  { icon: Wifi, label: "IoT Engineering", desc: "Smart devices, sensor networks, automation" },
  { icon: BrainCircuit, label: "AI & Computer Vision", desc: "Python-based AI integration with hardware" },
  { icon: Zap, label: "PCB & Electronics", desc: "Circuit design, Digital Electronics, VLSI basics" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up, .fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" data-testid="about-section" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">01. About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="fade-in-up text-white/60 text-lg leading-relaxed" style={{ transitionDelay: "0.1s" }}>
              I'm <span className="text-white font-semibold">Gude Naveen Kumar</span>, an ECE student with a genuine passion
              for building things that work — systems where hardware meets software and creates something useful.
            </p>
            <p className="fade-in-up text-white/60 leading-relaxed" style={{ transitionDelay: "0.2s" }}>
              My interest lies at the intersection of electronics and intelligence. Whether it's programming a microcontroller
              to respond to the physical world, designing IoT systems that communicate across networks, or applying computer vision
              to solve real problems — I love building things that bridge the gap between the digital and the physical.
            </p>
            <p className="fade-in-up text-white/60 leading-relaxed" style={{ transitionDelay: "0.3s" }}>
              I have hands-on experience with Arduino, ESP8266/ESP32, and 8051 microcontrollers, and I've worked on projects
              spanning security systems, automation, drone simulation, and safety engineering. Every project I build is
              an attempt to make something genuinely useful.
            </p>

            <div className="fade-in-up pt-4" style={{ transitionDelay: "0.4s" }}>
              <div className="p-5 rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <p className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-2">Career Goal</p>
                <p className="text-white/80 italic leading-relaxed">
                  "To become a skilled engineer capable of developing intelligent and impactful technology solutions
                  that bridge the gap between hardware and software."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  data-testid={`highlight-card-${i}`}
                  className="fade-in-up p-5 rounded-xl border border-white/8 bg-[#111] card-hover cursor-default"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#00ff88]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.label}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
