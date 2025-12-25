"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
// 1. Import the Image component
import Image from "next/image"; 

export default function Hero() {
  return (
    <div id="home" className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
      
      {/* Sparkles Background */}
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

      {/* 2. Your Photo Container */}
      {/* We use relative z-20 to sit on top of sparkles */}
      <div className="relative z-20 mb-8 rounded-full overflow-hidden border-4 border-neutral-800/50 shadow-2xl">
        <Image
          src="/avatar.png" // This points to public/avatar.png
          alt="Profile photo"
          width={180} // Adjust size here
          height={180} // Adjust size here
          className="object-cover"
          priority={true} // Loads image faster
        />
      </div>

      {/* Your Name & Title */}
      <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20 tracking-tight">
        Your Name Here
      </h1>
      <p className="text-neutral-300 mt-4 relative z-20 text-xl md:text-2xl font-light">
        Full Stack Developer
      </p>

    </div>
  );
}