"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="home" className="h-screen relative w-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* 1. Sparkles Background (Stays the same) */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* 2. Content Container */}
      {/* md:flex-row puts them side-by-side on desktop */}
      <div className="relative z-20 w-full max-w-6xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* LEFT SIDE: Avatar */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-neutral-800/50 shadow-2xl overflow-hidden relative">
            <Image
              src="/avatar.png" // Ensure this file exists in /public folder
              alt="Profile photo"
              fill // This makes the image fill the circle container
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text Info */}
        {/* text-center for mobile, md:text-left for desktop */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
            Full Stack Developer
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Mai Gani Tamim
          </h1>
          
          <p className="text-neutral-300 text-lg md:text-xl max-w-lg leading-relaxed">
            I build pixel-perfect, engaging, and accessible digital experiences. 
            Currently focused on Next.js and Modern UI.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-row gap-4">
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