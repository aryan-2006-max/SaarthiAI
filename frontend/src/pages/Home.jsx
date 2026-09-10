import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiClock, FiDollarSign, FiUsers, FiAlertTriangle, FiZap, FiCloud, FiDroplet, FiStar, FiChevronRight, FiShield, FiActivity, FiCreditCard, FiMessageCircle, FiFlag, FiHeart } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="p-4 space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900">{greeting}, Aryan 👋</h1>
          <p className="text-slate-500 text-sm mt-1">Ready for your commute?</p>
        </header>

        {/* Weather Alert Banner */}
        <div className="bg-sky-50 rounded-xl p-3 flex items-center space-x-3 border border-sky-100">
          <div className="bg-amber-100 p-2 rounded-full">
            <FiCloud className="text-amber-500 w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-slate-700">🌧️ Rain expected today. Plan accordingly.</p>
        </div>

        {/* Daily Commute Briefing Card */}
        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Your College Commute</h2>
          <p className="text-sm text-slate-500 mb-4">Home → IIT Delhi</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-slate-500">Normal Time</p>
              <p className="font-semibold text-slate-900">42 min</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Today's Prediction</p>
              <p className="font-bold text-red-500">61 min <span className="text-xs font-normal">(+19 min)</span></p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium flex items-center"><span className="mr-1">🔴</span> Traffic: Heavy</span>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium flex items-center"><span className="mr-1">🔴</span> Crowd: High</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium flex items-center"><span className="mr-1">🌧️</span> Weather: Rain</span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium flex items-center"><span className="mr-1">🟢</span> Safety: Good</span>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start space-x-2 mb-4">
            <FiAlertTriangle className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800">⚠️ Your normal route is predicted to be 19 minutes slower today due to rain and high traffic.</p>
          </div>
          
          <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-sky-100">
            <span className="text-sm font-medium text-slate-700">Commute Score</span>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">58/100</span>
              <div className="w-8 h-8 rounded-full border-4 border-red-500 border-t-red-200 flex items-center justify-center">
                <span className="text-[10px] font-bold text-red-500">58</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendation Card */}
        <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-l-sky-500 border-y border-r border-slate-100">
          <div className="flex items-center space-x-2 mb-3">
            <FiStar className="text-sky-500 fill-sky-500" />
            <h2 className="text-lg font-bold text-sky-700">AI Recommendation</h2>
          </div>
          <p className="text-sm text-slate-700 italic mb-4">"Take Route B today. Your usual bus is predicted to reach 90% occupancy between 8:30-9:00 AM. Route B uses Bus 127 which is predicted at 55% occupancy."</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 px-1 text-slate-500 font-medium"></th>
                  <th className="py-2 px-1 text-slate-500 font-medium">Normal Route</th>
                  <th className="py-2 px-1 text-sky-600 font-bold">Route B (Recommended)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-1 text-slate-500 font-medium">Route</td>
                  <td className="py-2 px-1">E-rickshaw → Bus 42 → Metro → Walk</td>
                  <td className="py-2 px-1 font-medium text-slate-800">E-rickshaw → Bus 127 → Metro → Walk</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-1 text-slate-500 font-medium">Time</td>
                  <td className="py-2 px-1 text-red-500">61 min (predicted)</td>
                  <td className="py-2 px-1 text-green-600 font-bold">46 min</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-1 text-slate-500 font-medium">Cost</td>
                  <td className="py-2 px-1">₹35</td>
                  <td className="py-2 px-1">₹42</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-1 text-slate-500 font-medium">Crowd</td>
                  <td className="py-2 px-1">🔴 High</td>
                  <td className="py-2 px-1 text-amber-500">🟡 Moderate</td>
                </tr>
                <tr>
                  <td className="py-2 px-1 text-slate-500 font-medium">Score</td>
                  <td className="py-2 px-1 text-red-500">58/100</td>
                  <td className="py-2 px-1 text-green-600 font-bold">88/100</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-sky-50 p-3 rounded-xl mb-4">
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start"><span className="text-sky-500 mr-2">•</span> 15 minutes faster than predicted normal route</li>
              <li className="flex items-start"><span className="text-sky-500 mr-2">•</span> 35% less crowded (55% vs 90% occupancy)</li>
              <li className="flex items-start"><span className="text-sky-500 mr-2">•</span> ₹7 additional cost for significantly better comfort</li>
              <li className="flex items-start"><span className="text-sky-500 mr-2">•</span> Better safety score due to lower crowding</li>
              <li className="flex items-start"><span className="text-sky-500 mr-2">•</span> Lower disruption risk on Route B</li>
            </ul>
          </div>
          
          <button 
            onClick={() => navigate('/journey')}
            className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold shadow-md shadow-sky-200 hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Start Recommended Journey</span>
            <FiChevronRight />
          </button>
        </div>

        {/* Quick Actions Row */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: <FiMapPin />, label: 'Plan', path: '/plan' },
              { icon: <FiUsers />, label: 'Crowd', path: '/crowd/1' },
              { icon: <FiCreditCard />, label: 'Card', path: '/card' },
              { icon: <FiActivity />, label: 'Live Buses', path: '/live-buses' },
              { icon: <FiShield />, label: 'Safety', path: '/safety' },
              { icon: <FiMessageCircle />, label: 'AI', path: '/assistant' },
            ].map((action, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-1 cursor-pointer" onClick={() => navigate(action.path)}>
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 text-xl border border-sky-100 hover:bg-sky-100 transition-colors">
                  {action.icon}
                </div>
                <span className="text-[10px] font-medium text-slate-600">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Alerts Section */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Active Alerts</h3>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded-xl flex items-start space-x-3 border border-red-100">
              <span className="text-lg">🔴</span>
              <p className="text-xs font-medium text-slate-800 mt-0.5">Heavy traffic on Ring Road (8:00-10:00 AM)</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-xl flex items-start space-x-3 border border-amber-100">
              <span className="text-lg">🟡</span>
              <p className="text-xs font-medium text-slate-800 mt-0.5">Metro Blue Line: Minor delays expected</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-xl flex items-start space-x-3 border border-amber-100">
              <span className="text-lg">🌧️</span>
              <p className="text-xs font-medium text-slate-800 mt-0.5">Heavy rain warning for Delhi NCR</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-900">Recent Transactions</h3>
            <span onClick={() => navigate('/wallet')} className="text-xs text-sky-600 font-medium cursor-pointer hover:underline">View All</span>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Metro (Blue Line)', amount: '₹30', time: 'Today', icon: <FiActivity /> },
              { title: 'DTC Bus 423', amount: '₹15', time: 'Yesterday', icon: <FiFlag /> },
              { title: 'E-rickshaw', amount: '₹20', time: 'Yesterday', icon: <FiZap /> },
            ].map((tx, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-500">
                    {tx.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{tx.title}</p>
                    <p className="text-xs text-slate-500">{tx.time}</p>
                  </div>
                </div>
                <span className="font-bold text-slate-900">{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Green Score Mini Card */}
        <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg">
              🌱
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Green Score 82/100</p>
              <p className="text-xs text-slate-600">18 kg CO₂ saved this month</p>
            </div>
          </div>
          <FiChevronRight className="text-slate-400" />
        </div>

      </div>
    </div>
  );
};

export default Home;
