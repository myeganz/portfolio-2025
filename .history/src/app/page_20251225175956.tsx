"use client";
import React from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact"; // 1. Import Contact

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      
      <Navbar />
      
      <Hero />
      
      <Projects />
      
      {/* 2. Add Contact Section */}
      <Contact />

    </main>
  );
}