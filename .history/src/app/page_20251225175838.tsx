"use client";
import React from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar"; // 1. Import Navbar

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      
      {/* 2. Add Navbar here */}
      <Navbar />
      
      <Hero />
      <Projects />

    </main>
  );
}