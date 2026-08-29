import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const AccessibilityMode = () => {
  const [needs, setNeeds] = useState({
    wheelchair: true,
    elderly: false,
    pregnant: false,
    child: false,
    visual: false
  });
  const [distance, setDistance] = useState(500);

  const toggleNeed = (key) => {
    setNeeds({...needs, [key]: !needs[key]});
  };

  const options = [
    { id: 'wheelchair', label: 'Wheelchair', icon: '♿' },
    { id: 'elderly', label: 'Elderly', icon: '👴' },
    { id: 'pregnant', label: 'Pregnant', icon: '🤰' },
    { id: 'child', label: 'Child/Stroller', icon: '👶' },
    { id: 'visual', label: 'Visual Assist', icon: '👁️' },
  ];

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen pb-24">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Accessibility Settings</h1>
      <p className="text-sm text-slate-500 mb-6">Customize routes based on your mobility needs.</p>

      <h2 className="font-bold text-slate-900 mb-3">Accessibility Needs</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {options.map(opt => (
          <button 
            key={opt.id}
            onClick={() => toggleNeed(opt.id)}
            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${needs[opt.id] ? 'border-sky-500 bg-sky-50' : 'border-slate-100 bg-white'}`}
          >
            <span className="text-2xl">{opt.icon}</span>
            <span className={`font-medium text-sm ${needs[opt.id] ? 'text-sky-700' : 'text-slate-700'}`}>{opt.label}</span>
          </button>
        ))}
      </div>

      <h2 className="font-bold text-slate-900 mb-3">Route Preferences</h2>
      <div className="space-y-3 mb-8">
        <label className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
          <span className="text-sm font-medium text-slate-800">Prefer Elevators</span>
          <input type="checkbox" defaultChecked className="w-5 h-5 text-sky-500 rounded focus:ring-sky-500" />
        </label>
        <label className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
          <span className="text-sm font-medium text-slate-800">Prefer Ramps</span>
          <input type="checkbox" defaultChecked className="w-5 h-5 text-sky-500 rounded focus:ring-sky-500" />
        </label>
        <label className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
          <span className="text-sm font-medium text-slate-800">Avoid Stairs entirely</span>
          <input type="checkbox" className="w-5 h-5 text-sky-500 rounded focus:ring-sky-500" />
        </label>
      </div>

      <h2 className="font-bold text-slate-900 mb-3">Max Walking Distance</h2>
      <div className="mb-8 px-2">
        <input 
          type="range" 
          min="100" max="2000" step="100" 
          value={distance} 
          onChange={(e) => setDistance(e.target.value)}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>100m</span>
          <span className="font-bold text-sky-600">{distance}m</span>
          <span>2km</span>
        </div>
      </div>

      <h2 className="font-bold text-slate-900 mb-3">Nearby Accessible Stations</h2>
      <div className="space-y-3 mb-8">
        <div className="p-3 bg-sky-50 rounded-xl flex items-center justify-between border border-sky-100">
           <div>
              <div className="font-bold text-slate-900 text-sm">Rajiv Chowk Metro</div>
              <div className="text-xs text-slate-500">1.2 km away</div>
           </div>
           <div className="flex gap-2 text-xl">
             <span title="Elevator">🛗</span>
             <span title="Wheelchair Ramp">♿</span>
             <span title="Tactile Path">🦯</span>
           </div>
        </div>
        <div className="p-3 bg-sky-50 rounded-xl flex items-center justify-between border border-sky-100">
           <div>
              <div className="font-bold text-slate-900 text-sm">Shivaji Stadium</div>
              <div className="text-xs text-slate-500">2.5 km away</div>
           </div>
           <div className="flex gap-2 text-xl">
             <span title="Elevator">🛗</span>
             <span title="Wheelchair Ramp">♿</span>
           </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:left-64 p-4 bg-white border-t border-slate-100 z-10">
        <button className="w-full bg-sky-500 text-white font-bold py-3 rounded-xl hover:bg-sky-600 transition flex items-center justify-center gap-2">
          <FiCheck /> Save Preferences
        </button>
        <p className="text-center text-[10px] text-slate-400 mt-2">Accessibility data is simulated for demo purposes</p>
      </div>
    </div>
  );
};

export default AccessibilityMode;
