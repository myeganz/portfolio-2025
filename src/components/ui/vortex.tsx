"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];
  let tick = 0;
  let rafId: number;
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas?.getContext("2d") || null;
    resize();
    initParticles();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let x, y, vx, vy, life, ttl, speed, radius, hue;
    x = Math.random() * canvas.width;
    y = center[1] + (Math.random() * 2 - 1) * rangeY;
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + Math.random() * rangeTTL;
    speed = baseSpeed + Math.random() * rangeSpeed;
    radius = baseRadius + Math.random() * rangeRadius;
    hue = baseHue + Math.random() * rangeHue;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = () => {
    tick++;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = props.backgroundColor || "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    
    // Updates
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
    
    ctx.restore();
    rafId = requestAnimationFrame(draw);
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
    let x = particleProps[i];
    let y = particleProps[i2];
    let n, t, vx, vy, life, ttl, speed, x2, y2, radius, hue;

    x2 = x;
    y2 = y;

    vx = particleProps[i3];
    vy = particleProps[i4];
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    radius = particleProps[i8];
    hue = particleProps[i9];

    n = noise3D(x * 0.002, y * 0.002, tick * 0.002);
    vx = Math.cos(n * Math.PI * 2) * speed;
    vy = Math.sin(n * Math.PI * 2) * speed;
    life++;

    particleProps[i] = x + vx;
    particleProps[i2] = y + vy;
    particleProps[i5] = life;

    // Boundary check
    if (x > canvas.width || x < 0 || y > canvas.height || y < 0 || life > ttl) {
      initParticle(i);
    }

    // Draw particle
    ctx.beginPath();
    ctx.arc(x2, y2, radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${hue},100%,50%,${1 - life / ttl})`;
    ctx.fill();
    ctx.closePath();
  };

  const resize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      center = [canvas.width / 2, canvas.height / 2];
    }
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden", props.containerClassName)} ref={containerRef}>
      
      {/* 1. Wrapper DIV (Remove ref={canvasRef} from here) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        {/* 2. The Actual Canvas (Keep ref={canvasRef} here) */}
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};