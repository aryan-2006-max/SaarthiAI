import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiClock, FiDollarSign, FiUsers, FiAlertTriangle, 
  FiZap, FiCloud, FiStar, FiChevronRight, FiShield, FiActivity, 
  FiCreditCard, FiMessageCircle, FiFlag, FiHeart, FiMap, 
  FiCompass, FiNavigation, FiTarget, FiTrendingUp, FiDroplet,
  FiAward
} from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const userName = user?.name || 'Aryan';

  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const features = [
    { icon: <FiMap />, label: 'Plan Journey', path: '/plan', color: 'text-sky-500' },
    { icon: <FiCompass />, label: 'Live Journey', path: '/journey', color: 'text-sky-500' },
    { icon: <FiNavigation />, label: 'Live Buses', path: '/live-buses', color: 'text-emerald-500' },
    { icon: <FiUsers />, label: 'Crowd Info', path: '/crowd/1', color: 'text-amber-500' },
    { icon: <FiCreditCard />, label: 'Saarthi Card', path: '/card', color: 'text-sky-600' },
    { icon: <FiDollarSign />, label: 'Wallet', path: '/wallet', color: 'text-green-500' },
    { icon: <FiMessageCircle />, label: 'AI Assistant', path: '/assistant', color: 'text-purple-500' },
    { icon: <FiShield />, label: 'Safety', path: '/safety', color: 'text-red-500' },
    { icon: <FiHeart />, label: 'Green Score', path: '/green-score', color: 'text-emerald-500' },
    { icon: <FiFlag />, label: 'Reports', path: '/reports', color: 'text-orange-500' },
    { icon: <FiTarget />, label: 'Accessibility', path: '/accessibility', color: 'text-indigo-500' },
    { icon: <FiActivity />, label: 'Transactions', path: '/transactions', color: 'text-sky-500' },
  ];

  return (
    <div className="pb-24 pt-4 px-4 space-y-6 max-w-7xl mx-auto min-h-screen">
      
      {/* 1. Header with greeting */}
      <div className="flex flex-col mb-2">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          {greeting}, {userName} 👋
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Plan smarter → Travel easier
        </p>
      </div>

      {/* 2. Weather + Conditions Alert Banner */}
      <div className="bg-sky-50 rounded-xl p-3 flex items-center shadow-sm border border-sky-100">
        <span className="text-amber-500 text-xl mr-3 flex-shrink-0 leading-none">🌧️</span>
        <span className="text-sm font-semibold text-slate-900 truncate">
          Rain expected · 🔴 Heavy Traffic · 🟡 Moderate Crowd
        </span>
      </div>

      {/* 3. Daily Route AI Briefing Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
        <div className="p-4 border-b border-sky-50 flex justify-between items-start bg-sky-50/50">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center">
              🗺️ Your Daily Route
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              Home → Office · Today's Prediction
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-red-500 bg-red-50">
            <span className="text-red-600 font-bold text-sm leading-none">58</span>
            <span className="text-[9px] text-red-500 font-bold leading-none mt-0.5">/100</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Normal Time</span>
              <span className="font-semibold text-slate-900">42 min</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Predicted</span>
              <span className="font-bold text-red-600 flex items-center">61 min <span className="text-[10px] ml-1 bg-red-100 px-1 rounded text-red-700">+19m</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Traffic</span>
              <span className="font-semibold text-red-600">🔴 Heavy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Crowd</span>
              <span className="font-semibold text-red-600">🔴 High</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Weather</span>
              <span className="font-semibold text-sky-700">🌧️ Rain</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">Safety</span>
              <span className="font-semibold text-emerald-600">🟢 Good</span>
            </div>
          </div>
          
          <div className="bg-red-50 text-red-800 text-xs p-3 rounded-lg border border-red-100 flex items-start">
            <FiAlertTriangle className="text-red-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="font-medium">⚠️ Your normal route is predicted to be 19 minutes slower today.</span>
          </div>
        </div>
      </div>

      {/* 4. AI Recommendation Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-sky-100 border-l-4 border-l-sky-500 overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold text-sky-700 flex items-center mb-2">
            <FiStar className="mr-2 fill-sky-500 text-sky-500" /> AI Recommendation
          </h2>
          <p className="text-sm italic text-slate-600 font-medium mb-4 bg-sky-50 p-3 rounded-lg border border-sky-100">
            "Take Route B. Bus 42 is predicted at 90% occupancy. Bus 127 on Route B is at 55%."
          </p>
          
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                <tr>
                  <th className="px-3 py-2 font-medium">Metric</th>
                  <th className="px-3 py-2 font-medium border-l border-slate-200">Normal Route</th>
                  <th className="px-3 py-2 font-bold text-sky-600 bg-sky-50 border-l border-sky-100">Route B ⭐</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-3 py-2 font-medium text-slate-500">Route</td>
                  <td className="px-3 py-2 text-slate-900 border-l border-slate-200 text-xs">E-rickshaw → Bus 42 → Metro → Walk</td>
                  <td className="px-3 py-2 text-sky-900 bg-sky-50/50 border-l border-sky-100 font-medium text-xs">E-rickshaw → Bus 127 → Metro → Walk</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-slate-500">Time</td>
                  <td className="px-3 py-2 text-red-600 border-l border-slate-200 font-bold">61 min</td>
                  <td className="px-3 py-2 text-emerald-600 bg-sky-50/50 border-l border-sky-100 font-bold">46 min</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-slate-500">Cost</td>
                  <td className="px-3 py-2 text-emerald-600 border-l border-slate-200">₹35</td>
                  <td className="px-3 py-2 text-amber-600 bg-sky-50/50 border-l border-sky-100">₹42</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-slate-500">Crowd</td>
                  <td className="px-3 py-2 text-red-600 border-l border-slate-200">🔴 High</td>
                  <td className="px-3 py-2 text-amber-600 bg-sky-50/50 border-l border-sky-100">🟡 Moderate</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-slate-500">Score</td>
                  <td className="px-3 py-2 text-red-600 border-l border-slate-200 font-bold">58</td>
                  <td className="px-3 py-2 text-emerald-600 bg-sky-50/50 border-l border-sky-100 font-bold">88</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="text-xs text-slate-600 space-y-1.5 mb-4 pl-1">
            <li className="flex items-center"><span className="text-sky-500 mr-2">•</span> Avoids heavy traffic zone near Metro Pillar 42</li>
            <li className="flex items-center"><span className="text-sky-500 mr-2">•</span> Bus 127 currently has available seating</li>
            <li className="flex items-center"><span className="text-sky-500 mr-2">•</span> Saves you 15 minutes of travel time</li>
          </ul>

          <button onClick={() => navigate('/plan')} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center">
            Start Recommended Journey <FiChevronRight className="ml-1 text-lg" />
          </button>
        </div>
      </div>

      {/* 5. All Features Grid */}
      <div className="pt-2">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
          ✨ Explore Features
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {features.map((f, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(f.path)}
              className="flex flex-col items-center justify-center p-3 bg-sky-50 rounded-xl cursor-pointer hover:bg-sky-100 border border-sky-100/50 transition shadow-sm aspect-square"
            >
              <div className={`text-2xl mb-1.5 ${f.color}`}>{f.icon}</div>
              <span className="text-[10px] text-center font-bold text-slate-700 leading-tight">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Live Bus Status Strip */}
      <div className="pt-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-900">Live Bus Status</h3>
          <button onClick={() => navigate('/live-buses')} className="text-xs font-bold text-sky-500 flex items-center">
            View All <FiChevronRight className="ml-0.5" />
          </button>
        </div>
        <div className="flex overflow-x-auto gap-3 pb-2 snap-x hide-scrollbar -mx-4 px-4">
          {[
            { id: 'DTC-423', status: '🔴', occupancy: '78%', route: 'Rajiv Chowk → Nehru Place' },
            { id: 'DTC-522', status: '🟡', occupancy: '45%', route: 'ISBT → Mehrauli' },
            { id: 'CL-721', status: '🔴', occupancy: '88%', route: 'Lajpat Nagar → CP' },
            { id: 'DTC-604', status: '🟢', occupancy: '32%', route: 'Anand Vihar → Dwarka' },
            { id: 'CL-990', status: '🟢', occupancy: '25%', route: 'Saket → AIIMS' },
          ].map((bus, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-52 bg-white rounded-xl p-3 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-900">{bus.id}</span>
                <span className="text-xs font-bold bg-slate-50 px-2 py-0.5 rounded-full">{bus.status} {bus.occupancy}</span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 truncate">{bus.route}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Saarthi Card Quick View */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <FiCreditCard className="text-6xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-sm font-semibold opacity-90 mb-1">Saarthi Card</h3>
          <p className="text-lg font-mono tracking-widest mb-4">•••• 2847</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-80 mb-0.5">Available Balance</p>
              <p className="text-2xl font-bold">₹850</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80 mb-0.5">Today's Spend</p>
              <p className="text-sm font-semibold">₹55</p>
            </div>
          </div>
          <button onClick={() => navigate('/card')} className="w-full mt-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-sm font-bold transition">
            View Card Dashboard
          </button>
        </div>
      </div>

      {/* 8. Active Alerts Section */}
      <div className="pt-2">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
          <FiAlertTriangle className="mr-2 text-amber-500" /> Active Alerts
        </h3>
        <div className="space-y-2">
          <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-start">
            <span className="text-lg mr-2 leading-none">🔴</span>
            <span className="text-sm font-medium text-slate-800">Heavy traffic on Ring Road (8:00-10:00 AM)</span>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-start">
            <span className="text-lg mr-2 leading-none">🟡</span>
            <span className="text-sm font-medium text-slate-800">Metro Blue Line: Minor delays</span>
          </div>
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 flex items-start">
            <span className="text-lg mr-2 leading-none">🌧️</span>
            <span className="text-sm font-medium text-slate-800">Heavy rain warning for Delhi NCR</span>
          </div>
        </div>
      </div>

      {/* 9. Recent Activity Timeline */}
      <div className="pt-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
          <button onClick={() => navigate('/transactions')} className="text-xs font-bold text-sky-500">
            View All
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                🚇
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between w-full mb-1">
                  <span className="font-bold text-slate-900 text-sm">Metro ride</span>
                  <span className="font-bold text-red-500 text-sm">-₹30</span>
                </div>
                <span className="text-xs font-medium text-slate-500">Today 09:30 AM</span>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                🚌
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between w-full mb-1">
                  <span className="font-bold text-slate-900 text-sm">Bus 423</span>
                  <span className="font-bold text-red-500 text-sm">-₹15</span>
                </div>
                <span className="text-xs font-medium text-slate-500">Yesterday 06:15 PM</span>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                🛺
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between w-full mb-1">
                  <span className="font-bold text-slate-900 text-sm">E-rickshaw</span>
                  <span className="font-bold text-red-500 text-sm">-₹20</span>
                </div>
                <span className="text-xs font-medium text-slate-500">Yesterday 08:00 AM</span>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sky-100 text-sky-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                📋
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-start p-3 rounded-xl bg-sky-50 border border-sky-100">
                <div className="flex justify-between w-full mb-1">
                  <span className="font-bold text-sky-900 text-sm">Reported pothole</span>
                </div>
                <span className="text-xs font-medium text-sky-600">Yesterday 07:45 AM</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 10. Green Score & Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex flex-col items-center justify-center text-center cursor-pointer" onClick={() => navigate('/green-score')}>
          <span className="text-xl mb-1">🌱</span>
          <span className="text-[10px] text-emerald-700 font-semibold mb-0.5">Green Score</span>
          <span className="font-bold text-emerald-900">82/100</span>
        </div>
        <div className="bg-sky-50 rounded-xl p-3 border border-sky-100 flex flex-col items-center justify-center text-center">
          <span className="text-xl mb-1">🚇</span>
          <span className="text-[10px] text-sky-700 font-semibold mb-0.5">Month Trips</span>
          <span className="font-bold text-sky-900">47</span>
        </div>
        <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 flex flex-col items-center justify-center text-center">
          <span className="text-xl mb-1">💰</span>
          <span className="text-[10px] text-amber-700 font-semibold mb-0.5">Saved</span>
          <span className="font-bold text-amber-900">₹170</span>
        </div>
      </div>

      {/* 11. AI Insight of the Day */}
      <div className="bg-sky-50 rounded-xl p-4 border border-sky-100 shadow-sm flex items-start">
        <div className="bg-white p-2 rounded-full shadow-sm mr-3 flex-shrink-0">
          <span className="text-xl leading-none">🧠</span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-sky-900 mb-1">AI Insight</h4>
          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            Based on your travel pattern, switching to Bus 127 on Tuesdays and Thursdays would save you <span className="font-bold text-emerald-600">₹35/week</span> and <span className="font-bold text-sky-600">25 minutes</span> of commute time.
          </p>
        </div>
      </div>

    </div>
  );
}
