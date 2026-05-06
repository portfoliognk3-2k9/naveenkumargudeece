import { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const stats = [
  { value: "4", label: "Projects Built" },
  { value: "10+", label: "Skills Mastered" },
  { value: "3+", label: "Technologies" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88] text-xs font-mono tracking-wider uppercase">Available for Projects</span>
            </div>

            <h1 data-testid="hero-name" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-white">Gude </span>
              <span className="neon-text">Naveen</span>
              <br />
              <span className="text-white">Kumar</span>
            </h1>

            <p data-testid="hero-tagline" className="text-[#00ff88]/80 font-mono text-sm md:text-base mb-5 tracking-wide">
              ECE Student  |  Embedded Systems  |  AI &amp; IoT Enthusiast
            </p>

            <p data-testid="hero-intro" className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              ECE student with a strong interest in electronics, AI, and smart systems.
              Builds practical, real-world projects integrating hardware and software to solve everyday problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                data-testid="cta-projects"
                onClick={scrollToProjects}
                className="px-7 py-3 rounded-lg bg-[#00ff88] text-black font-semibold text-sm hover:bg-[#00e87a] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#00ff88]/30"
              >
                View Projects
              </button>
              <button
                data-testid="cta-contact"
                onClick={scrollToContact}
                className="px-7 py-3 rounded-lg border border-[#00ff88]/30 text-[#00ff88] font-semibold text-sm hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4">
              <a
                data-testid="link-github"
                href="https://github.com/portfoliognk3-2k9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/10 text-white/50 hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                data-testid="link-linkedin"
                href="https://www.linkedin.com/in/naveenkumargudeece"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/10 text-white/50 hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#00ff88]/30 flex items-center justify-center relative neon-glow">
                <div className="absolute inset-0 rounded-full border border-[#00ff88]/10 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#111] border border-[#00ff88]/20 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60" fill="none">
                    <rect width="200" height="200" fill="#0d1a14" />
                    <circle cx="100" cy="72" r="32" fill="#00ff88" fillOpacity="0.15" stroke="#00ff88" strokeOpacity="0.4" strokeWidth="1.5" />
                    <circle cx="100" cy="72" r="20" fill="#00ff88" fillOpacity="0.25" />
                    <ellipse cx="100" cy="155" rx="52" ry="30" fill="#00ff88" fillOpacity="0.1" stroke="#00ff88" strokeOpacity="0.3" strokeWidth="1.5" />
                    <line x1="100" y1="104" x2="100" y2="125" stroke="#00ff88" strokeOpacity="0.4" strokeWidth="1.5" />
                    <circle cx="100" cy="72" r="8" fill="#00ff88" fillOpacity="0.6" />
                    <text x="100" y="185" textAnchor="middle" fill="#00ff88" fillOpacity="0.5" fontSize="10" fontFamily="monospace">GNK</text>
                    <path d="M40 100 Q70 60 100 100 Q130 140 160 100" stroke="#00ff88" strokeOpacity="0.15" strokeWidth="1" fill="none" />
                    <path d="M30 120 Q60 80 100 120 Q140 160 170 120" stroke="#00ff88" strokeOpacity="0.10" strokeWidth="1" fill="none" />
                    {[30, 50, 70, 90, 110, 130, 150, 170].map((x, i) => (
                      <circle key={i} cx={x} cy={30 + (i % 3) * 8} r="1.5" fill="#00ff88" fillOpacity="0.3" />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00ff88] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  data-testid={`stat-${i}`}
                  className="text-center p-4 rounded-xl border border-[#00ff88]/15 bg-[#00ff88]/5 hover:border-[#00ff88]/40 transition-all duration-300 hover:bg-[#00ff88]/8"
                >
                  <div className="text-2xl font-bold neon-text mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
