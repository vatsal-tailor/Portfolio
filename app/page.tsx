"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";

export default function Home() {
return (
<>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 className="text-5xl font-bold">Vatsal Tailor</h1>
      <p className="mt-4 text-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
        Backend Engineer | AI Integration | Cloud Deployments
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform"
      >
        View My Work
      </a>
    </motion.div>

	{/* About Section */}
      <About />

 {/* Projects Section */}
      <Projects />
 {/* Experience Section */}
      <Experience />

 {/* Contact Section */}
      <Contact />

</>
  );
}
