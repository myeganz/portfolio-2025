"use client";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50">
      <nav className="relative rounded-full border border-neutral-800 bg-black/50 backdrop-blur-lg shadow-input flex justify-center space-x-8 py-3 px-8 text-sm font-medium text-white/90">
        
        <a href="#home" className="hover:text-blue-400 transition-colors">
          Home
        </a>
        
        <a href="#projects" className="hover:text-blue-400 transition-colors">
          Projects
        </a>
        
        <a href="#contact" className="hover:text-blue-400 transition-colors">
          Contact
        </a>

      </nav>
    </div>
  );
}