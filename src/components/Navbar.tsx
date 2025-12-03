"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
        <NextImage
          src="/logo.png"
          alt="Roviearo Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        roviearo
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Button could go here */}
    </motion.nav>
  );
}
