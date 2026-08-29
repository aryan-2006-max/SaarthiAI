import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiTruck, FiCheckCircle, FiClock, FiTool, FiAlertTriangle } from 'react-icons/fi';

const OperatorDashboard = () => {
  const revenueData = [
    { day: 'Mon', rev: 45000 },
    { day: 'Tue', rev: 52000 },
    { day: 'Wed', rev: 48000 },
    { day: 'Thu', rev: 51000 },
    { day: 'Fri', rev: 58000 },
    { day: 'Sat', rev: 35000 },
    { day: 'Sun', rev: 28000 },
  ];

  const demandData = [
    { time: '6AM', val: 20 },
    { time: '9AM', val: 95 },
    { time: '12PM', val: 40 },
    { time: '3PM', val: 50 },
    { time: '6PM', val: 90 },
    { time: '9PM', val: 30 },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Fleet Operator Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
           <div className="bg-sky-100 text-sky-600 p-3 rounded-lg text-xl"><FiTruck/></div>
           <div>
             <div className="text-2xl font-bold text-slate-900">12</div>
             <div className="text-xs text-slate-500 font-medium">Total Vehicles</div>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
           <div className="bg-green-100 text-green-600 p-3 rounded-lg text-xl"><FiCheckCircle/></div>
           <div>
             <div className="text-2xl font-bold text-slate-900">8</div>
             <div className="text-xs text-slate-500 font-medium">Running</div>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
           <div className="bg-amber-100 text-amber-600 p-3 rounded-lg text-xl"><FiClock/></div>
           <div>
             <div className="text-2xl font-bold text-slate-900">2</div>
             <div className="text-xs text-slate-500 font-medium">Stopped/Delayed</div>
           </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
           <div className="bg-slate-100 text-slate-600 p-3 rounded-lg text-xl"><FiTool/></div>
           <div>
             <div className="text-2xl font-bold text-slate-900">2</div>
             <div className="text-xs text-slate-500 font-medium">Maintenance</div>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Active Fleet Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: 'DL-1PB-1234', route: 'Route 522', status: 'Running', statColor: 'bg-green-100 text-green-700', occ: '85%' },
              { id: 'DL-1PB-5678', route: 'Route 423', status: 'Running', statColor: 'bg-green-100 text-green-700', occ: '40%' },
              { id: 'DL-1PB-9012', route: 'Route 522', status: 'Delayed 10m', statColor: 'bg-amber-100 text-amber-700', occ: '95%' },
              { id: 'DL-1PB-3456', route: 'Route 112', status: 'Stopped', statColor: 'bg-red-100 text-red-700', occ: '0%' },
            ].map(v => (
              <div key={v.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
                 <div>
                   <div className="font-mono font-bold text-slate-900">{v.id}</div>
                   <div className="text-sm text-slate-500 mb-2">{v.route}</div>
                   <span className={`text-xs font-bold px-2 py-1 rounded ${v.statColor}`}>{v.status}</span>
                 </div>
                 <div className="text-center">
                   <div className="w-12 h-12 rounded-full border-4 border-sky-500 flex items-center justify-center text-sm font-bold text-slate-900 mb-1">
                     {v.occ}
                   </div>
                   <div className="text-[10px] text-slate-400">Occupancy</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Active Incidents</h2>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-4">
             <div className="flex gap-3 items-start pb-4 border-b border-slate-50">
               <FiAlertTriangle className="text-amber-500 mt-1 flex-shrink-0" />
               <div>
                 <div className="font-bold text-sm text-slate-900">Traffic Jam - ITO</div>
                 <div className="text-xs text-slate-500">Affecting Route 522 • Expect 15m delay</div>
               </div>
             </div>
             <div className="flex gap-3 items-start">
               <FiTool className="text-red-500 mt-1 flex-shrink-0" />
               <div>
                 <div className="font-bold text-sm text-slate-900">Vehicle Breakdown</div>
                 <div className="text-xs text-slate-500">DL-1PB-3456 at Lajpat Nagar • Maintenance team dispatched</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Weekly Revenue</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} />
                <Tooltip cursor={{fill: '#f0f9ff'}} formatter={(value) => `₹${value}`} />
                <Bar dataKey="rev" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Hourly Demand (Today)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demandData} margin={{top:5, right:10, left:0, bottom:0}}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="val" stroke="#38BDF8" strokeWidth={3} dot={{r:4, fill:'#38BDF8'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OperatorDashboard;
