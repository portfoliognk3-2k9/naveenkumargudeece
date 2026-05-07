import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const education = [
  {
    institution: "Government Polytechnic, Vijayawada",
    degree: "Diploma in Electrical, Electronics and Communication Engineering",
    duration: "June 2024 – July 2027",
    status: "Ongoing",
    subjects: ["Digital Electronics", "IoT", "AI", "PCB Design", "Microcontrollers"],
    description: "Currently pursuing a diploma focused on practical electronics, embedded systems design, and emerging technologies like IoT and AI.",
    gradient: "from-primary to-blue-500",
  },
  {
    institution: "Subhodaya EM High School",
    degree: "SSC (10th Standard)",
    duration: "2024",
    status: "Completed",
    score: "551 marks",
    subjects: ["Mathematics", "Science", "Technology"],
    description: "Completed SSC with strong scores in science and mathematics, building the analytical foundation for engineering.",
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function Education() {
  return (
    <section id="education" data-testid="education-section" className="relative py-24 bg-white dark:bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-4">Education</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              data-testid={`education-card-${i}`}
              className="group relative bg-white dark:bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${edu.gradient}`} />

              <div className="p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary dark:text-foreground group-hover:text-primary transition-colors">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Calendar size={12} className="text-primary" /> {edu.duration}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      edu.status === "Ongoing"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-muted dark:bg-secondary/40 text-muted-foreground border border-border"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                {edu.score && (
                  <p className="text-sm font-bold text-primary mb-3 ml-16">{edu.score}</p>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-16">{edu.description}</p>

                <div className="flex flex-wrap gap-2 ml-16">
                  {edu.subjects.map((s, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/70 dark:bg-secondary/40 text-muted-foreground text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-colors">
                      <BookOpen size={10} /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
