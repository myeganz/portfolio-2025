"use client";
import React from "react";

const SKILLS = [
  "Laravel",
  "Vue.js",
  "Primevue",
  "MySQL",
  "Filament",    
  "Livewire",
  "Git",
];

export default function Skills() {
  return (
    <section className="py-10 bg-black relative z-20 border-t border-b border-neutral-900">
      
      <div className="max-w-5xl mx-auto px-4">
        
        <p className="text-neutral-500 text-sm font-semibold text-center mb-6 uppercase tracking-widest">
          Technologies I work with
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-300 font-medium hover:border-blue-500 hover:text-blue-400 hover:bg-neutral-900 transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}