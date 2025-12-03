"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-muted/50 to-card border border-border rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and open to new opportunities. 
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          
          <a 
            href="mailto:roviearo@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            roviearo@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
