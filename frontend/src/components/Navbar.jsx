import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiUser, FiMoon, FiSun } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';
import { useUiStore } from '../store/uiStore';

export const Navbar = () => {
  const { user } = useAuthStore();
  const { darkMode, toggleDarkMode } = useUiStore();
  
  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-sky-100 dark:border-slate-700 px-4 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors">
      <Link to="/home" className="text-sky-500 font-bold text-xl tracking-tight">
        SaarthiAI
      </Link>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
        >
          {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
        </button>
        <Link to="/notifications" className="relative">
          <FiBell className="text-slate-600 dark:text-slate-300 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            5
          </span>
        </Link>
        <Link to="/profile" className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600 dark:text-sky-300 font-semibold text-sm">
          {user?.name?.[0] || 'A'}
        </Link>
      </div>
    </nav>
  );
};
