import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiUser } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const { user } = useAuthStore();
  
  return (
    <nav className="bg-white border-b border-sky-100 px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <Link to="/home" className="text-sky-500 font-bold text-xl tracking-tight">
        SaarthiAI
      </Link>
      
      <div className="flex items-center gap-4">
        <Link to="/notifications" className="relative">
          <FiBell className="text-slate-600 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            5
          </span>
        </Link>
        <Link to="/profile" className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold text-sm">
          {user?.name?.[0] || 'A'}
        </Link>
      </div>
    </nav>
  );
};
