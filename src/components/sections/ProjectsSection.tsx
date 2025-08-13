import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard";

// Define interfaces for better type safety
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "MAKTUB App",
      description:
        "Flask-based application designed for managing a catalog of books, featuring user authentication, CRUD operations, and responsive design.",
      tech: ["Flask", "Flask-SQLAlchemy", "Python"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      github: "https://github.com/CodeByVishaal/Book-Store",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      github: "https://github.com/CodeByVishaal",
      demo: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing capabilities and real-time responses.",
      tech: ["Python", "TensorFlow", "React", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
      github: "https://github.com/CodeByVishaal",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback image if the original fails to load
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/500x300/6366f1/ffffff?text=Project+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4"></div>
                  </div>
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
