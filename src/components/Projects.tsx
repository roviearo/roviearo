"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-featured shopping app with cart, payments, and order tracking built with Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "Stripe"],
    links: { demo: "#", github: "#" },
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media managers with interactive charts and data visualization.",
    tags: ["Flutter", "Rest API", "Charts"],
    links: { demo: "#", github: "#" },
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Travel Companion",
    description: "Travel planning application with map integration, itinerary scheduling, and local recommendations.",
    tags: ["Flutter", "Google Maps", "Provider"],
    links: { demo: "#", github: "#" },
    color: "from-orange-500/20 to-red-500/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link href={project.links.github} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href={project.links.demo} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
