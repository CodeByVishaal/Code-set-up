import {
  Bootstrap5,
  CSS,
  Django,
  Docker,
  Git,
  HTML5,
  JavaScript,
  PostgreSQL,
  Postman,
  Python,
  React,
  Swagger,
  TailwindCSS,
  TypeScript,
  ViteJS,
} from "developer-icons";
import { motion } from "framer-motion";
import Marquee from "../sections/Marquee";

const TechStack = () => {
  const techItems = [
    { icon: React, name: "React" },
    { icon: TypeScript, name: "TypeScript" },
    { icon: TailwindCSS, name: "Tailwind CSS" },
    { icon: ViteJS, name: "Vite" },
    { icon: PostgreSQL, name: "PostgreSQL" },
    { icon: Python, name: "Python" },
    { icon: Django, name: "Django" },
    { icon: JavaScript, name: "JavaScript" },
    { icon: HTML5, name: "HTML" },
    { icon: CSS, name: "CSS" },
    { icon: Docker, name: "Docker" },
    { icon: Bootstrap5, name: "Bootstrap" },
    { icon: Postman, name: "Postman" },
    { icon: Swagger, name: "Swagger" },
    { icon: Git, name: "Git" },
  ];

  return (
    <section className="pt-10 pb-0 px-4 bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background Effects for Dark Mode */}
      <div className="dark:block hidden absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Tech{" "}
            <span className="dark:text-red-500 dark:red-text-glow text-red-600">
              Stack
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee Container with Enhanced Styling */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          {/* Top Marquee - Left to Right */}
          <div className="">
            <Marquee speed={100} pauseOnHover className="py-6">
              {techItems.slice(0, 8).map((tech, index) => (
                <TechItem key={`top-${index}`} tech={tech} />
              ))}
            </Marquee>
          </div>

          {/* Bottom Marquee - Right to Left */}
          {/* <div>
            <Marquee speed={500} pauseOnHover reverse className="py-6">
              {techItems.slice(0, 8).map((tech, index) => (
                <TechItem key={`bottom-${index}`} tech={tech} />
              ))}
            </Marquee>
          </div> */}
        </div>
      </div>
    </section>
  );
};

interface TechItemProps {
  tech: {
    icon: React.ComponentType;
    name: string;
  };
}

const TechItem: React.FC<TechItemProps> = ({ tech }) => {
  const IconComponent = tech.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center mx-8 group cursor-pointer"
    >
      {/* Tech Icon Container */}
      <div className="relative mb-3">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-gray-900 dark:dark-gradient-card rounded-2xl shadow-lg dark:shadow-red-500/10 transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-red-500/20 dark:group-hover:passion-red-glow">
          <IconComponent />
        </div>

        {/* Glow effect for dark mode */}
        <div className="absolute inset-0 dark:bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </div>

      {/* Tech Name */}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-red-400 transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechStack;
