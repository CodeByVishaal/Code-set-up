import TechStack from "./components/BlurText/TechStack";
import Navbar from "./components/Navbar";
import PortfolioOverview from "./components/sections/portfolio-overview";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Dark theme gradient overlay */}
      <div className="dark:fixed dark:inset-0 dark:pointer-events-none dark:z-0">
        <div className="dark:absolute dark:inset-0 dark:dark-gradient-bg" />
        <div className="dark:absolute dark:top-0 dark:left-1/4 dark:w-96 dark:h-96 dark:bg-red-900/10 dark:rounded-full dark:blur-3xl dark:animate-pulse" />
        <div className="dark:absolute dark:bottom-1/4 dark:right-1/4 dark:w-96 dark:h-96 dark:bg-red-800/5 dark:rounded-full dark:blur-3xl dark:animate-pulse dark:delay-1000" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Navbar Wrapper */}
        <div className="w-full">
          <div className="container mx-auto px-4 py-4 flex justify-center">
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 my-6">
          <PortfolioOverview />
        </div>

        {/* Tech Stack Section */}
        <div className="w-full">
          <TechStack />
        </div>

        {/* Projects Section */}
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
