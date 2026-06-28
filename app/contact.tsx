"use client";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useEffect } from "react";

export default function Contact() {
const [state, handleSubmit] = useForm("xkolraqw"); 
const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black px-8 py-20
      w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Get in Touch
      </motion.h2>

      {/* Success Message */}
      {state.succeeded && (
        <p className="text-green-600 font-semibold mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
          ✅ Thanks! Your message has been sent.
        </p>
      )}

      {state.errors?.length > 0 && Object.keys(state.errors).length > 0 && (
        <p className="text-red-600 font-semibold mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
          ❌ Something went wrong. Please try again.
        </p>
      )}

      {/* Contact Form */}
      <motion.form
	ref={formRef}
	onSubmit={handleSubmit}  
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <input
          type="text"
	  name="name"	
          placeholder="Your Name"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          type="email"
	  name="email"
          placeholder="Your Email"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white"
        />
         <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
	  name="message"
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
 	  disabled={state.submitting}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition-colors
          px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg bg-primary-light dark:bg-primary-dark rounded-md" >
          {state.submitting ? "Sending..." : "Send Message"}
          
          	
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <motion.a
          href="https://linkedin.com/in/vatsaltailor23"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold"
        >
          LinkedIn
        </motion.a>

        <motion.a
          href="https://github.com/vatsal-tailor"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold"
        >
          GitHub
        </motion.a>

        <motion.a
          href="mailto:vatsaltailor2306@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold"
        >
          Email
        </motion.a>
      </div>
    </section>
  );
}
