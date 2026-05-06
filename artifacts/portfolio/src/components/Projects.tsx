import { useEffect, useRef } from "react";
import { ExternalLink, Github, Lock, Bot, Plane, Flame } from "lucide-react";

const projects = [
  {
    id: "auto-lock",
    icon: Lock,
    title: "Automatic Lock System",
    description:
      "A smart security system that uses sensors and a microcontroller to automatically lock and unlock based on proximity and authentication conditions. Designed for embedded real-world deployment.",
    tech: ["Arduino", "C", "Sensors", "Servo Motor"],
    color: "#00ff88",
  },
  {
    id: "mini-bot",
    icon: Bot,
    title: "Mini Computer Bot",
    description:
      "A compact embedded system designed to perform automated tasks autonomously. Integrates multiple I/O peripherals controlled via microcontroller logic for repeatable task execution.",
    tech: ["8051", "C", "LCD Display", "Automation"],
    color: "#00d4ff",
  },
  {
    id: "drone-sim",
    icon: Plane,
    title: "Drone Programming & Simulation",
    description:
      "A Python-based drone control and simulation project that programs flight paths, tests autonomous navigation logic, and simulates real-world drone behavior in a virtual environment.",
    tech: ["Python", "Simulation", "Drone SDK", "Automation"],
    color: "#a78bfa",
  },
  {
    id: "fire-alarm",
    icon: Flame,
    title: "Fire Alarm System",
    description:
      "A safety-critical embedded system using fire and smoke sensors to detect danger, trigger audible alerts, and send notifications. Built for reliability and fast response time.",
    tech: ["Arduino", "Sensors", "Buzzer", "Safety Systems"],
    color: "#fb923c",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up, .fade-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" data-testid="projects-section" ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Things I've Built</h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-testid={`project-card-${project.id}`}
                className="fade-in-up group relative p-6 rounded-2xl border border-white/8 bg-[#111] overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5 opacity-60"
                  style={{ background: project.color }}
                />

                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${project.color}15`,
                      borderColor: `${project.color}30`,
                      color: project.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex gap-2">
                    <a
                      data-testid={`project-github-${project.id}`}
                      href="https://github.com/portfoliognk3-2k9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/8 text-white/30 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-200"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      data-testid={`project-link-${project.id}`}
                      href="https://github.com/portfoliognk3-2k9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/8 text-white/30 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-200"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#00ff88] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border"
                      style={{
                        backgroundColor: `${project.color}08`,
                        borderColor: `${project.color}20`,
                        color: `${project.color}99`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
