"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LuMoon, LuSun } from "react-icons/lu";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full",
        "bg-background/50 backdrop-blur-sm border border-border/20",
        "hover:bg-background/80 text-foreground transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 180 : 0,
          scale: theme === "light" ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "light" ? <LuSun size={18} /> : <LuMoon size={18} />}
      </motion.div>
    </motion.button>
  );
};