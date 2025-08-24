import TechStack from "./components/BlurText/TechStack";
import Navbar from "./components/Navbar";
import PortfolioOverview from "./components/sections/portfolio-overview";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        {/* Navbar Wrapper */}
        <div className="w-full ">
          <div className="container mx-auto px-4 py-4 flex justify-center">
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 my-6">
          <PortfolioOverview />
        </div>

        <div className="container flex justify-center mx-auto py-10 px-6">
          <TechStack />
        </div>
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
