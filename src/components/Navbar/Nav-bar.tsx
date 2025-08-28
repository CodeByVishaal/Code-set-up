"use client";
import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
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
}

function ExpandedTabs({ tabs, className, onChange }: ExpandedTabsProps) {
  const [selected, setSelected] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const selectedTab = tabs[index];
    if (selectedTab.type === "tab" && selectedTab.title === "Projects") {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
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
    <div
      ref={containerRef}
      className={`flex flex-row items-center gap-1 rounded-full border border-slate-200 dark:border-red-500/30 bg-white/70 dark:bg-black/80 dark:backdrop-blur-md p-1 shadow-md backdrop-blur-sm dark:shadow-red-500/20 ${
        className || ""
      }`}
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
                ? "text-red-600 dark:red-text-glow hover:text-red-600"
                : "text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-300"
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
    </div>
  );
}

export default function Tabs2() {
  const { theme, toggleTheme } = useTheme();

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
          className="rounded-full text-red-500 hover:text-red-400 transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(255,50,50,0.5)]"
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

  return <ExpandedTabs tabs={TABS} />;
}
