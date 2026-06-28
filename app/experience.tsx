"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const timeline = [
    {
      role: "Full Stack Product Developer",
      company: "Streamline Ideas",
      period: "August 2025 – Present",
      description:
        "Modernized Angular frontends with reusable components and AI-powered smart search, improving decision-making speed by 30%. Migrated microservices to AWS serverless architecture with Lambda and EventBridge, achieving 99.9% uptime and reducing costs by 15–20%.",

    },
    {
      role: "Data Analytics Intern",
      company: "Vosyn Inc",
      period: "February 2025 – July 2025",
      description:
        "Built a Workforce Enhancement Tool with Python, Flask, and PostgreSQL to optimize staffing decisions. Automated ETL workflows using Apache Airflow, cutting processing time by 40% and improving reporting accuracy across business functions.",
    },
    {
        role: "Master’s in Management Business Data Analytics",
        company: "University of Windsor",
        period: "September 2023 – June 2025",
        description:
            "Focused on data analytics, cloud systems, and AI integration for business decision‑making.",
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Ltd",
      period: "April 2022 – June 2023",
      description:
        "Enhanced coding practices with SonarQube and JUnit, reducing vulnerabilities by 50% and boosting reliability across 50+ APIs. Designed AWS-managed CI/CD pipelines that reduced deployment time by 75% and enabled twice-weekly releases, while strengthening API security with Spring Security and OAuth.",
    },
    {
      role: "Systems Engineer",
      company: "Infosys Ltd",
      period: "October 2020 – March 2022",
      description:
        "Developed scalable microservices and RESTful APIs with Spring Boot, improving response times by 35%. Optimized PostgreSQL queries and automated deployments with Jenkins and Docker, accelerating release cycles by 40% in a fast-paced Agile environment.",
    },
    {
      role: "Systems Engineer Intern",
      company: "Infosys Ltd",
      period: "January 2020 – March 2020",
      description:
        "Completed full-stack training in Java Spring Boot and AngularJS, gaining hands-on experience in building scalable web applications. Developed a functional e-commerce site and trained in AWS deployments, laying the foundation for enterprise-level cloud solutions.",
    },
    {
      role: "Bachelor’s in Technology",
      company: "Dharmsih Desai University",
      period: "September 2016 – May 2020",
      description:
        "Built strong foundations in software engineering, algorithms, and system design.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-8 py-20
        w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
      >
        Experience & Education
      </motion.h2>

      <div className="relative border-l-4 border-gray-300 dark:border-gray-700 max-w-2xl">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50  }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-black"></div>
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              {item.role}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">{item.company}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {item.period}
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
