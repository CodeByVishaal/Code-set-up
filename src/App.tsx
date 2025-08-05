import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioOverview from "./components/sections/portfolio-overview";

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
        <div className="container mx-auto px-4">
          <PortfolioOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
