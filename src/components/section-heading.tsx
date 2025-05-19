"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-[#CCFF00] text-4xl font-bold mb-12 relative"
      style={{
        textShadow: '0 0 10px rgba(204, 255, 0, 0.3)',
      }}
    >
      {children}
    </motion.h2>
  );
}
