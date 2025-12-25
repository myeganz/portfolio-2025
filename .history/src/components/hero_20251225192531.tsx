"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="home" className="h-screen relative w-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* 1. THE TECH GRID BACKGROUND */}
      {/* The grid pattern is created with CSS gradients */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      {/* 2. THE RADIAL MASK */}
      {/* This overlay fades the grid out at the edges, keeping focus on the center */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* 3. CONTENT (Split Layout) */}
      <div className="relative z-20 w-full max-w-6xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
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
          
          <h2 className="text-neutral-500 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
            Full Stack Developer
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            Your Name
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
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

    </div>
  );
}