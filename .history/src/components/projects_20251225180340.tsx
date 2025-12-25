"use client";
import React from "react";

// 1. Your Project Data (Easy to edit!)
const PROJECTS = [
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce store with cart functionality and Stripe payments.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#", // Add your real link here later
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat interface powered by OpenAI's GPT-4 API.",
    tags: ["React", "OpenAI", "Tailwind"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with charts, dark mode, and user authentication.",
    tags: ["Vue.js", "Supabase", "Chart.js"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very website! Built with the latest modern web technologies.",
    tags: ["Next.js", "Aceternity UI", "Shadcn"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative z-20 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Featured Work
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          // Card Container
          <a 
            key={index} 
            href={project.link}
            className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
          >
            
            {/* 2. Image Placeholder (Visuals are important!) */}
            <div className="w-full h-40 bg-neutral-800 rounded-lg mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform">
               {/* Later you can put <img /> here */}
               <div className="w-full h-full flex items-center justify-center text-neutral-600 font-medium">
                  Project Screenshot
               </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-2 py-1 text-xs rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>

          </a>
        ))}
      </div>
    </section>
  );
}