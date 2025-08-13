"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon } from "../ui/sun";
import { MoonIcon } from "../ui/moon";
import { HomeIcon } from "../ui/home";
import { useTheme } from "@/hooks/useTheme";
import { UserIcon } from "../ui/user";
import { FlaskIcon } from "../ui/flask";

const Profile = ({ className = "w-5 h-5" }) => <UserIcon size={24} />;
const Projects = ({ className = "w-5 h-5" }) => <FlaskIcon size={24} />;
const SettingsIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
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
  };

  const SeparatorComponent = () => (
    <div
      className="h-7 w-px bg-slate-200 dark:bg-slate-700"
      aria-hidden="true"
    />
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-row items-center gap-1 rounded-full border border-slate-200 bg-white/70 dark:bg-black dark:border-slate-700 p-1 shadow-md backdrop-blur-sm ${
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
            className={`relative z-10 flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none 
            ${
              isSelected
                ? "text-slate-900 dark:text-green-300"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
            }
          `}
          >
            {isSelected && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 z-0 rounded-full bg-white dark:bg-green-500/20 backdrop-blur-sm border border-green-400/30 shadow-sm"
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
  const { theme, toggleTheme } = useTheme(); // ✅ must come BEFORE defining TABS
  const TABS: TabItem[] = [
    { type: "tab", title: "Profile", icon: Profile },
    { type: "tab", title: "Projects", icon: Projects },
    { type: "tab", title: "Messages", icon: MailIcon },
    // { type: "separator" },
    {
      type: "custom",
      render: () => (
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full text-black dark:text-white transition-colors"
        >
          {theme === "dark" ? (
            <SunIcon size={24} className="w-5 h-5" />
          ) : (
            <MoonIcon size={24} className="w-5 h-5" />
          )}
        </button>
      ),
    },
    // { type: "tab", title: "Settings", icon: SettingsIcon },
  ];

  return <ExpandedTabs tabs={TABS} />;
}
