"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

// 1. Define your projects data here
const PROJECTS = [
    {
      title: "Smart POS System",
      description: "A secure payment solution for schools utilizing RFID cards and biometric fingerprint authentication. Ensures cashless, organized, and theft-free transactions in school canteens.",
      tags: ["Laravel", "RFID Hardware", "Fingerprint SDK", "IoT"],
      videoSrc: "/videos/pos.mp4",
      posterSrc: "/images/pos.png",
    },
    {
      title: "School Payment System",
      description: "Comprehensive billing management platform. Allows schools to track tuition progress and parents to monitor fees and payment history in real-time.",
      tags: ["Laravel", "Vue.js", "Payment Gateway", "MySQL"],
      videoSrc: "/videos/school.mp4",
      posterSrc: "/images/school.png",
    },
    {
      title: "Attendance Tracking (ADMS)",
      description: "Real-time attendance system integrated with ZKTeco ADMS machines. Connects hardware directly to the cloud server for instant reporting and payroll calculation.",
      tags: ["ZKTeco ADMS", "Filament", "Livewire", "Hardware Integration"],
      videoSrc: "/videos/attendance.mp4",
      posterSrc: "/images/attendance.png",
    },
    {
      title: "School Landing Page & Portal",
      description: "A centralized digital hub for school information. Unlike a static site, this features a dynamic portal allowing staff and users to update content and data directly.",
      tags: ["Laravel", "CMS Development", "Dynamic Content", "Bootstrap/Tailwind"],
      videoSrc: "/videos/landing.mp4",
      posterSrc: "/images/landing.png",
    },
    {
      title: "Modern Developer Portfolio",
      description: "The website you are looking at right now. A high-performance, dark-themed showcase built to demonstrate modern UI/UX capabilities and complex component architecture.",
      tags: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion"],
      videoSrc: "/videos/portfolio.mp4", // Make sure to record a quick scroll of your site!
      posterSrc: "/images/portfolio.png",
    },
  ];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative z-20">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center">
          Featured <span className="text-neutral-500">Deployments</span>
        </h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Separate Component for the Card logic
function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Play video on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Autoplay prevented", e));
    }
  };

  // Pause and reset video on leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div 
      className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/40 overflow-hidden hover:border-neutral-600 transition-colors duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* 1. Video Container */}
      <div className="relative h-56 w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          muted
          loop
          preload="none"
          poster={project.posterSrc}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={project.videoSrc} type="video/mp4" />
        </video>
        
        {/* Overlay that fades out on hover */}
        <div className={cn(
          "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300",
          isHovering ? "opacity-0" : "opacity-100"
        )}>
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
            Hover to Play
          </span>
        </div>
      </div>

      {/* 2. Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* 3. Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium text-neutral-300 bg-neutral-800/80 px-2 py-1 rounded border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}