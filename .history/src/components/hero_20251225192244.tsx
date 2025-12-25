"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <div id="home" className="h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex items-center justify-center">
      
      {/* 1. The Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* 2. Content (Split Layout) */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
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
            I craft robust and scalable digital products. 
            Passionate about clean code and user-centric design.
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

    </div>
  );
}