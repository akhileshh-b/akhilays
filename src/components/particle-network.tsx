"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    script.onload = () => {
      const particleScript = document.createElement("script");
      particleScript.src = "https://cdn.jsdelivr.net/npm/canvas-particle-network@2.1.1/particle-network.min.js";
      particleScript.onload = initParticleNetwork;
      document.body.appendChild(particleScript);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initParticleNetwork = () => {
    if (!containerRef.current) return;
    
    // @ts-ignore
    const ParticleNetwork = window.ParticleNetwork;
    new ParticleNetwork(containerRef.current, {
      particleColor: "#CCFF00",
      background: "transparent",
      interactive: true,
      density: 8000,
      velocity: 0.8,
      particleRadius: 2.5,
      lineColor: "rgba(204, 255, 0, 0.15)"
    });
  };

  return (
    <div className="fixed inset-0 -z-10">
      <div ref={containerRef} className="particle-network-animation h-full w-full">
        <motion.div 
          className="glow glow-1"
          animate={{
            transform: ["translate(-100%, 100%)", "translate(100%, -100%)"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="glow glow-2"
          animate={{
            transform: ["translate(-100%, 0%)", "translate(100%, 100%)"]
          }}
          transition={{
            duration: 25,
            delay: 8.33,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="glow glow-3"
          animate={{
            transform: ["translate(100%, 100%)", "translate(0%, -100%)"]
          }}
          transition={{
            duration: 25,
            delay: 16.67,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}
