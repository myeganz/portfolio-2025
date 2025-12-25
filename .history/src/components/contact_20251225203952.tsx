"use client";
import React from "react";

const SOCIALS = [
  {
    name: "Email",
    value: "gani.tamim.gt@gmail.com", // <--- UPDATE THIS
    link: "mailto:gani.tamim.gt@gmail.com", // <--- UPDATE THIS
    color: "hover:border-blue-500 hover:text-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    value: "+62 895-3339-72415", // <--- UPDATE THIS
    link: "https://wa.me/62895333972415", // <--- UPDATE THIS
    color: "hover:border-green-500 hover:text-green-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.967-.446-.223 0-.496.099-.744.372-.248.273-.943.918-.943 2.233 0 1.315.968 2.583 1.116 2.782.149.198 1.905 2.908 4.615 4.077 1.674.721 2.016.577 2.387.542.372-.034 1.189-.486 1.363-.956.174-.471.174-.88.124-.967-.05-.087-.198-.136-.496-.285z"/>
      </svg>
    ),
  },
  {
    name: "Upwork",
    value: "Available for Hire",
    link: "https://www.upwork.com/freelancers/~011c264be8177fbc6c", // <--- UPDATE THIS
    color: "hover:border-[#14a800] hover:text-[#14a800]", // Upwork Green
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.816v12.657h-2.51V3.492H2.5v18.138h2.806v-2.327h2.51v2.327h2.756V8.651c.629 2.186 1.777 4.695 3.275 6.645l-1.637 5.334h2.977l.794-2.793c1.048.654 2.203.992 3.58.992 2.992 0 5.435-2.435 5.435-5.435s-2.443-5.376-5.435-5.376z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "@yourusername", // <--- UPDATE THIS
    link: "https://github.com/yourusername", // <--- UPDATE THIS
    color: "hover:border-white hover:text-white",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative z-20 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to <span className="text-neutral-500">Collaborate?</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Whether you need a full-stack dashboard, a network integration, or an automated system—I am ready to build.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 transition-all duration-300 ${social.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-neutral-800 text-white group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    {social.name}
                  </h3>
                  <p className="text-lg font-semibold text-white group-hover:text-current transition-colors">
                    {social.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-neutral-900">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Mai Gani Tamim. Built with Next.js & Tailwind.
          </p>
        </footer>

      </div>
    </section>
  );
}