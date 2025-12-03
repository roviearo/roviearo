"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm md:text-base font-medium text-muted-foreground mb-4">
            Flutter Developer & UI Designer
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Building premium <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            mobile experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          I craft high-performance, visually stunning mobile applications using Flutter. 
          Focusing on smooth animations and intuitive user interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 flex items-center gap-6 text-muted-foreground"
        >
          <Link href="https://github.com" target="_blank" className="hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors">
            <Twitter className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
