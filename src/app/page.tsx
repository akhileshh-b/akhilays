"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Phone, Award, BookOpen, Briefcase, Code } from "lucide-react";
import { ParticleBackground } from "@/components/particle-background";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { SectionHeading } from "@/components/section-heading";
import { NavBar } from "@/components/nav-bar";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const nameRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameRef.current, {
      strings: ['Akhilesh Bonde'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 4000,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <NavBar />
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-[#CCFF00] text-7xl font-bold mb-6">
            <span ref={nameRef}></span>
          </h1>
          <h2 className="text-white text-2xl mb-8">
            Software Engineer & AI/ML Enthusiast
          </h2>
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex gap-6 justify-center">
              {[
                { icon: Github, href: "https://github.com/akhileshh-b", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/akhilesh-bonde", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akhileshbonde02@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+917385438605", label: "Phone" },
                { icon: Code, href: "https://leetcode.com/u/akhilays/", label: "LeetCode" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#CCFF00" }}
                  className="text-white hover:text-[#CCFF00] transition-colors flex flex-col items-center gap-2"
                >
                  <item.icon size={24} />
                  <span className="text-sm">{item.label}</span>
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://akhilex.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#CCFF00",
                boxShadow: "0 0 20px rgba(204, 255, 0, 0.5), inset 0 0 20px rgba(204, 255, 0, 0.3)"
              }}
              animate={{
                boxShadow: ["0 0 10px rgba(204, 255, 0, 0.2)", "0 0 20px rgba(204, 255, 0, 0.4)", "0 0 10px rgba(204, 255, 0, 0.2)"],
                borderColor: ["rgba(204, 255, 0, 0.4)", "rgba(204, 255, 0, 0.8)", "rgba(204, 255, 0, 0.4)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-8 py-3 border-2 border-[#CCFF00]/40 rounded-md text-white hover:text-[#CCFF00] transition-all duration-300 flex items-center gap-3 bg-black/20 backdrop-blur-sm"
              style={{
                textShadow: "0 0 10px rgba(204, 255, 0, 0.5)"
              }}
            >
              <BookOpen size={24} className="animate-pulse" />
              <span className="text-lg font-semibold tracking-wide">New Portfolio</span>
            </motion.a>
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

      {/* Education Section */}
      <section id="education" className="py-20 px-20">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-12">
          {[
            {
              school: "Shri Ramdeobaba College of Engineering and Management",
              degree: "B.Tech in Computer Science and Engineering (AI/ML)",
              period: "2022 – Present",
              score: "CGPA: 8.38/10.0",
            },
            {
              school: "Hislop College",
              degree: "Higher Secondary Certificate (HSC)",
              period: "2019 – 2021",
              score: "Science Stream: 88.17%",
            },
            {
              school: "St. John's High School",
              degree: "Secondary School Certificate (CBSE)",
              period: "2019",
              score: "Percentage: 85%",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2A2A2A] p-8 rounded-lg border border-[#CCFF00]/20"
            >
              <h3 className="text-[#CCFF00] text-2xl font-bold mb-2">{edu.school}</h3>
              <p className="text-white text-lg mb-2">{edu.degree}</p>
              <div className="flex justify-between text-[#CCFF00]/60">
                <span>{edu.period}</span>
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-20 bg-[#2A2A2A]">
        <SectionHeading>Publications</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/50 p-8 rounded-lg border border-[#CCFF00]/20"
        >
          <h3 className="text-[#CCFF00] text-2xl font-bold mb-4">
            Multimodal Deep Learning Framework for Intelligent Video Querying
          </h3>
          <p className="text-white mb-4">
            Published in Advances in Nonlinear Variational Inequalities (e-ISSN: 1092-910X)
          </p>
          <p className="text-[#CCFF00]/60 mb-4">DOI: 10.52783/anvi.v28.3500</p>
          <p className="text-white">
            Developed an end-to-end framework integrating ResNet18, Whisper, and computer vision algorithms
          </p>
          <motion.a
            href="https://www.internationalpubls.com/index.php/anvi/article/view/3500"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-4 text-[#CCFF00] hover:underline"
          >
            View Full Paper →
          </motion.a>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-20">
        <SectionHeading>Professional Experience</SectionHeading>
        <div className="space-y-8">
          {[
            {
              role: "Hacker Experience Lead",
              company: "Raisina Hacks",
              period: "May 2024 – Dec 2024",
              achievements: [
                "Built and managed the official Discord community, growing it to 500+ members with 60%+ active engagement",
                "Automated server workflows, reducing response time by 40%",
              ],
            },
            {
              role: "Graphic Designer & Community Manager",
              company: "theDevArmy Community",
              period: "Oct 2023 – Feb 2025",
              achievements: [
                "Grew Discord community from 100 to 1,000+ members, achieving 70% retention",
                "Developed 15+ technical workshops and designed a social media campaign with 50K+ impressions",
              ],
            },
            {
              role: "Technical Team Member",
              company: "GeeksForGeeks RCOEM",
              period: "Sept 2023 – Feb 2024",
              achievements: [
                "Organized and conducted 3+ technical events, attracting 200+ participants",
                "Designed interactive coding challenges and workshops",
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2A2A2A] p-8 rounded-lg border border-[#CCFF00]/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[#CCFF00] text-2xl font-bold">{exp.role}</h3>
                  <p className="text-white text-lg">{exp.company}</p>
                </div>
                <span className="text-[#CCFF00]/60">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-white flex items-start gap-2">
                    <span className="text-[#CCFF00]">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-20 bg-[#2A2A2A]">
        <SectionHeading>Technical Projects</SectionHeading>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              title: "Vidiwise",
              description: "Video Processing Platform",
              details: [
                "Designed a FastAPI backend capable of handling 50+ concurrent video requests",
                "Engineered an end-to-end video analysis pipeline using PyTorch, ResNet18, and Whisper, achieving 92% accuracy",
              ],
              tech: "PyTorch • ResNet18 • Whisper • FastAPI",
              link: "https://www.google.com",
            },
            {
              title: "Manahstithi",
              description: "Mental Health Assessment Platform",
              details: [
                "Developed an ensemble ML model with 85% accuracy",
                "Implemented a recommendation engine using collaborative filtering, increasing engagement rates by 65%",
              ],
              tech: "ML • Collaborative Filtering",
              link: "https://www.google.com",
            },
            {
              title: "Credit Card Fraud Detection",
              description: "ML-based Fraud Detection System",
              details: [
                "Built an ML pipeline achieving 94% ROC-AUC score on 284,000+ transactions",
                "Optimized performance using SMOTE and feature engineering, improving fraud detection accuracy by 25%",
              ],
              tech: "Python • ML • SMOTE",
              link: "https://www.google.com",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 p-8 rounded-lg border border-[#CCFF00]/20 hover:border-[#CCFF00]"
            >
              <h3 className="text-[#CCFF00] text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white text-lg mb-4">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.details.map((detail, i) => (
                  <li key={i} className="text-white flex items-start gap-2">
                    <span className="text-[#CCFF00]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="text-[#CCFF00]/60 mb-4">{project.tech}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCFF00] hover:underline"
                whileHover={{ x: 5 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-20">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              category: "Programming Languages",
              skills: ["Python", "C", "C++", "Java"],
            },
            {
              category: "Machine Learning & Deep Learning",
              skills: ["PyTorch", "TensorFlow", "ResNet18", "Scikit-learn"],
            },
            {
              category: "Web Development",
              skills: ["FastAPI", "Flask", "React.js", "Node.js", "REST APIs"],
            },
            {
              category: "Tools & Databases",
              skills: ["Git", "Docker", "MongoDB", "SQLite", "OpenCV"],
            },
          ].map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2A2A2A] p-8 rounded-lg border border-[#CCFF00]/20"
            >
              <h3 className="text-[#CCFF00] text-2xl font-bold mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-black/30 text-white px-3 py-1 rounded-full border border-[#CCFF00]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-20 bg-[#2A2A2A]">
        <SectionHeading>Achievements</SectionHeading>
        <div className="space-y-6">
          {[
            "1st place winner at O.P. Jindal University's National-Level Technorollix-2024",
            "Published research in Advances in Nonlinear Variational Inequalities (e-ISSN: 1092-910X)",
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <Award className="text-[#CCFF00] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-20 text-center">
        <SectionHeading>Get In Touch</SectionHeading>
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
