"use client";
import React from "react";
// Import your lowercase components
import Hero from "@/components/hero";
import Projects from "@/components/projects"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Projects Section */}
      <Projects />

    </main>
  );
}