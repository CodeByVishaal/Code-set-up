"use client";
import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FlaskIcon } from "../ui/flask";
import { MoonIcon } from "../ui/moon";
import { SunIcon } from "../ui/sun";
import { UserIcon } from "../ui/user";

const Profile = () => <UserIcon size={24} />;
const Projects = () => <FlaskIcon size={24} />;

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

interface Tab {
  type: "tab";
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Separator {
  type: "separator";
}

interface Custom {
  type: "custom";
  render: () => React.ReactNode;
}

type TabItem = Tab | Separator | Custom;

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "auto",
    opacity: 1,
    transition: { delay: 0.05, duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.1, ease: "easeIn" as const },
  },
};

interface ExpandedTabsProps {
  tabs: TabItem[];
  className?: string;
  onChange?: (index: number | null) => void;
  isScrolled: boolean;
  activeSection: number;
}

function ExpandedTabs({
  tabs,
  className,
  onChange,
  isScrolled,
  activeSection,
}: ExpandedTabsProps) {
  const [selected, setSelected] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update selected state when activeSection changes
  useEffect(() => {
    setSelected(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelected(null);
        if (onChange) onChange(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onChange]);

  const handleSelect = (index: number) => {
    setSelected(index);
    if (onChange) onChange(index);

    // Smooth scroll to sections
    const selectedTab = tabs[index];
    if (selectedTab.type === "tab") {
      if (selectedTab.title === "Profile") {
        const section = document.querySelector("[data-section='portfolio']");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else if (selectedTab.title === "Projects") {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (selectedTab.title === "Messages") {
        const section = document.querySelector("[data-section='messages']");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const SeparatorComponent = () => (
    <div
      className="h-7 w-px bg-slate-200 dark:bg-red-500/30"
      aria-hidden="true"
    />
  );

  return (
    <motion.div
      ref={containerRef}
      className={`flex flex-row items-center gap-1 rounded-full border transition-all duration-300 ${
        isScrolled
          ? "border-slate-300/50 dark:border-red-500/40 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg dark:shadow-red-500/20"
          : "border-slate-200 dark:border-red-500/30 bg-white/70 dark:bg-black/80 backdrop-blur-md shadow-md dark:shadow-red-500/20"
      } p-1 ${className || ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      }}
    >
      {tabs.map((tab: TabItem, index: number) => {
        if (tab.type === "separator") {
          return <SeparatorComponent key={`separator-${index}`} />;
        }

        if (tab.type === "custom") {
          return (
            <div key={`custom-${index}`} className="px-2">
              {tab.render()}
            </div>
          );
        }

        // tab.type === "tab"
        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <button
            key={tab.title}
            onClick={() => handleSelect(index)}
            className={`relative z-10 flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover-glow
            ${
              isSelected
                ? "text-slate-900 dark:text-red-400 dark:red-text-glow"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-red-300"
            }
          `}
          >
            {isSelected && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 z-0 rounded-full bg-white dark:bg-red-500/20 backdrop-blur-sm border border-gray-200 dark:border-red-400/30 shadow-sm dark:shadow-red-500/30"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-2">
              <Icon className="h-5 w-5 flex-shrink-0" />
              <AnimatePresence initial={false}>
                {isSelected && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

export default function FloatingNavbar() {
  const { theme, toggleTheme } = useTheme();
  //@ts-ignore
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<number>(0);

  // Track scroll position for styling changes and section detection
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = [
        {
          id: "portfolio",
          element: document.getElementById("profile"),
        },
        { id: "projects", element: document.getElementById("projects") },
        {
          id: "messages",
          element: document.querySelector("[data-section='messages']"),
        },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].element;
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      const latest = window.scrollY;
      setIsScrolled(latest > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (latest > lastScrollY && latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(latest);

      // Update active section
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    updateActiveSection(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const TABS: TabItem[] = [
    { type: "tab", title: "Profile", icon: Profile },
    { type: "tab", title: "Projects", icon: Projects },
    { type: "tab", title: "Messages", icon: MailIcon },
    {
      type: "custom",
      render: () => (
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full text-black dark:text-red-300 hover:text-gray-800 dark:hover:text-red-400 transition-colors duration-300 dark:hover:drop-shadow-[0_0_5px_rgba(255,50,50,0.5)]"
        >
          {theme === "dark" ? (
            <SunIcon size={24} className="w-5 h-5" />
          ) : (
            <MoonIcon size={24} className="w-5 h-5" />
          )}
        </button>
      ),
    },
  ];

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <ExpandedTabs
        tabs={TABS}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />
    </motion.div>
  );
}
