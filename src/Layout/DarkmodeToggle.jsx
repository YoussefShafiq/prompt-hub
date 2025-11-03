import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DarkmodeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Check user's preferred theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Default to light mode if no preference is set
    const initialTheme = storedTheme || 'dark';
    setIsDark(initialTheme === 'dark' || (initialTheme === 'system' && prefersDark));
    applyTheme(initialTheme);
  }, []);

  // Apply the selected theme
  const applyTheme = (theme) => {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle between light and dark modes
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full transition-colors duration-300 backdrop-blur-md ${isDark ? 'bg-customDarkgray text-customWhite' : 'bg-customWhite/10 transition-colors dark:bg-customDarkBackground/10  text-customDarkgray transition-colors dark:text-customlightgray'
        } shadow-md hover:shadow-lg`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={20} className="text-customWhite" />
        ) : (
          <Moon size={20} className="text-darkbackground transition-colors dark:text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkmodeToggle;