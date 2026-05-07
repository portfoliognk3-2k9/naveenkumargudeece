import { motion } from "framer-motion";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    id: "auto-lock",
    title: "Automatic Lock System",
    desc: "Smart locking mechanism leveraging microcontrollers and robust sensors for seamless security and automation.",
    tags: ["Microcontrollers", "Sensors", "Automation"],
    gradient: "from-cyan-500 to-blue-500",
    num: "01",
  },
  {
    id: "mini-bot",
    title: "Mini Computer Bot",
    desc: "A small programmable robotics platform for autonomous tasks, built with custom embedded systems and control logic.",
    tags: ["Robotics", "Embedded Systems", "Control Logic"],
    gradient: "from-blue-500 to-primary",
    num: "02",
  },
  {
    id: "iot-automation",
    title: "IoT-Based Automation",
    desc: "Web-controlled sensor networks using ESP8266 and ESP32 for remote monitoring and real-time environment automation.",
    tags: ["ESP32", "ESP8266", "IoT", "Web Tech"],
    gradient: "from-primary to-cyan-400",
    num: "03",
  },
  {
    id: "drone-sim",
    title: "Drone Control Simulation",
    desc: "Built a real-time drone control system using Python and PySimVerse with keyboard-based flight navigation and movement controls.",
    tags: ["Python", "PySimVerse", "Drone Simulation", "Robotics"],
    gradient: "from-cyan-400 to-blue-600",
    num: "04",
    linkedinPost: "https://www.linkedin.com/posts/naveenkumargudeece_python-drone-robotics-activity-7457986185899069440-KMSI",
  },
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 bg-white dark:bg-background overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">My Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-2">Featured Projects</h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500" />
            </div>
            <a
              href="https://www.linkedin.com/in/naveenkumargudeece"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="linkedin-profile-link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/5 dark:bg-foreground/5 border border-secondary/15 dark:border-foreground/15 text-secondary dark:text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <Linkedin size={15} /> View LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              data-testid={`project-card-${project.id}`}
              className="group relative bg-white dark:bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Gradient top accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity select-none`}>
                    {project.num}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}>
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary dark:text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-muted/70 dark:bg-secondary/40 text-muted-foreground text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={"linkedinPost" in project ? project.linkedinPost : "https://www.linkedin.com/in/naveenkumargudeece"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`project-linkedin-${project.id}`}
                  className="flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors pt-4 border-t border-border"
                >
                  {"linkedinPost" in project ? "View Post" : "View LinkedIn"} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
