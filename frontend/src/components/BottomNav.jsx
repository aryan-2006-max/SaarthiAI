import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiMap, FiCompass, FiCreditCard, FiUser } from 'react-icons/fi';

export const BottomNav = () => {
  const tabs = [
    { name: 'Home', path: '/home', icon: FiHome },
    { name: 'Plan', path: '/plan', icon: FiMap },
    { name: 'Journey', path: '/journey', icon: FiCompass },
    { name: 'Card', path: '/card', icon: FiCreditCard },
    { name: 'Profile', path: '/profile', icon: FiUser },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-sky-100 dark:border-slate-700 px-6 py-2 flex justify-between items-center z-50 pb-safe transition-colors">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) => 
            `flex flex-col items-center p-2 ${isActive ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500'}`
          }
        >
          <tab.icon className="text-xl mb-1" />
          <span className="text-[10px] font-medium">{tab.name}</span>
        </NavLink>
      ))}
    </div>
  );
};
