"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-[#CCFF00] text-7xl font-bold mb-6">
            Akhilesh Bonde
          </h1>
          <h2 className="text-white text-2xl mb-8">
            Software Engineer & AI/ML Enthusiast
          </h2>
          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, href: "https://github.com/akhileshh-b" },
              { icon: Linkedin, href: "https://linkedin.com/in/akhilesh-bonde" },
              { icon: Mail, href: "mailto:akhileshbonde02@gmail.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#CCFF00" }}
                className="text-white hover:text-[#CCFF00] transition-colors"
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-[#CCFF00]" size={32} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#CCFF00] text-4xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              title: "Vidiwise",
              description: "Video Processing Platform with FastAPI backend",
              tech: "PyTorch • ResNet18 • Whisper",
            },
            {
              title: "Manahstithi",
              description: "Mental Health Assessment Platform",
              tech: "ML • Collaborative Filtering",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#2A2A2A] p-8 rounded-lg cursor-pointer border border-[#CCFF00]/20 hover:border-[#CCFF00]"
            >
              <h3 className="text-[#CCFF00] text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <p className="text-[#CCFF00]/60">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-20 bg-[#2A2A2A]">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#CCFF00] text-4xl font-bold mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              category: "Languages",
              skills: "Python • C++ • Java • TypeScript",
            },
            {
              category: "Frameworks",
              skills: "PyTorch • TensorFlow • FastAPI • React",
            },
            {
              category: "Tools",
              skills: "Git • Docker • MongoDB • OpenCV",
            },
          ].map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-[#CCFF00] text-2xl font-bold mb-4">{skillSet.category}</h3>
              <p className="text-white">{skillSet.skills}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-20 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#CCFF00] text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl mb-8"
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>
        <motion.a
          href="mailto:akhileshbonde02@gmail.com"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-[#CCFF00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#CCFF00]/80 transition-colors"
        >
          Say Hello
        </motion.a>
      </section>
    </main>
  );
}
