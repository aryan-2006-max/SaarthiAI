import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiUsers, FiActivity, FiTruck, FiCreditCard, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';

const AdminDashboard = () => {
  const routeData = [
    { name: 'Route 522', riders: 12400 },
    { name: 'Metro Blue', riders: 45000 },
    { name: 'Route 423', riders: 8900 },
    { name: 'Metro Yellow', riders: 38000 },
    { name: 'Route 112', riders: 5600 },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-slate-900">City Admin Dashboard</h1>
        <select className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium shadow-sm outline-none">
          <option>Delhi NCR</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Total Commuters', val: '45,230', icon: <FiUsers/>, inc: '+12%' },
          { label: 'Active Journeys', val: '3,847', icon: <FiActivity/>, inc: '+5%' },
          { label: 'Vehicles Tracked', val: '892', icon: <FiTruck/>, inc: '0%' },
          { label: 'Transactions', val: '₹12.4L', icon: <FiCreditCard/>, inc: '+18%' },
          { label: 'Avg Crowd', val: 'Mod 🟡', icon: <FiTrendingUp/>, inc: '' },
          { label: 'Incidents Today', val: '7', icon: <FiAlertCircle/>, inc: '-2' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <div className="bg-sky-100 text-sky-600 p-2 rounded-lg">{stat.icon}</div>
              {stat.inc && <span className={`text-xs font-bold ${stat.inc.startsWith('+') ? 'text-green-500' : 'text-slate-500'}`}>{stat.inc}</span>}
            </div>
            <div className="text-xl font-bold text-slate-900 mb-1">{stat.val}</div>
            <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Live Crowd Heatmap</h2>
          <div className="w-full h-64 bg-sky-50 rounded-lg relative overflow-hidden border border-sky-100 flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-sky-300 font-bold opacity-50 text-xl absolute">Map Visualization - Delhi</div>
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-amber-500 rounded-full opacity-75 blur-[2px]"></div>
            <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-green-500 rounded-full opacity-50 blur-sm"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-1/2 left-1/3 w-5 h-5 bg-amber-400 rounded-full blur-[1px]"></div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Top Busiest Routes</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={routeData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={12} width={80} />
                <Tooltip cursor={{fill: '#f0f9ff'}} />
                <Bar dataKey="riders" fill="#0EA5E9" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-6">
        <div className="p-5 border-b border-slate-100">
           <h2 className="text-lg font-bold text-slate-900">AI Demand Prediction & Recommendations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-4 font-medium">Route</th>
                <th className="p-4 font-medium">Time Window</th>
                <th className="p-4 font-medium">Predicted Demand</th>
                <th className="p-4 font-medium">AI Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-medium">Route 522</td>
                <td className="p-4 text-slate-500">08:00 - 10:00 AM</td>
                <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs">HIGH 🔴</span></td>
                <td className="p-4 text-sky-700 font-medium">Deploy 3 additional buses from Depot B</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Metro Blue</td>
                <td className="p-4 text-slate-500">05:00 - 08:00 PM</td>
                <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs">HIGH 🔴</span></td>
                <td className="p-4 text-sky-700 font-medium">Increase frequency to 2 mins</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Route 112</td>
                <td className="p-4 text-slate-500">12:00 - 03:00 PM</td>
                <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold text-xs">LOW 🟢</span></td>
                <td className="p-4 text-sky-700 font-medium">Reduce fleet by 2 to save fuel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
