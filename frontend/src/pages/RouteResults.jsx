import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock, FiShield, FiCreditCard, FiUsers } from 'react-icons/fi';

const mockRoutes = [
  { id: 'A', recommended: false, modes: ['Bus', 'Metro', 'Walk'], time: 42, cost: 35, crowd: 'High', safety: 82, score: 74, explanation: 'Affordable route but currently experiencing high crowd levels.' },
  { id: 'B', recommended: true, modes: ['E-rickshaw', 'Bus', 'Metro'], time: 46, cost: 42, crowd: 'Medium', safety: 91, score: 88, explanation: 'Optimal balance of time and comfort with moderate crowd.' },
  { id: 'C', recommended: false, modes: ['Auto', 'Metro'], time: 35, cost: 85, crowd: 'Low', safety: 87, score: 79, explanation: 'Fastest route, low crowd, but more expensive.' }
];

const RouteResults = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Route Options</h2>
        <button className="text-sky-500 font-medium hover:underline text-sm" onClick={() => navigate('/plan')}>Edit Search</button>
      </div>

      <div className="space-y-4">
        {mockRoutes.map((route, idx) => (
          <div key={route.id} className={`bg-white rounded-2xl shadow-sm p-5 transition-all hover:shadow-md ${route.recommended ? 'border-l-4 border-l-sky-500 border-t border-r border-b border-sky-100 ring-1 ring-sky-50' : 'border border-slate-200'}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">Route {route.id}</h3>
                  {route.recommended && (
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      ⭐ Recommended
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-slate-500 text-sm font-medium">
                  {route.modes.map((mode, i) => (
                    <React.Fragment key={i}>
                      <span className="bg-slate-100 px-2 py-1 rounded-md">{mode}</span>
                      {i < route.modes.length - 1 && <span className="text-slate-300">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border-4 border-sky-100 relative">
                <span className="text-lg font-bold text-sky-600">{route.score}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 bg-slate-50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-slate-700">
                <FiClock className="text-sky-500" />
                <span className="font-semibold">{route.time} <span className="text-xs font-normal">min</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FiCreditCard className="text-sky-500" />
                <span className="font-semibold">₹{route.cost}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FiUsers className={`text-${route.crowd === 'High' ? 'red' : route.crowd === 'Medium' ? 'amber' : 'green'}-500`} />
                <span className="font-medium text-sm">{route.crowd}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FiShield className="text-sky-500" />
                <span className="font-medium text-sm">{route.safety} Safety</span>
              </div>
            </div>

            {route.recommended && (
              <div className="bg-sky-50 rounded-xl p-4 mb-4 text-sm text-sky-900 border border-sky-100">
                <p className="font-semibold mb-1">💡 Why AI recommends this:</p>
                <ul className="list-disc list-inside space-y-1 ml-1 text-sky-800">
                  <li>{route.explanation}</li>
                  <li>Saves ₹43 compared to fastest route.</li>
                  <li>Moderate crowd level ensures a comfortable journey.</li>
                </ul>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => navigate(`/route/${route.id}`)}
                className="flex-1 border border-sky-500 text-sky-600 hover:bg-sky-50 font-bold py-2.5 rounded-xl transition-colors"
              >
                View Details
              </button>
              <button 
                onClick={() => navigate('/journey')}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl shadow transition-colors"
              >
                Start Journey
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteResults;
