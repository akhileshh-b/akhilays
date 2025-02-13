"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 2 + 1,
          opacity: 0
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      particles.forEach((p1, i) => {
        // Update particle opacity
        if (p1.opacity < 0.3) {
          p1.opacity += 0.01;
        }

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off walls
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 255, 0, ${p1.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(204, 255, 0, ${0.2 * (1 - distance / 150) * p1.opacity * p2.opacity})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    };

    // Initialize
    resizeCanvas();
    createParticles();
    drawParticles();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
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
  );
}
