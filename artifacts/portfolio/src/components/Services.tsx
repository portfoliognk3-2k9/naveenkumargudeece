import { useEffect, useRef } from "react";
import { Cpu, Wifi, BrainCircuit, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Embedded Systems Development",
    description:
      "Designing and programming microcontroller-based systems using Arduino, ESP32, and 8051 for real-world applications. From firmware to full hardware integration.",
    tags: ["Arduino", "ESP32", "C/C++", "Firmware"],
  },
  {
    icon: Wifi,
    title: "IoT-Based Solutions",
    description:
      "Building connected devices that communicate over Wi-Fi and sensor networks. Smart home systems, data collection devices, and remote monitoring solutions.",
    tags: ["ESP8266", "Sensors", "MQTT", "Cloud"],
  },
  {
    icon: BrainCircuit,
    title: "AI + Electronics Projects",
    description:
      "Integrating machine learning and computer vision with physical hardware. Python-driven AI models connected to embedded systems for intelligent automation.",
    tags: ["Python", "AI/ML", "Computer Vision", "Automation"],
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Creating automated control systems for safety, security, and efficiency. From fire alarm systems to autonomous bots — reliable, real-time, and practical.",
    tags: ["Control Systems", "Sensors", "Safety", "Real-time"],
  },
];

export default function Services() {
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
    <section id="services" data-testid="services-section" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">05. Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What I Can Do</h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                className="fade-in-up group p-6 rounded-2xl border border-white/8 bg-[#111] card-hover cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ff88]/15 transition-colors">
                    <Icon size={22} className="text-[#00ff88]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-[#00ff88] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-[#00ff88]/60 group-hover:translate-x-1 transition-all mt-1" />
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md text-xs border border-white/8 text-white/40 bg-white/3 hover:border-[#00ff88]/25 hover:text-[#00ff88]/60 transition-colors"
                    >
                      {tag}
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
