"use client";
import React from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Skills from "@/components/skills"; // 1. Import Skills

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      
      <Navbar />
      
      <Hero />
      
      {/* 2. Add Skills Section Here */}
      <Skills />
      
      <Projects />
      
      <Contact />

    </main>
  );
}