"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure you have this utility, or use a simple join

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-black overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full inset-0"
      >
        {/* The Gradients/Beams */}
        <div className="absolute left-0 top-0 h-full w-full bg-black [mask-:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute h-[100%] w-[100%] bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-40 blur-3xl"></div>
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        
        {/* The Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </motion.div>
    </div>
  );
};