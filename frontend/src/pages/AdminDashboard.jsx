import React, { useState } from 'react';
import { FiUsers, FiActivity, FiTruck, FiDollarSign, FiAlertTriangle, FiMapPin, FiTrendingUp, FiTrendingDown, FiArrowUp, FiArrowDown, FiTarget, FiZap, FiChevronDown, FiCalendar, FiCpu } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const AdminDashboard = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');
  
  const cities = ['Delhi', 'Mumbai', 'Bengaluru', 'Pune', 'Hyderabad', 'Lucknow', 'Nashik'];

  const overviewStats = [
    { title: 'Total Commuters', value: '45,230', change: '+12%', isPositive: true, icon: FiUsers },
    { title: 'Active Journeys', value: '3,847', change: '+8%', isPositive: true, icon: FiActivity },
    { title: 'Buses Tracked', value: '892', change: '+3%', isPositive: true, icon: FiTruck },
    { title: 'Total Transactions', value: '₹12.4L', change: '+15%', isPositive: true, icon: FiDollarSign },
    { title: 'Avg Crowd Level', value: 'Moderate 🟡', change: '-', isPositive: null, icon: FiUsers },
    { title: 'Incidents Today', value: '7', change: '-2', isPositive: true, icon: FiAlertTriangle },
  ];

  const deployMore = [
    { route: 'Route 423 (Rajiv Chowk → Nehru Place)', currentBuses: 8, demand: 'Very High', avgOccupancy: 92, peakTime: '8:00-10:00 AM', recommendation: 'Deploy 3 additional buses', impact: 'Reduce avg crowd from 92% to 65%', priority: 'Critical', reason: 'Consistently >90% occupancy during morning peak. 340+ passengers waiting >10 min at Rajiv Chowk.' },
    { route: 'Route 764 (Vasant Kunj → Old Delhi)', currentBuses: 6, demand: 'High', avgOccupancy: 88, peakTime: '8:30-9:30 AM', recommendation: 'Deploy 2 additional buses', impact: 'Reduce avg crowd from 88% to 62%', priority: 'High', reason: 'Increasing daily ridership (+18% this month). Overcrowding complaints up 45%.' },
    { route: 'Route 721 (Lajpat Nagar → CP)', currentBuses: 5, demand: 'High', avgOccupancy: 85, peakTime: '5:00-7:00 PM', recommendation: 'Deploy 2 additional buses during evening peak', impact: 'Reduce avg crowd from 85% to 58%', priority: 'High', reason: 'Evening rush creates 15+ min wait times. Route serves 3 metro stations.' },
    { route: 'Route 429 (IIT Delhi → Chandni Chowk)', currentBuses: 7, demand: 'Moderate-High', avgOccupancy: 78, peakTime: '7:30-9:00 AM', recommendation: 'Deploy 1 additional bus', impact: 'Reduce avg crowd from 78% to 65%', priority: 'Medium', reason: 'College student commuter route. High demand Mon-Fri, low on weekends.' },
  ];

  const reduceRoutes = [
    { route: 'Route 112 (Narela → ISBT)', currentBuses: 10, demand: 'Low', avgOccupancy: 22, peakTime: '9:00 AM', recommendation: 'Reduce by 4 buses (keep 6)', saving: '₹48,000/day operational savings', reason: 'Ridership dropped 35% after Metro Green Line extension. Most buses running at <25% capacity.' },
    { route: 'Route 347 (Mundka → ISBT)', currentBuses: 8, demand: 'Low', avgOccupancy: 30, peakTime: '8:30 AM', recommendation: 'Reduce by 2 buses (keep 6)', saving: '₹24,000/day operational savings', reason: 'Parallel metro route available. Off-peak buses averaging 15% occupancy.' },
    { route: 'Route 990 (Saket → AIIMS)', currentBuses: 6, demand: 'Very Low', avgOccupancy: 18, peakTime: '10:00 AM', recommendation: 'Reduce by 3 buses (keep 3)', saving: '₹36,000/day operational savings', reason: 'Short route (4 km) with metro alternative. Consider e-bus feeder service instead.' },
  ];

  const routePerformanceData = [
    { name: 'R-423', passengers: 8500, occupancy: 92 },
    { name: 'R-764', passengers: 7200, occupancy: 88 },
    { name: 'R-721', passengers: 6800, occupancy: 85 },
    { name: 'R-429', passengers: 6100, occupancy: 78 },
    { name: 'R-800', passengers: 5900, occupancy: 75 },
    { name: 'R-340', passengers: 5500, occupancy: 72 },
    { name: 'R-112', passengers: 2100, occupancy: 22 },
    { name: 'R-347', passengers: 1800, occupancy: 30 },
    { name: 'R-990', passengers: 1200, occupancy: 18 },
  ];

  const hourlyDemandData = [
    { time: '6 AM', demand: 20 },
    { time: '8 AM', demand: 95 },
    { time: '10 AM', demand: 85 },
    { time: '12 PM', demand: 40 },
    { time: '2 PM', demand: 35 },
    { time: '4 PM', demand: 60 },
    { time: '6 PM', demand: 98 },
    { time: '8 PM', demand: 75 },
    { time: '10 PM', demand: 25 },
  ];

  const heatmapAreas = [
    { name: 'Connaught Place', level: 'red' },
    { name: 'Karol Bagh', level: 'amber' },
    { name: 'Dwarka', level: 'green' },
    { name: 'Rohini', level: 'amber' },
    { name: 'Noida', level: 'red' },
    { name: 'Saket', level: 'green' },
    { name: 'Lajpat Nagar', level: 'amber' },
    { name: 'Old Delhi', level: 'red' },
    { name: 'Nehru Place', level: 'amber' },
    { name: 'Vasant Kunj', level: 'green' },
  ];

  const incidents = [
    { type: 'Breakdown', location: 'Ring Road near Ashram', severity: 'High', status: 'Resolving', time: '10:15 AM' },
    { type: 'Overcrowding', location: 'Rajiv Chowk Stn', severity: 'Medium', status: 'Pending', time: '09:45 AM' },
    { type: 'Delay', location: 'Dhaula Kuan', severity: 'Low', status: 'Resolved', time: '08:30 AM' },
    { type: 'Accident', location: 'ISBT Kashmiri Gate', severity: 'High', status: 'Investigating', time: '07:20 AM' },
    { type: 'Route Deviation', location: 'Peeragarhi', severity: 'Low', status: 'Resolved', time: '06:50 AM' },
  ];

  const fleetUtilData = [
    { name: 'Running', value: 65, color: '#0EA5E9' },
    { name: 'Idle', value: 20, color: '#E0F2FE' },
    { name: 'Maintenance', value: 10, color: '#F59E0B' },
    { name: 'Delayed', value: 5, color: '#EF4444' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Medium': return 'bg-sky-100 text-sky-700 border-sky-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getOccupancyBarColor = (occupancy) => {
    if (occupancy > 80) return 'bg-red-500';
    if (occupancy > 60) return 'bg-amber-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section 1: Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              Admin Dashboard
              <span className="text-sm font-medium bg-sky-100 text-sky-700 px-3 py-1 rounded-full flex items-center gap-1">
                <FiMapPin /> {selectedCity}
              </span>
            </h1>
            <p className="text-slate-500 flex items-center gap-2 mt-1">
              <FiCalendar className="text-slate-400" />
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="relative w-full md:w-64">
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent font-medium"
            >
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </header>

        {/* Section 2: Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {overviewStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-sky-50 text-sky-500 p-3 rounded-xl">
                  <stat.icon className="w-5 h-5" />
                </div>
                {stat.change !== '-' && (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg flex items-center gap-1 ${stat.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {stat.isPositive ? <FiArrowUp className="w-3 h-3" /> : <FiArrowDown className="w-3 h-3" />}
                    {stat.change}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: AI Bus Deployment Optimizer */}
        <section className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
          <div className="bg-sky-50/50 p-6 border-b border-sky-100 flex items-start gap-4">
            <div className="bg-sky-500 text-white p-3 rounded-xl shadow-inner mt-1">
              <FiCpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">🧠 AI Bus Deployment Recommendations</h2>
              <p className="text-slate-500 mt-1">Based on real-time demand analysis, crowd patterns, and route performance</p>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* 3c: Deployment Summary */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Deploy</p>
                <p className="text-lg font-bold text-slate-900">+8 Buses</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Reduce</p>
                <p className="text-lg font-bold text-slate-900">-9 Buses</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Net Opt.</p>
                <p className="text-lg font-bold text-sky-600">Free 1 Bus</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold">Daily Savings</p>
                <p className="text-lg font-bold text-green-600">₹1,08,000</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">Expected Impact</p>
                <p className="text-sm font-medium text-slate-700 leading-tight mt-1">Reduce avg overcrowding by 28% on high-demand routes</p>
              </div>
            </div>

            {/* 3a: Deploy More */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-sky-500" /> Routes Needing MORE Buses
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {deployMore.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors bg-white">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-slate-900">{item.route}</h4>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-slate-500">Current Buses: <span className="font-semibold text-slate-900">{item.currentBuses}</span></p>
                        <p className="text-slate-500 mt-1">Peak: <span className="font-semibold text-slate-900">{item.peakTime}</span></p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 flex justify-between">
                          Occupancy: <span className="font-semibold text-slate-900">{item.avgOccupancy}%</span>
                        </p>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className={`h-2 rounded-full ${getOccupancyBarColor(item.avgOccupancy)}`} style={{ width: `${item.avgOccupancy}%` }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sky-50 rounded-lg p-3 mb-4">
                      <p className="font-bold text-sky-800 text-sm mb-1">{item.recommendation}</p>
                      <p className="text-green-700 text-xs font-medium">{item.impact}</p>
                    </div>

                    <p className="text-xs text-slate-500 mb-4 line-clamp-2" title={item.reason}>{item.reason}</p>
                    
                    <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg text-sm transition-colors shadow-sm">
                      Deploy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3b: Reduce Buses */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FiTrendingDown className="text-green-500" /> Routes Where Buses Can Be REDUCED
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {reduceRoutes.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-colors bg-white">
                    <h4 className="font-bold text-slate-900 mb-3 line-clamp-1" title={item.route}>{item.route}</h4>
                    
                    <div className="mb-4 text-sm">
                      <p className="text-slate-500 flex justify-between mb-1">
                        Occupancy ({item.avgOccupancy}%): <span className="font-semibold text-slate-900">{item.currentBuses} buses</span>
                      </p>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: `${item.avgOccupancy}%` }}></div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-100">
                      <p className="font-bold text-slate-800 text-sm mb-1">{item.recommendation}</p>
                      <p className="text-green-600 text-xs font-medium">{item.saving}</p>
                    </div>

                    <p className="text-xs text-slate-500 mb-4 line-clamp-2" title={item.reason}>{item.reason}</p>
                    
                    <button className="w-full bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-medium py-1.5 rounded-lg text-sm transition-colors">
                      Reallocate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Charts & Map Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Section 4: Route Performance */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Top Routes Performance</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={routePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <Tooltip cursor={{ fill: '#F1F5F9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="passengers" name="Passengers" fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar yAxisId="right" dataKey="occupancy" name="Avg Occupancy (%)" fill="#BAE6FD" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Section 5: Hourly Demand */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Hourly Demand Pattern (24h)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyDemandData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="demand" name="Demand Level" stroke="#0EA5E9" strokeWidth={3} dot={{ r: 4, fill: '#0EA5E9', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 6: Crowd Heatmap */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">City Crowd Heatmap</h3>
            <div className="grid grid-cols-2 gap-3">
              {heatmapAreas.map((area, idx) => {
                let bgClass = 'bg-green-100 text-green-800 border-green-200';
                let dotClass = 'bg-green-500';
                if (area.level === 'amber') {
                  bgClass = 'bg-amber-100 text-amber-800 border-amber-200';
                  dotClass = 'bg-amber-500';
                } else if (area.level === 'red') {
                  bgClass = 'bg-red-100 text-red-800 border-red-200';
                  dotClass = 'bg-red-500';
                }
                
                return (
                  <div key={idx} className={`p-3 rounded-xl border flex items-center gap-2 ${bgClass}`}>
                    <div className={`w-2 h-2 rounded-full ${dotClass} animate-pulse`}></div>
                    <span className="text-sm font-medium truncate">{area.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 7: Recent Incidents */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">Live Incidents & Alerts</h3>
              <button className="text-sky-500 text-sm font-medium hover:text-sky-600">View All</button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-100">
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Location</th>
                  <th className="pb-3 font-medium">Severity</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {incidents.map((incident, idx) => (
                  <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 font-medium text-slate-900">{incident.type}</td>
                    <td className="py-3 text-slate-600">{incident.location}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        incident.severity === 'High' ? 'bg-red-100 text-red-700' :
                        incident.severity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {incident.severity}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        incident.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                        'bg-sky-100 text-sky-700'
                      }`}>
                        {incident.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-500">{incident.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 8: Fleet Utilization */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Fleet Utilization</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-64 md:h-80">
            <div className="w-full md:w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fleetUtilData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {fleetUtilData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {fleetUtilData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="font-medium text-slate-700">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
