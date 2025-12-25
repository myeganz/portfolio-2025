"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative z-20 border-t border-neutral-800">
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to build something amazing?
        </h2>
        
        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
          I am currently open for freelance projects and job opportunities. 
          Let's discuss how I can help your team.
        </p>
        
        {/* Email Button */}
        <a 
          href="mailto:your.email@example.com" 
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
        >
          Get in Touch
        </a>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* You can add real links here later */}
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
}