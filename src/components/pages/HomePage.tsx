import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.h1
          style={{ y: y1 }}
          className="text-5xl md:text-7xl font-extrabold z-10 text-center"
        >
          Hi, I'm Vishaal 👋
        </motion.h1>
        <motion.p
          style={{ y: y2, opacity }}
          className="mt-4 text-lg md:text-2xl text-center max-w-xl z-10"
        >
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </motion.p>
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ scale: useTransform(scrollY, [0, 500], [1, 1.5]) }}
            className="w-full h-full bg-gradient-to-br from-green-400/20 to-purple-600/20"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🚀 Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Python",
            "Flask",
            "Git",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center font-medium"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🏆 Accomplishments
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            "Built a full-stack contact manager app using Flask and React.",
            "Solved 500+ coding problems across LeetCode, GFG, and Codeforces.",
            "Contributed to 3 open-source projects on GitHub.",
            "Completed 5+ online certifications in AI and Web Development."
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Vishaal. Built with ❤️
      </footer>
    </div>
  );
}
