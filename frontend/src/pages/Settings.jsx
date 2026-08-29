import React, { useState } from 'react';
import { FiGlobe, FiBell, FiActivity, FiShield, FiLogOut, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Settings = () => {
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);
  const [toggles, setToggles] = useState({
    traffic: true,
    crowd: true,
    journey: true,
    wallet: false,
    safety: true,
    demoMode: false
  });
  const [language, setLanguage] = useState('English');

  const handleToggle = (key) => setToggles({ ...toggles, [key]: !toggles[key] });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <div onClick={onChange} className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-sky-500' : 'bg-slate-300'}`}>
      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
    </div>
  );

  const SectionTitle = ({ title }) => (
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-6 px-2">{title}</h3>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <div className="max-w-2xl mx-auto p-4 pt-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Settings</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
          
          <SectionTitle title="General" />
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center text-slate-700">
              <FiGlobe className="mr-3 text-sky-500" /> Language
            </div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-2 py-1 outline-none focus:border-sky-500">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center text-slate-700">
              <FiShield className="mr-3 text-sky-500" /> Accessibility Settings
            </div>
            <FiChevronRight className="text-slate-400" />
          </div>

          <SectionTitle title="Notifications" />
          <div className="px-4 py-2 border-b border-slate-100">
            {['traffic', 'crowd', 'journey', 'wallet', 'safety'].map((item) => (
              <div key={item} className="flex justify-between items-center py-2">
                <span className="text-slate-700 capitalize text-sm">{item} Alerts</span>
                <ToggleSwitch checked={toggles[item]} onChange={() => handleToggle(item)} />
              </div>
            ))}
          </div>

          <SectionTitle title="Developer" />
          <div className="px-4 py-4 border-b border-slate-100 flex justify-between items-center">
            <div>
              <div className="flex items-center text-slate-700 font-medium">
                <FiActivity className="mr-3 text-sky-500" /> Demo Mode
              </div>
              <p className="text-xs text-slate-500 mt-1 ml-7">Enable simulated real-time data</p>
            </div>
            <ToggleSwitch checked={toggles.demoMode} onChange={() => handleToggle('demoMode')} />
          </div>

          <div className="p-4 mt-4 bg-red-50">
            <button onClick={handleLogout} className="w-full flex items-center justify-center text-red-600 font-bold py-2 rounded-lg hover:bg-red-100 transition-colors">
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
