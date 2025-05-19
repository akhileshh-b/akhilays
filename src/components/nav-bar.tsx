"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", to: "hero" },
  { label: "Education", to: "education" },
  { label: "Publications", to: "publications" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" }
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#CCFF00]/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-[#CCFF00] font-bold text-xl"
        >
          AB
        </motion.a>
        
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="text-white hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#CCFF00] transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          display: isOpen ? "block" : "none"
        }}
        transition={{ duration: 0.2 }}
        className="lg:hidden bg-[#0A0A0A] border-b border-[#CCFF00]/20"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
