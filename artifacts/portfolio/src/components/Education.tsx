import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

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
    description:
      "Currently pursuing a diploma focused on practical electronics, embedded systems design, and emerging technologies like IoT and AI.",
  },
  {
    institution: "Subhodaya EM High School",
    degree: "SSC (10th Standard)",
    duration: "2024",
    status: "Completed",
    score: "551 marks",
    subjects: ["Mathematics", "Science", "Technology"],
    description:
      "Completed SSC with strong scores in science and mathematics, building the analytical foundation for engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" data-testid="education-section" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-secondary mb-4">Education Journey</h2>
          <p className="text-lg text-muted-foreground">The academic foundation behind the builds.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              data-testid={`education-card-${i}`}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={16} />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-border rounded-2xl hover:border-primary/40 transition-colors shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-primary flex items-center gap-1.5">
                      <Calendar size={13} /> {edu.duration}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        edu.status === "Ongoing"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-secondary mb-1">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{edu.degree}</p>

                  {edu.score && (
                    <p className="text-sm font-bold text-primary mb-3">{edu.score}</p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((s, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
