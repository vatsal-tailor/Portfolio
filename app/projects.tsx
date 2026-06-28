"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const professionalProjects = [
    {
      title: "AI-Powered Backend Orchestration",
      description:
        "Integrated Spring AI with microservices to orchestrate intelligent search and recommendation workflows, improving decision-making speed by 30%.",
      tech: ["Java", "Spring Boot", "AI", "Microservices"],
    },
    {
      title: "Modernized Angular Frontend",
      description:
        "Built reusable Angular Material/PrimeNG components with signals-based reactive forms, complemented by backend validation and BDD tests.",
      tech: ["Angular", "PrimeNG", "Cucumber", "TypeScript"],
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Designed KPI dashboards in Google Sheets with pivot tables, slicers, and conditional formatting for actionable insights.",
      tech: ["Google Sheets", "SQL", "Data Analytics"],
    },
  ];

  const personalProjects = [
    {
      title: "Asset Management System",
      description:
        "Developed a Spring Boot-based system with Java, JavaScript, and MySQL for real-time departmental asset tracking and allocation.",
      tech: ["Java", "JavaScript", "MySQL"],
      link: "https://github.com/vatsal-tailor/asset-management-system",
    },
    {
      title: "Order Management System",
      description:
        "Developed a Spring Boot-based system with Java, JavaScript, and MySQL for ordering items on an e-commerce website",
      tech: ["Java", "JavaScript", "MySQL"],
      link: "https://github.com/vatsal-tailor/Order-Management-System",
    },
    {
      title: "Job Trend Analysis",
      description:
        "Created job analysis of jobs in India by scrapping job periodically from a website.",
      tech: ["Python","HTML"],
      link: "https://github.com/vatsal-tailor/Job-Trend-Analysis",
    },
    {
      title: "BreatheWell",
      description:
        "Created a predictive model for severity prediction of pulmonary disease by training the model on feature engineered data from audio files",
      tech: ["Python","PowerBI","Librosa,Scipy,Pandas,Matplotlib,numpy"],
      link: "https://github.com/vatsal-tailor/BreatheWell",
    },
    {
      title: "Airport Management System",
      description:
        "Created an airport database management using PHP, SQL, HTML, CSS.",
      tech: ["PHP","SQL","HTML","CSS"],
      link: "https://github.com/vatsal-tailor/Airport-Management-System",
    },
    {
      title: "Exploratory Data Analysis of MLS",
      description:
        "Statistical and Exploratory analysis of Major League Soccer in Excel.",
      tech: ["Statistical Analysis","Exploratory Data Analysis"],
      link: "https://github.com/vatsal-tailor/MLS-EDA",
    },  	
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black px-8 py-20
      w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
      >
        Projects
      </motion.h2>

      {/* Professional Projects */}
      <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
        Professional Work
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {professionalProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Projects */}
      <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
        Personal Projects
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
