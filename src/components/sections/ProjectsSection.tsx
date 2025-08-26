import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import inventory_img from "../../assets/inventory.jpg";
import BlurInView from "../BlurText/BlurInView";

// Define interfaces for better type safety
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  year: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //@ts-ignore
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "MAKTUB App",
      description: "A modern book catalog management system",
      longDescription:
        "Flask-based application designed for managing a comprehensive catalog of books, featuring robust user authentication, full CRUD operations, and responsive design. Built with modern web technologies to provide seamless user experience across all devices.",
      tech: ["Flask", "Flask-SQLAlchemy", "Python", "HTML5", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
      github: "https://github.com/CodeByVishaal/Book-Store",
      demo: "#",
      year: "2024",
      category: "Web Application",
    },
    {
      id: 2,
      title: "Payment Gateway",
      description: "Secure payment processing with Razorpay",
      longDescription:
        "A Django REST API-based payment gateway system with Razorpay integration, featuring comprehensive user authentication, advanced product management, and secure payment processing with JWT token authentication. Built for scalability and security.",
      tech: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Razorpay",
        "Python",
        "JWT",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      github: "https://github.com/CodeByVishaal",
      demo: "#",
      year: "2024",
      category: "API Development",
    },
    {
      id: 2,
      title: "Smart Inventory Management System (SIMS)",
      description:
        "A comprehensive inventory management solution built with Spring Boot and PostgreSQL for real-time inventory tracking and automated stock management.",
      longDescription:
        "The Smart Inventory Management System is a robust backend application designed to streamline inventory operations for businesses of all sizes. Built using modern Java technologies including Spring Boot 3.2.1, Spring Data JPA, and PostgreSQL, this system provides intelligent inventory tracking, automated stock level monitoring, and scalable RESTful API architecture. The application features real-time inventory management, efficient database operations with Hibernate ORM, and enterprise-ready design patterns for reliable inventory control and optimization.",
      tech: [
        "Java 17",
        "Spring Boot 3.2.1",
        "Spring Data JPA",
        "Spring Web",
        "PostgreSQL",
        "Hibernate",
        "Maven",
        "Lombok",
        "JUnit 5",
      ],
      image: inventory_img,
      github: "https://github.com/CodeByVishaal/SIMS",
      demo: "#",
      year: "2024",
      category: "API Development",
    },
  ];

  return (
    <section id="projects">
      <div ref={containerRef} className="relative">
        {/* Section Header */}
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <BlurInView>
              <h2 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
                Favourite
              </h2>

              <h3 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8">
                <span className="dark:text-red-500 dark:red-text-glow text-red-600">
                  Works
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A collection of projects that showcase my expertise in
                full-stack development, API integration, and modern web
                technologies.
              </p>
            </BlurInView>
          </motion.div>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectSectionProps {
  project: Project;
  index: number;
  isEven: boolean;
}

const HighlightedTitle: React.FC<{ title: string }> = ({ title }) => {
  const parts = title.split(" ");

  // Handle special cases
  if (title.includes("(SIMS)")) {
    const base = title.replace("(SIMS)", "").trim();
    return (
      <span>
        {base}{" "}
        <span className="dark:text-red-500 dark:red-text-glow text-red-600">
          (SIMS)
        </span>
      </span>
    );
  }

  const lastWord = parts.pop();
  const firstPart = parts.join(" ");

  return (
    <span>
      {firstPart}{" "}
      <span className="dark:text-red-500 dark:red-text-glow text-red-600">
        {lastWord}
      </span>
    </span>
  );
};

const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  index,
  isEven,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Project Image */}
          <motion.div
            className={`relative group ${!isEven ? "lg:col-start-2" : ""}`}
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+Image";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Project Number */}
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-6xl font-bold opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            className={`space-y-6 ${
              !isEven ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
            style={{ y: textY }}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isEven ? -50 : 50 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Category & Year */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span>{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <HighlightedTitle title={project.title} />
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + techIndex * 0.1,
                    }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </motion.a>

              {project.demo !== "#" && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
