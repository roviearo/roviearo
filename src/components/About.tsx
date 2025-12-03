"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg">
            <p className="mb-6">
              I'm Roviearo, a dedicated Flutter developer with a passion for creating seamless, 
              high-performance mobile applications. With a deep understanding of the Dart ecosystem 
              and a keen eye for design, I bridge the gap between functional code and beautiful user interfaces.
            </p>
            <p>
              My journey involves building complex applications from scratch, optimizing existing codebases, 
              and ensuring that every pixel is perfect. I believe in writing clean, maintainable code 
              that scales. When I'm not coding, I'm exploring the latest trends in mobile development 
              and contributing to the open-source community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
