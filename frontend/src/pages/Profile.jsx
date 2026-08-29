import React, { useState } from 'react';
import { FiEdit2, FiSave, FiMapPin, FiHome, FiBriefcase, FiBook, FiPlus } from 'react-icons/fi';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Aryan Sharma',
    email: 'user@saarthi.ai',
    mobile: '9876543210',
    city: 'Delhi'
  });

  const [preferences, setPreferences] = useState({
    fastest: true, cheapest: false, leastCrowded: true, safest: true, greenest: false, accessible: false
  });

  const [weights, setWeights] = useState({
    time: 80, cost: 60, crowd: 70, safety: 90, accessibility: 30, environment: 40
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handlePrefChange = (k) => setPreferences({ ...preferences, [k]: !preferences[k] });
  const handleWeightChange = (e) => setWeights({ ...weights, [e.target.name]: e.target.value });

  const Wrapper = ({ children }) => (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      {children}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto p-4 space-y-6 pt-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 relative">
          <button onClick={() => setIsEditing(!isEditing)} className="absolute top-6 right-6 text-sky-500 hover:text-sky-700 p-2 rounded-full bg-sky-50">
            {isEditing ? <FiSave /> : <FiEdit2 />}
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 text-2xl font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">{user.name}</h1>
              <p className="text-slate-500 text-sm">Commuter</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'email', 'mobile', 'city'].map((field) => (
              <div key={field}>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{field}</label>
                {isEditing ? (
                  <input type="text" name={field} value={user[field]} onChange={handleChange} className="w-full border-b-2 border-sky-500 outline-none py-1 text-slate-800" />
                ) : (
                  <p className="font-medium text-slate-800 py-1">{user[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Saved Places */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center"><FiMapPin className="mr-2 text-sky-500"/> Saved Places</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-sky-50 p-4 rounded-xl flex items-center space-x-3 border border-sky-100">
              <div className="bg-sky-100 p-2 rounded-lg text-sky-600"><FiHome /></div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Home</p>
                <p className="text-xs text-slate-500 truncate">Vasant Kunj, Delhi</p>
              </div>
            </div>
            <div className="bg-sky-50 p-4 rounded-xl flex items-center space-x-3 border border-sky-100">
              <div className="bg-sky-100 p-2 rounded-lg text-sky-600"><FiBriefcase /></div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Office</p>
                <p className="text-xs text-slate-500 truncate">Cyber City, Gurugram</p>
              </div>
            </div>
            <div className="bg-sky-50 p-4 rounded-xl flex items-center space-x-3 border border-sky-100">
              <div className="bg-sky-100 p-2 rounded-lg text-sky-600"><FiBook /></div>
              <div>
                <p className="font-bold text-slate-800 text-sm">College</p>
                <p className="text-xs text-slate-500 truncate">North Campus</p>
              </div>
            </div>
          </div>
          <button className="flex items-center text-sky-500 font-medium hover:text-sky-700 text-sm bg-sky-50 px-4 py-2 rounded-lg">
            <FiPlus className="mr-1" /> Add New Place
          </button>
        </div>

        {/* Travel Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Travel Preferences</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {Object.keys(preferences).map(key => (
              <label key={key} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" checked={preferences[key]} onChange={() => handlePrefChange(key)} className="w-4 h-4 text-sky-500 rounded border-slate-300 focus:ring-sky-500" />
                <span className="text-sm text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              </label>
            ))}
          </div>

          <h3 className="text-sm font-bold text-slate-800 mb-3">Priority Weights</h3>
          <div className="space-y-4">
            {Object.keys(weights).map(key => (
              <div key={key}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 capitalize">{key}</span>
                  <span className="text-sky-600 font-bold">{weights[key]}%</span>
                </div>
                <input type="range" name={key} min="0" max="100" value={weights[key]} onChange={handleWeightChange} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </Wrapper>
  );
};

export default Profile;
