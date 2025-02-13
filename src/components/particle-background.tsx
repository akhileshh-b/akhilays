"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);

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
      color: string;
    }> = [];

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
    };

    const createParticle = (x?: number, y?: number) => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1.5,
      opacity: 0,
      color: Math.random() > 0.5 ? '#CCFF00' : '#A3CC00'
    });

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Automatically add particles
      if (Math.random() < 0.1) { // 10% chance each frame
        particles.push(createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      // Add particles on mouse interaction with organic spread
      if (isMouseDownRef.current) {
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 80;
          particles.push(createParticle(
            mouseRef.current.x + Math.cos(angle) * distance,
            mouseRef.current.y + Math.sin(angle) * distance
          ));
        }
      }

      // Draw particles and connections
      particles.forEach((p1, i) => {
        // Update particle opacity
        if (p1.opacity < 0.4) {
          p1.opacity += 0.01;
        }

        // Apply mouse influence
        const dx = mouseRef.current.x - p1.x;
        const dy = mouseRef.current.y - p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          p1.vx += (dx / distance) * force * 0.02;
          p1.vy += (dy / distance) * force * 0.02;
        }

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Add friction
        p1.vx *= 0.99;
        p1.vy *= 0.99;

        // Bounce off walls
        if (p1.x < 0 || p1.x > canvas.width) {
          p1.vx *= -1;
          p1.x = Math.max(0, Math.min(canvas.width, p1.x));
        }
        if (p1.y < 0 || p1.y > canvas.height) {
          p1.vy *= -1;
          p1.y = Math.max(0, Math.min(canvas.height, p1.y));
        }

        // Draw particle with glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p1.x, p1.y, 0, p1.x, p1.y, p1.radius * 2);
        gradient.addColorStop(0, `${p1.color}${Math.floor(p1.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(p1.x, p1.y, p1.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(204, 255, 0, ${0.15 * (1 - distance / 100) * p1.opacity * p2.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Remove excess particles
      if (particles.length > 800) {
        particles = particles.slice(-800);
      }

      requestAnimationFrame(drawParticles);
    };

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseDown = () => {
      isMouseDownRef.current = true;
    };

    const handleMouseUp = () => {
      isMouseDownRef.current = false;
    };

    // Initialize
    resizeCanvas();
    createParticles();
    drawParticles();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseUp);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#0A0A0A]">
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
