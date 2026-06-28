"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Java",
    "Spring Boot",
    "SQL",
    "AI Integration",
    "Docker",
    "Kubernetes",
    "AWS",
    "React",
    "Angular",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-8 py-20
        w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 text-center mb-10
        "
      >
        I’m Vatsal Tailor, a backend engineer passionate about building scalable
        systems, integrating AI-powered features, and optimizing cloud
        deployments. I thrive on solving complex problems and delivering
        maintainable, high-performance solutions.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
