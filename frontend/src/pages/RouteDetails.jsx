import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const RouteDetails = () => {
  const navigate = useNavigate();

  const segments = [
    { mode: 'Walk', from: 'Home', to: 'Stand', duration: 5, fare: 0 },
    { mode: 'E-rickshaw', from: 'Stand', to: 'Bus Stop A', duration: 12, fare: 10 },
    { mode: 'Bus', from: 'Bus Stop A', to: 'Metro Stn', duration: 15, fare: 12 },
    { mode: 'Metro', from: 'Metro Stn', to: 'Destination Stn', duration: 10, fare: 20 },
    { mode: 'Walk', from: 'Destination Stn', to: 'Office', duration: 4, fare: 0 }
  ];

  const scores = [
    { label: 'Time', value: 85 },
    { label: 'Cost', value: 72 },
    { label: 'Crowd', value: 78 },
    { label: 'Safety', value: 91 },
    { label: 'Accessibility', value: 65 },
    { label: 'Environment', value: 80 }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-sm border border-slate-100 rounded-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Route B Details</h2>
          <p className="text-slate-500">46 min • ₹42</p>
        </div>
        <div className="relative w-20 h-20 flex items-center justify-center font-bold text-sky-600 text-2xl">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#E0F2FE" strokeWidth="8" fill="transparent" />
            <circle cx="50" cy="50" r="40" stroke="#0EA5E9" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset={251 - (88/100)*251} />
          </svg>
          88
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700">Journey Plan</h3>
          <div className="pl-2 relative border-l-2 border-dashed border-sky-200 ml-4 pb-4">
            {segments.map((seg, i) => (
              <div key={i} className="mb-6 relative">
                <div className="absolute -left-[25px] bg-sky-100 w-8 h-8 rounded-full flex items-center justify-center text-sky-600 font-bold text-xs ring-4 ring-white">
                  {seg.mode.charAt(0)}
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-slate-800 text-sm">{seg.from} <FiChevronRight className="inline text-slate-400" /> {seg.to}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-slate-500 text-sm">{seg.mode} • {seg.duration} min</p>
                    {seg.fare > 0 && <span className="text-sky-600 font-medium text-sm">₹{seg.fare}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-700">Score Breakdown</h3>
          <div className="space-y-4 mb-6">
            {scores.map(score => (
              <div key={score.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 font-medium">{score.label}</span>
                  <span className="text-slate-800 font-bold">{score.value}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${score.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-sky-50 rounded-xl p-4 border border-sky-100 mb-6">
            <h4 className="flex items-center gap-2 font-bold text-sky-800 mb-2">
              <FiCheckCircle className="text-sky-500" /> AI Insights
            </h4>
            <p className="text-sm text-sky-900 leading-relaxed">
              This route offers the best trade-off. Safety score is exceptionally high (91) due to well-lit metro stations and reliable E-rickshaw paths. Crowd is moderate right now.
            </p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigate('/journey')}
        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl shadow-md transition-colors text-lg mt-4"
      >
        Start This Journey
      </button>
    </div>
  );
};

export default RouteDetails;
