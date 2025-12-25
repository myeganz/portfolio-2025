"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" }, // We need to fix the Skills ID below!
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 px-4 mt-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-6 md:gap-8 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className={cn(
              "relative text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200",
              "hover:scale-105 active:scale-95"
            )}
          >
            {item.name}
          </a>
        ))}
        
        {/* Optional: "Hire Me" Button inside the nav */}
        <a 
          href="#contact"
          className="hidden md:block px-4 py-1.5 text-xs font-bold text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
        >
          Hire Me
        </a>
      </motion.div>
    </div>
  );
}