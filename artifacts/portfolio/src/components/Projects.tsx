import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    id: "auto-lock",
    title: "Automatic Lock System",
    desc: "Smart locking mechanism leveraging microcontrollers and robust sensors. Focused on providing seamless security and automation for modern spaces.",
    tags: ["Microcontrollers", "Sensors", "Automation"],
  },
  {
    id: "mini-bot",
    title: "Mini Computer Bot",
    desc: "A small, programmable robotics platform capable of performing autonomous tasks. Built entirely using custom embedded systems and precise control logic.",
    tags: ["Robotics", "Embedded Systems", "Control Logic"],
  },
  {
    id: "iot-automation",
    title: "IoT-Based Automation",
    desc: "Web-controlled sensor networks using ESP8266 and ESP32. Allows for remote monitoring and real-time environment automation from anywhere.",
    tags: ["ESP32", "ESP8266", "IoT", "Web Tech"],
  },
  {
    id: "ai-raspi",
    title: "AI on Raspberry Pi",
    desc: "Running complex AI and computer vision models directly on Raspberry Pi hardware. Demonstrates the power of edge computing and real-time processing.",
    tags: ["Raspberry Pi", "AI", "Computer Vision", "Python"],
  },
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-secondary mb-3">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">Real systems. Real hardware. Real impact.</p>
            </div>
            <a
              href="https://github.com/portfoliognk3-2k9"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github-profile-link"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/20 text-secondary font-semibold text-sm hover:bg-secondary/5 transition-all"
            >
              <Github size={16} /> View GitHub
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              data-testid={`project-card-${project.id}`}
              className="group bg-white border border-border rounded-2xl hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm font-bold text-secondary group-hover:text-primary transition-colors mt-auto pt-4 border-t border-border">
                  View Details{" "}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
