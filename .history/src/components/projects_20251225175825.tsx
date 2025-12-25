"use client";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative z-20 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        My Projects
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="p-6 border border-neutral-800 bg-neutral-900 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-2">Project One</h3>
          <p className="text-neutral-400">This is a description of my first project.</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border border-neutral-800 bg-neutral-900 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-2">Project Two</h3>
          <p className="text-neutral-400">This is a description of my second project.</p>
        </div>
      </div>
    </section>
  );
}