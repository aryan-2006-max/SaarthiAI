import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiAward, FiInfo } from 'react-icons/fi';

const GreenScore = () => {
  const trendData = [
    { month: 'Mar', score: 65 },
    { month: 'Apr', score: 70 },
    { month: 'May', score: 75 },
    { month: 'Jun', score: 72 },
    { month: 'Jul', score: 78 },
    { month: 'Aug', score: 82 },
  ];

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Green Commute Tracking</h1>

      <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-sm mb-6 flex flex-col items-center">
        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-green-500 mb-4">
           <div className="text-4xl font-bold text-green-500">82</div>
           <div className="absolute -top-3 -right-3 text-3xl">🌱</div>
        </div>
        <div className="text-lg font-bold text-slate-900">Your Green Score</div>
        <div className="text-sm text-slate-500 mb-4">Top 15% in your city</div>
        
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 w-full justify-center">
          <span className="text-xl">🌿</span>
          <span className="font-semibold text-lg">18 kg CO₂ Saved this month</span>
        </div>
      </div>

      <h2 className="text-lg font-bold text-slate-900 mb-3">Trip Breakdown</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
           <div className="text-2xl mb-1">🚌</div>
           <div className="font-bold text-slate-900">45 Trips</div>
           <div className="text-xs text-slate-600">Public Transport</div>
        </div>
        <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
           <div className="text-2xl mb-1">🚶</div>
           <div className="font-bold text-slate-900">12 Trips</div>
           <div className="text-xs text-slate-600">Walking</div>
        </div>
        <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
           <div className="text-2xl mb-1">🚲</div>
           <div className="font-bold text-slate-900">3 Trips</div>
           <div className="text-xs text-slate-600">Cycling</div>
        </div>
        <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
           <div className="text-2xl mb-1">🚗</div>
           <div className="font-bold text-slate-900">8 Trips</div>
           <div className="text-xs text-slate-600">Shared Rides</div>
        </div>
      </div>

      <h2 className="text-lg font-bold text-slate-900 mb-3">Monthly Trend</h2>
      <div className="h-48 bg-white border border-slate-100 rounded-xl p-2 mb-6 shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{top:10, right:10, left:0, bottom:0}}>
            <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#22C55E" strokeWidth={3} dot={{ r: 4, fill: '#22C55E' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-lg font-bold text-slate-900 mb-3">Achievements</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-6 pb-2">
         <div className="flex-shrink-0 bg-white border border-amber-200 rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <FiAward className="text-amber-500 text-xl" />
            <span className="font-semibold text-sm">Eco Warrior 🏆</span>
         </div>
         <div className="flex-shrink-0 bg-white border border-blue-200 rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <FiAward className="text-blue-500 text-xl" />
            <span className="font-semibold text-sm">Public Transport Champion 🚌</span>
         </div>
         <div className="flex-shrink-0 bg-white border border-green-200 rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <FiAward className="text-green-500 text-xl" />
            <span className="font-semibold text-sm">100 Green Trips 🌿</span>
         </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-500 pb-20">
        <FiInfo className="flex-shrink-0 mt-0.5" />
        <p>Estimates based on average emission data for transport modes in Delhi NCR region.</p>
      </div>
    </div>
  );
};

export default GreenScore;
