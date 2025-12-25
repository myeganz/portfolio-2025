"use client";
import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Full Stack Core",
    skills: ["Laravel", "Filament", "Vue.js", "PrimeVue"],
  },
  {
    title: "System & Hardware Integrations",
    skills: ["MikroTik RouterOS",  "ZKTeco Biometrics"],
  },
  {
    title: "API & Backend Tech",
    skills: ["RESTful APIs", "Webhooks", "MySQL", "Git"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-black relative z-20 border-t border-neutral-900">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <h3 className="text-3xl font-bold text-white text-center mb-16 tracking-tight">
          Technical Arsenal
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors"
            >
              <h4 className="text-xl font-semibold text-neutral-200 mb-6 border-b border-neutral-800 pb-2">
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 rounded-lg border border-neutral-800 bg-black text-neutral-400 text-sm font-medium hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}