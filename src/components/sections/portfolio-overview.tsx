"use client";
import BlurInView from "../BlurText/BlurInView";
import { LinkedinIcon } from "../ui/linkedin";
import { GithubIcon } from "../ui/github";
import { InstagramIcon } from "../ui/instagram";
import profile_img from "../../assets/profile-image.jpg";

// --- SVG Icon Components ---
// These are the icon components for the social media links in the footer.
// They are self-contained, so no external libraries are needed.

// Main App component that renders the portfolio
export default function PortfolioOverview() {
  return <Portfolio />;
}

// @ts-ignore
const userImage =
  "https://i.pinimg.com/736x/3c/a0/23/3ca023b594a47949e4664190d0c30e1a.jpg";

// The main portfolio component, now fully responsive with light/dark mode support.
const Portfolio = () => {
  return (
    <div className="flex items-center justify-center font-sans dark:bg-black">
      <div className="bg-white dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
        {/* Main Content (Hero Section) */}
        <main className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-10">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left md:w-1/2 z-10 order-2 md:order-1">
            {/* Font sizes now scale better from mobile to desktop */}
            <BlurInView>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                Cooking Digital <br />
                <span className="text-black dark:text-white">Experiences</span>
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
                A passionate Web Designer creating modern, responsive, and
                user-friendly websites.
              </p>
            </BlurInView>
            <button className="mt-8 bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-10 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Know Me ?
            </button>
          </div>

          {/* Right Side: Image with Blob Shape */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 order-1 md:order-2">
            {/* The blob shape adapts to light/dark mode */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full"
            >
              <path
                fill="currentColor"
                className="text-black dark:text-white"
                d="M48.8,-63.9C62.9,-54.2,73.8,-40.1,78.2,-24.5C82.6,-8.9,80.5,8.2,74.5,23.6C68.5,39,58.6,52.7,45.5,62.3C32.4,71.9,16.2,77.4,-1.8,78.8C-19.8,80.2,-39.6,77.5,-53.4,67.7C-67.2,57.9,-75,41,-76.8,24.2C-78.5,7.4,-74.2,-9.3,-66.5,-23.7C-58.8,-38.1,-47.7,-50.3,-34.9,-60.1C-22.1,-69.9,-7.6,-77.4,7.9,-78.9C23.4,-80.4,46.8,-75.9,48.8,-63.9Z"
                transform="translate(100 100)"
              />
            </svg>
            {/* The image is clipped to a similar path */}
            <div className="w-full h-full">
              <img
                src={profile_img}
                alt="Aesthetic scenery in grayscale"
                className="absolute max-w-full h-auto object-cover" // Added grayscale filter and dark mode brightness adjustment
                style={{ clipPath: "url(#blob-clip)" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/400x400/000000/FFFFFF?text=Image";
                }}
              />
            </div>
            {/* Defining the SVG clip-path. It's hidden but used by the style attribute */}
            <svg width="0" height="0">
              <defs>
                <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.244,-0.32C0.315,-0.271,0.369,-0.2,0.391,-0.122C0.413,-0.045,0.402,0.041,0.373,0.118C0.343,0.195,0.293,0.263,0.227,0.312C0.162,0.359,0.081,0.387,-0.009,0.394C-0.099,0.401,-0.198,0.387,-0.267,0.339C-0.336,0.289,-0.375,0.205,-0.384,0.121C-0.393,0.037,-0.371,-0.047,-0.333,-0.119C-0.294,-0.191,-0.239,-0.251,-0.175,-0.3C-0.111,-0.35,-0.038,-0.387,0.04,-0.395C0.117,-0.402,0.234,-0.38,0.244,-0.32Z"
                    transform="matrix(2.5, 0, 0, 2.5, 0.5, 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </main>

        {/* Social Links Footer - Now fully responsive with dark mode support */}
        <footer className="flex justify-center pt-8 pb-4 md:p-0 md:justify-start md:absolute md:bottom-8 md:left-8 lg:bottom-12 lg:left-12">
          <div className="flex space-x-5 md:space-x-6 text-black-500 dark:text-white-400 text-lg md:text-xl">
            <a
              href="https://www.linkedin.com/in/vishalr5/"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/CodeByVishaal"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.instagram.com/vishaalind/?utm_source=qr#"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
