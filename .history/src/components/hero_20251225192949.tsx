"use client";
import React from "react";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

export default function Hero() {
  return (
    // 1. We remove the bg-black from here because the Vortex handles the background color
    <div id="home" className="w-full h-screen overflow-hidden">
      
      {/* 2. The Vortex Wrapper */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={220} // 220 is Blue. Change to 0 for Red, 120 for Green.
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        
        {/* 3. Your Content (Split Layout) */}
        <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* LEFT: Avatar */}
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-neutral-800/50 shadow-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/avatar.jpg" 
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            <h2 className="text-neutral-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
              Full Stack Developer
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              Your Name
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
              I build pixel-perfect, engaging, and accessible digital experiences. 
              Currently focused on Next.js and Modern UI.
            </p>

            <div className="flex flex-row gap-4">
              <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                View Work
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full border border-neutral-700 text-white font-medium hover:bg-neutral-900 transition-colors">
                Contact Me
              </a>
            </div>

          </div>

        </div>
      
      </Vortex>
    </div>
  );
}