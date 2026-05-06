import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "Government Polytechnic, Vijayawada",
    degree: "Diploma in Electrical, Electronics and Communication Engineering",
    duration: "June 2024 – July 2027",
    location: "Vijayawada, Andhra Pradesh",
    status: "ongoing",
    subjects: ["Digital Electronics", "IoT", "Artificial Intelligence", "PCB Design", "Microcontrollers"],
    highlight: "Current",
  },
  {
    institution: "Subhodaya EM High School",
    degree: "SSC (10th Standard)",
    duration: "2024",
    location: "Andhra Pradesh",
    status: "completed",
    subjects: ["Mathematics", "Science", "Technology"],
    score: "551 marks",
    highlight: "Completed",
  },
];

export default function Education() {
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
    <section id="education" data-testid="education-section" ref={sectionRef} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-16">
          <p className="text-[#00ff88] font-mono text-sm tracking-widest uppercase mb-3">02. Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Academic Journey</h2>
          <div className="w-16 h-0.5 bg-[#00ff88] mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/40 via-[#00ff88]/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div
                key={i}
                data-testid={`education-card-${i}`}
                className={`fade-in-up relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#00ff88] -translate-x-1/2 top-6 z-10 neon-glow" />

                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div
                    className="p-6 rounded-2xl border border-white/8 bg-[#111] card-hover"
                  >
                    <div className={`flex items-start gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={20} className="text-[#00ff88]" />
                      </div>
                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold mb-2 ${
                            edu.status === "ongoing"
                              ? "bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30"
                              : "bg-white/5 text-white/50 border border-white/10"
                          }`}
                        >
                          {edu.highlight}
                        </span>
                        <h3 className="text-white font-bold text-lg leading-tight">{edu.institution}</h3>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-3">{edu.degree}</p>

                    <div className={`flex flex-wrap gap-3 mb-4 text-white/40 text-xs ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>

                    {edu.score && (
                      <div className="mb-4">
                        <span className="text-[#00ff88]/80 font-mono text-sm font-semibold">{edu.score}</span>
                      </div>
                    )}

                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {edu.subjects.map((subj, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-xs border border-white/8 hover:border-[#00ff88]/30 hover:text-[#00ff88]/70 transition-colors"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
