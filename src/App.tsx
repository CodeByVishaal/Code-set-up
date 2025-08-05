import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  return (
  <div><div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
  {/* Navbar Wrapper */}
  <div className="w-full ">
    <div className="container mx-auto px-4 py-4 flex justify-center">
      <Navbar />
    </div>
  </div>

  {/* Hero Section */}
  <div className="container mx-auto px-4">
    <Hero />
  </div>
</div>

  
  </div>)

}

export default App
