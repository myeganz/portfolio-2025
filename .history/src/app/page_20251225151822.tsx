'use client';

import React, { useState, useEffect } from 'react';

const AceternityHomepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Aceternity
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8">
        <div className="text-center max-w-5xl">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Build Beautiful Experiences
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Create stunning web applications with modern design components and animations that captivate your users
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-all transform hover:scale-105">
              View Demo
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { title: 'Lightning Fast', desc: 'Optimized performance for seamless experiences', icon: '⚡' },
              { title: 'Beautiful UI', desc: 'Stunning components that make your app shine', icon: '✨' },
              { title: 'Easy to Use', desc: 'Simple integration with your existing projects', icon: '🚀' }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-105 hover:border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AceternityHomepage;