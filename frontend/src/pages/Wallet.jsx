import React, { useState } from 'react';
import { FiPlus, FiTrendingUp, FiDollarSign, FiCreditCard, FiArrowUpRight, FiArrowDownLeft, FiX, FiCheck } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, CartesianGrid } from 'recharts';

const Wallet = () => {
  const [balance, setBalance] = useState(850);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const dailyData = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 62 },
    { day: 'Wed', amount: 38 },
    { day: 'Thu', amount: 55 },
    { day: 'Fri', amount: 48 },
    { day: 'Sat', amount: 25 },
    { day: 'Sun', amount: 0 },
  ];

  const pieData = [
    { name: 'Bus', value: 35, color: '#0EA5E9' },
    { name: 'Metro', value: 40, color: '#0284C7' },
    { name: 'Auto', value: 15, color: '#0369A1' },
    { name: 'E-rickshaw', value: 10, color: '#7DD3FC' },
  ];

  const weeklyData = [
    { week: 'W1', amount: 280 },
    { week: 'W2', amount: 310 },
    { week: 'W3', amount: 295 },
    { week: 'W4', amount: 320 },
  ];

  const handleAddMoney = () => {
    if (!addAmount) return;
    const amt = parseInt(addAmount.replace('₹', ''));
    if (isNaN(amt)) return;
    
    setBalance(prev => prev + amt);
    setShowAddMoney(false);
    setAddAmount('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="p-4 space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Wallet & Analytics</h1>
          <p className="text-sm text-slate-500">Track your transport spending</p>
        </header>

        {showSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center space-x-2 animate-fade-in-out">
            <FiCheck className="text-green-500 text-lg" />
            <span className="text-sm font-medium">Money added successfully!</span>
          </div>
        )}

        {/* Balance Card */}
        <div className="bg-sky-500 text-white rounded-2xl p-6 shadow-lg shadow-sky-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <p className="text-sky-100 font-medium text-sm mb-1 relative z-10">Available Balance</p>
          <h2 className="text-4xl font-bold relative z-10">₹{balance}</h2>
          <p className="text-xs text-sky-200 mt-2 relative z-10 flex items-center"><FiCreditCard className="mr-1" /> Saarthi Card ending in 2847</p>
        </div>

        {/* Add Money Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4 text-sm">Quick Add Money</h3>
          <div className="flex space-x-3 mb-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
              <input 
                type="number"
                value={addAmount.replace('₹', '')}
                onChange={(e) => setAddAmount('₹' + e.target.value)}
                placeholder="Amount"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-8 pr-3 font-semibold text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              />
            </div>
            <button 
              onClick={handleAddMoney}
              disabled={!addAmount || addAmount === '₹'}
              className="bg-sky-500 disabled:bg-slate-200 disabled:text-slate-400 text-white px-5 rounded-xl font-semibold shadow-sm hover:bg-sky-600 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['100', '200', '500', '1000'].map(amt => (
              <button 
                key={amt}
                onClick={() => setAddAmount('₹' + amt)}
                className="bg-sky-50 text-sky-700 py-2 rounded-lg font-medium border border-sky-100 hover:bg-sky-100 text-xs transition-colors"
              >
                +₹{amt}
              </button>
            ))}
          </div>
        </div>

        {/* Spending Summary */}
        <div>
          <h3 className="font-bold text-slate-900 mb-3 px-1">Spending Summary</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center relative group">
              <p className="text-xs text-slate-500 mb-1">Today</p>
              <p className="font-bold text-slate-900 text-lg">₹55</p>
              <div className="absolute inset-0 bg-slate-900/90 text-white text-[10px] p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                <span>E-rick: ₹15</span>
                <span>Bus: ₹10</span>
                <span>Metro: ₹30</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
              <p className="text-xs text-slate-500 mb-1">This Week</p>
              <p className="font-bold text-slate-900 text-lg">₹320</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
              <p className="text-xs text-slate-500 mb-1">This Month</p>
              <p className="font-bold text-sky-600 text-lg">₹820</p>
            </div>
          </div>
        </div>

        {/* AI Fare Insight Card */}
        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 shadow-sm">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xl">💡</span>
            <h3 className="font-bold text-sky-800">Smart Savings Insight</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-slate-700 bg-white p-3 rounded-xl border border-sky-50 shadow-sm">You spent <span className="font-bold text-slate-900">₹820</span> on public transport this month.</p>
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-4 rounded-xl text-white shadow-md">
              <p className="text-sm font-medium mb-1">Based on your travel pattern, a monthly metro pass (₹650) could save approximately <span className="font-bold text-green-300 text-lg">₹170</span>.</p>
              <button className="mt-2 bg-white text-sky-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors">
                View Pass Options
              </button>
            </div>
            <p className="text-xs text-slate-600 flex items-start mt-2">
              <FiTrendingUp className="text-green-500 mr-2 mt-0.5 shrink-0" />
              <span>Route B saves ₹17 compared to auto (₹42 vs ₹59) with only 6 additional minutes.</span>
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="space-y-6">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Daily Spending (Last 7 Days)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} tickFormatter={(val) => `₹${val}`} />
                  <Tooltip 
                    cursor={{ fill: '#F1F5F9' }} 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`₹${value}`, 'Spent']}
                  />
                  <Bar dataKey="amount" fill="#38BDF8" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Transport Breakdown</h3>
            <div className="flex items-center justify-between">
              <div className="h-40 w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 pl-4 space-y-2">
                {pieData.map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-600 flex-1">{item.name}</span>
                    <span className="font-bold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Weekly Trend</h3>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} tickFormatter={(val) => `₹${val}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`₹${value}`, 'Spent']}
                  />
                  <Line type="monotone" dataKey="amount" stroke="#0EA5E9" strokeWidth={3} dot={{ r: 4, fill: '#0EA5E9', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wallet;
