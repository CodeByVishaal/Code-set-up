import { div } from "framer-motion/client";
import ThemeSwitcher from "./Navbar";
import BlurInView from "./BlurText/BlurInText";

export default function Hero() {
  return (
    <div>
    
    <section className="min-h-screen flex flex-col justify-center items-center transition-colors bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-5xl font-bold text-red-500 dark:text-red-400">
        <BlurInView word ="Hi I'm Vishal"/>
      </h1>
      <p className="mt-4 text-lg text-black-700 dark:text-white/70">
        Welcome to my animated portfolio.
      </p>
    </section>
    </div>
  )
}
