"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    // 1. The Main Container
    <main className="min-h-screen bg-black w-full overflow-hidden">
      
      {/* 2. The Hero Section */}
      <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        
        {/* A. The Sparkles Background */}
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

        {/* B. The Text Content (Your Name) */}
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Mai Gani Tamim
        </h1>
        <p className="text-neutral-300 mt-4 relative z-20 text-xl">
           Full Stack Developer
        </p>

      </div>

    </main>
  );
}