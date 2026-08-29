import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FiHome, FiMap, FiCompass, FiCreditCard, FiUser, FiSettings, FiShield, FiHeart, FiMessageCircle, FiDollarSign, FiList, FiBell, FiFlag, FiActivity, FiLogOut, FiBarChart } from 'react-icons/fi';

export const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const mainLinks = [
    { name: 'Home', path: '/home', icon: FiHome },
    { name: 'Plan Journey', path: '/plan', icon: FiMap },
    { name: 'Live Journey', path: '/journey', icon: FiCompass },
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
          isActive ? 'bg-sky-50 text-sky-600 font-medium' : 'text-slate-600 hover:bg-slate-50'
        }`
      }
    >
      <item.icon className="text-lg flex-shrink-0" />
      <span>{item.name}</span>
    </NavLink>
  );

  const Section = ({ title, links }) => (
    <div>
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-4">{title}</h2>
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
    <aside className="hidden md:flex flex-col w-64 h-screen border-r border-sky-100 bg-white fixed top-0 left-0 z-40">
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
        <Section title="Services" links={serviceLinks} />
        <Section title="Finance" links={financeLinks} />
        <Section title="Community" links={communityLinks} />
        {managementLinks.length > 0 && <Section title="Management" links={managementLinks} />}

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
              isActive ? 'bg-sky-50 text-sky-600 font-medium' : 'text-slate-600 hover:bg-slate-50'
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
              isActive ? 'bg-sky-50 text-sky-600 font-medium' : 'text-slate-600 hover:bg-slate-50'
            }`
          }
        >
          <FiSettings className="text-lg" />
          <span>Settings</span>
        </NavLink>
      </div>

      <div className="p-3 border-t border-sky-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors text-sm w-full"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
