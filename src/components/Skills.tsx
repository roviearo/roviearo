"use client";

import { motion } from "framer-motion";

const skills = [
  "Flutter", "Dart", "Firebase", "REST APIs", 
  "State Management (Bloc/Riverpod)", "Git", 
  "UI/UX Design", "Clean Architecture", "CI/CD"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">The technologies and tools I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-medium text-lg">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
