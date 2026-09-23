import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useUiStore } from '../store/uiStore';
import { 
  FiHome, FiMap, FiCompass, FiCreditCard, FiUser, FiSettings, 
  FiShield, FiHeart, FiMessageCircle, FiDollarSign, FiList, 
  FiBell, FiFlag, FiActivity, FiLogOut, FiBarChart, FiNavigation, 
  FiMoon, FiSun, FiZap, FiTruck
} from 'react-icons/fi';

export const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const { darkMode, toggleDarkMode } = useUiStore();
  const navigate = useNavigate();

  const mainLinks = [
    { name: 'Home', path: '/home', icon: FiHome },
    { name: 'Plan Journey', path: '/plan', icon: FiMap },
    { name: 'Live Journey', path: '/journey', icon: FiCompass },
    { name: 'Live Bus Tracking', path: '/live-buses', icon: FiNavigation },
  ];

  const bookingLinks = [
    { name: '1-Click Daily Commute', path: '/daily-commute-booking', icon: FiZap },
    { name: 'Delhi-Jaipur Intercity', path: '/intercity-booking', icon: FiNavigation },
    { name: 'Authorised Driver Portal', path: '/driver-portal', icon: FiTruck },
  ];

  const serviceLinks = [
    { name: 'AI Assistant', path: '/assistant', icon: FiMessageCircle },
    { name: 'Crowd Info', path: '/crowd/1', icon: FiActivity },
    { name: 'Safety Mode', path: '/safety', icon: FiShield },
    { name: 'Accessibility', path: '/accessibility', icon: FiHeart },
  ];

  const financeLinks = [
    { name: 'Saarthi Card', path: '/card', icon: FiCreditCard },
    { name: 'Wallet', path: '/wallet', icon: FiDollarSign },
    { name: 'Transactions', path: '/transactions', icon: FiList },
  ];

  const communityLinks = [
    { name: 'Community Reports', path: '/reports', icon: FiFlag },
    { name: 'Green Score', path: '/green-score', icon: FiHeart },
    { name: 'Notifications', path: '/notifications', icon: FiBell },
  ];

  const managementLinks = [];
  if (user?.role === 'admin') {
    managementLinks.push({ name: 'Admin Dashboard', path: '/admin', icon: FiBarChart });
  }
  if (user?.role === 'operator') {
    managementLinks.push({ name: 'Operator Dashboard', path: '/operator', icon: FiBarChart });
  }

  const NavItem = ({ item }) => (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
          isActive ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
        }`
      }
    >
      <item.icon className="text-lg flex-shrink-0" />
      <span>{item.name}</span>
    </NavLink>
  );

  const Section = ({ title, links }) => (
    <div>
      <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-4">{title}</h2>
      <div className="space-y-0.5">
        {links.map(link => <NavItem key={link.name} item={link} />)}
      </div>
    </div>
  );

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen border-r border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800 fixed top-0 left-0 z-40 transition-colors">
      <div className="p-5 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <h1 className="text-xl font-bold mb-1">SaarthiAI</h1>
        <p className="text-xs text-white/70 mb-3">Plan smarter → Travel easier</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-semibold text-sm">
            {user?.name?.[0] || 'A'}
          </div>
          <div>
            <p className="font-medium text-sm">{user?.name || 'User'}</p>
            <p className="text-xs text-white/80 capitalize">{user?.role || 'commuter'} • {user?.city || 'Delhi'}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        <Section title="Main" links={mainLinks} />
        <Section title="Booking & Rides" links={bookingLinks} />
        <Section title="Services" links={serviceLinks} />
        <Section title="Finance" links={financeLinks} />
        <Section title="Community" links={communityLinks} />
        {managementLinks.length > 0 && <Section title="Management" links={managementLinks} />}

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
              isActive ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`
          }
        >
          <FiUser className="text-lg" />
          <span>Profile</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
              isActive ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`
          }
        >
          <FiSettings className="text-lg" />
          <span>Settings</span>
        </NavLink>
      </div>

      <div className="p-3 border-t border-sky-100 dark:border-slate-700 space-y-1">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm w-full"
        >
          {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm w-full"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
