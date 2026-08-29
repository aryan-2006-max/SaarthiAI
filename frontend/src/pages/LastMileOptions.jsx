import React from 'react';
import { FiClock, FiCreditCard, FiShield, FiStar } from 'react-icons/fi';

const options = [
  { name: 'Auto', time: 6, cost: 50, safety: 88, rec: false, icon: '🛺' },
  { name: 'E-rickshaw', time: 8, cost: 20, safety: 85, rec: true, icon: '⚡' },
  { name: 'Bike Taxi', time: 5, cost: 30, safety: 70, rec: false, icon: '🏍️' },
  { name: 'Shared Auto', time: 10, cost: 15, safety: 75, rec: false, icon: '🚐' },
  { name: 'Walk', time: 22, cost: 0, safety: 90, rec: false, icon: '🚶' },
  { name: 'E-bike', time: 7, cost: 15, safety: 82, rec: false, icon: '🚲' }
];

const LastMileOptions = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Last Mile Options</h2>
        <p className="text-slate-500">Distance to destination: 1.8 km</p>
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex items-start gap-3">
        <FiStar className="text-sky-500 text-xl shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-sky-900 mb-1">AI Recommendation: E-rickshaw</h4>
          <p className="text-sm text-sky-800">E-rickshaw gives you the best balance of safety, cost, and eco-friendliness for this short distance. Lots available near you.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((opt, i) => (
          <div key={i} className={`bg-white rounded-2xl p-5 shadow-sm transition-all hover:shadow-md cursor-pointer ${opt.rec ? 'border-2 border-sky-500 ring-4 ring-sky-50' : 'border border-slate-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{opt.icon}</span>
                <h3 className="font-bold text-slate-800 text-lg">{opt.name}</h3>
              </div>
              {opt.rec && <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Recommended</span>}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1"><FiClock /> Time</span>
                <span className="font-semibold text-slate-800">{opt.time} min</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1"><FiCreditCard /> Cost</span>
                <span className="font-semibold text-slate-800">₹{opt.cost}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1"><FiShield /> Safety</span>
                <span className={`font-semibold ${opt.safety >= 85 ? 'text-green-500' : 'text-amber-500'}`}>{opt.safety}/100</span>
              </div>
            </div>

            <button className={`w-full py-2.5 rounded-xl font-bold transition-colors ${opt.rec ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
              Select {opt.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMileOptions;
