import React from 'react';
import { FiInfo, FiTrendingUp } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', crowd: 30 },
  { time: '08:30', crowd: 45 },
  { time: '09:00', crowd: 72 },
  { time: '09:30', crowd: 85 },
  { time: '10:00', crowd: 60 },
];

const CrowdDetails = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Current Occupancy - Route 42</h2>
        
        <div className="relative w-40 h-40 mx-auto flex items-center justify-center font-bold text-amber-600 text-4xl mb-4">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#FEF3C7" strokeWidth="12" fill="transparent" />
            <circle cx="50" cy="50" r="40" stroke="#F59E0B" strokeWidth="12" fill="transparent" strokeDasharray="251" strokeDashoffset={251 - (72/100)*251} />
          </svg>
          72%
        </div>
        
        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-sm">🟡 Moderate - High</span>
        <p className="text-slate-500 text-sm mt-3 flex items-center justify-center gap-1">
          <FiTrendingUp /> Expected to increase in next 30 mins
        </p>
      </div>

      <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
        <h3 className="font-bold text-sky-800 mb-2 flex items-center gap-2"><FiInfo /> AI Tip</h3>
        <p className="text-sm text-sky-700">If you can wait 15 minutes, the crowd level drops significantly after the peak 9:30 AM rush.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4">Smart Boarding Recommendation</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h4 className="font-bold text-slate-800 mb-1">Bus A (Arriving)</h4>
            <p className="text-slate-500 text-sm mb-3">In 3 mins</p>
            <div className="space-y-1 text-sm text-slate-600 font-medium">
              <p>Occupancy: <span className="text-red-500 font-bold">90%</span></p>
              <p>Seat Probability: <span className="text-red-500 font-bold">5%</span></p>
            </div>
          </div>
          
          <div className="border-2 border-sky-500 rounded-xl p-4 bg-sky-50/50 shadow-sm relative">
            <span className="absolute -top-3 right-4 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded">AI Pick</span>
            <h4 className="font-bold text-slate-800 mb-1">Bus B (Next)</h4>
            <p className="text-slate-500 text-sm mb-3">In 10 mins</p>
            <div className="space-y-1 text-sm text-slate-600 font-medium">
              <p>Occupancy: <span className="text-amber-500 font-bold">55%</span></p>
              <p>Seat Probability: <span className="text-green-500 font-bold">60%</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-64">
        <h3 className="font-bold text-slate-800 mb-4 text-sm">Crowd Trend</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
            <Tooltip />
            <Line type="monotone" dataKey="crowd" stroke="#0EA5E9" strokeWidth={3} dot={{r: 4, fill: '#0EA5E9'}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CrowdDetails;
