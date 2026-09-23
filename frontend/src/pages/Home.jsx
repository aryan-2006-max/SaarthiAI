import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiClock, FiDollarSign, FiUsers, FiAlertTriangle, 
  FiZap, FiCloud, FiStar, FiChevronRight, FiShield, FiActivity, 
  FiCreditCard, FiMessageCircle, FiFlag, FiHeart, FiMap, 
  FiCompass, FiNavigation, FiTarget, FiTrendingUp, FiDroplet,
  FiAward, FiTruck, FiArrowRight
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
    { icon: <FiZap />, label: '1-Click Commute', path: '/daily-commute-booking', color: 'text-amber-500' },
    { icon: <FiNavigation />, label: 'Intercity Delhi-JAI', path: '/intercity-booking', color: 'text-sky-500' },
    { icon: <FiTruck />, label: 'Driver Portal', path: '/driver-portal', color: 'text-emerald-500' },
    { icon: <FiMap />, label: 'Plan Journey', path: '/plan', color: 'text-sky-500' },
    { icon: <FiCompass />, label: 'Live Journey', path: '/journey', color: 'text-sky-500' },
    { icon: <FiNavigation />, label: 'Live Buses', path: '/live-buses', color: 'text-emerald-500' },
    { icon: <FiUsers />, label: 'Crowd Info', path: '/crowd/1', color: 'text-amber-500' },
    { icon: <FiCreditCard />, label: 'Saarthi Card', path: '/card', color: 'text-sky-600' },
    { icon: <FiDollarSign />, label: 'Wallet', path: '/wallet', color: 'text-green-500' },
    { icon: <FiMessageCircle />, label: 'AI Assistant', path: '/assistant', color: 'text-purple-500' },
    { icon: <FiShield />, label: 'Safety', path: '/safety', color: 'text-red-500' },
    { icon: <FiHeart />, label: 'Green Score', path: '/green-score', color: 'text-emerald-500' },
  ];

  return (
    <div className="pb-24 pt-4 px-4 space-y-6 max-w-7xl mx-auto min-h-screen">
      
      {/* 1. Header with greeting */}
      <div className="flex flex-col mb-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {greeting}, {userName} 👋
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
          Plan smarter → Travel easier
        </p>
      </div>

      {/* 2. Proactive Weather & AI Commute Alert Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌧️</span>
          <div>
            <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              2 Hours Prior AI Weather Notice
            </span>
            <h3 className="font-extrabold text-sm sm:text-base leading-tight mt-0.5">
              Rain predicted during 08:30 AM commute
            </h3>
            <p className="text-xs text-amber-100">
              Leave early or pre-book your 1-Click Multi-Modal ride.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/daily-commute-booking')}
          className="bg-white text-amber-900 font-extrabold text-xs px-3 py-2 rounded-xl shadow shrink-0 hover:bg-amber-50"
        >
          Book Early
        </button>
      </div>

      {/* 3. Hero Cards: New Features Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: 1-Click Daily Commute */}
        <div 
          onClick={() => navigate('/daily-commute-booking')}
          className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-20 text-7xl font-bold">🛺</div>
          <span className="bg-white/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Daily Commuters
          </span>
          <h3 className="text-lg font-extrabold mt-2">1-Click All-in-One Booking</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Auto + Metro + Bus in 1 click! Cashless passes + Direct Auto Driver ID transfer (Seat-Sharing / Express Solo).
          </p>
          <div className="mt-4 flex items-center text-xs font-bold text-white">
            Book Daily Commute Route <FiArrowRight className="ml-1" />
          </div>
        </div>

        {/* Card 2: Delhi to Jaipur Intercity */}
        <div 
          onClick={() => navigate('/intercity-booking')}
          className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-20 text-7xl font-bold">🚆</div>
          <span className="bg-white/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Door-to-Door Journey
          </span>
          <h3 className="text-lg font-extrabold mt-2">Delhi → Jaipur Booking</h3>
          <p className="text-xs text-sky-100 mt-1">
            Uber/Ola style home pickup auto → Vande Bharat Train → Jaipur convenience cab in one master ticket!
          </p>
          <div className="mt-4 flex items-center text-xs font-bold text-white">
            Plan Intercity Trip <FiArrowRight className="ml-1" />
          </div>
        </div>

        {/* Card 3: Authorised Driver Portal */}
        <div 
          onClick={() => navigate('/driver-portal')}
          className="bg-gradient-to-br from-purple-600 to-slate-800 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-20 text-7xl font-bold">👨‍✈️</div>
          <span className="bg-white/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Driver Partner
          </span>
          <h3 className="text-lg font-extrabold mt-2">Authorised Driver Portal</h3>
          <p className="text-xs text-purple-100 mt-1">
            PM e-Drive govt registration scheme, Driver ID payment QR, fixed rate card & doorstep ride dispatch!
          </p>
          <div className="mt-4 flex items-center text-xs font-bold text-white">
            Driver Portal & Schemes <FiArrowRight className="ml-1" />
          </div>
        </div>

      </div>

      {/* 4. Daily Route AI Briefing Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-sky-100 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-sky-50 dark:border-slate-700 flex justify-between items-start bg-sky-50/50 dark:bg-slate-700/30">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
              🗺️ Daily Route Briefing
            </h2>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Home → Office / College · Today's Prediction
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-red-500 bg-red-50 dark:bg-red-950/40">
            <span className="text-red-600 dark:text-red-400 font-bold text-sm leading-none">58</span>
            <span className="text-[9px] text-red-500 dark:text-red-400 font-bold leading-none mt-0.5">/100</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Normal Time</span>
              <span className="font-semibold text-slate-900 dark:text-white">42 min</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Predicted</span>
              <span className="font-bold text-red-600 dark:text-red-400 flex items-center">61 min <span className="text-[10px] ml-1 bg-red-100 dark:bg-red-950/50 px-1 rounded text-red-700 dark:text-red-300">+19m</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Traffic</span>
              <span className="font-semibold text-red-600 dark:text-red-400">🔴 Heavy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Crowd</span>
              <span className="font-semibold text-red-600 dark:text-red-400">🔴 High</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Weather</span>
              <span className="font-semibold text-sky-700 dark:text-sky-400">🌧️ Rain</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">Safety</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">🟢 Good</span>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 text-xs p-3 rounded-lg border border-red-100 dark:border-red-900 flex items-start justify-between">
            <div className="flex items-start">
              <FiAlertTriangle className="text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
              <span className="font-medium">⚠️ Heavy rain expected. Your normal route is predicted to be 19 minutes slower today.</span>
            </div>
            <button
              onClick={() => navigate('/daily-commute-booking')}
              className="ml-2 bg-red-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg shrink-0"
            >
              1-Click Book
            </button>
          </div>
        </div>
      </div>

      {/* 5. All Features Grid */}
      <div className="pt-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
          ✨ Explore Features
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {features.map((f, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(f.path)}
              className="flex flex-col items-center justify-center p-3 bg-sky-50 dark:bg-slate-800 rounded-xl cursor-pointer hover:bg-sky-100 dark:hover:bg-slate-700 border border-sky-100/50 dark:border-slate-700 transition shadow-sm aspect-square"
            >
              <div className={`text-2xl mb-1.5 ${f.color}`}>{f.icon}</div>
              <span className="text-[10px] text-center font-bold text-slate-700 dark:text-slate-300 leading-tight">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Live Bus Status Strip */}
      <div className="pt-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Bus Tracking</h3>
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
            <div key={idx} className="snap-start flex-shrink-0 w-52 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-900 dark:text-white">{bus.id}</span>
                <span className="text-xs font-bold bg-slate-50 dark:bg-slate-700 px-2 py-0.5 rounded-full">{bus.status} {bus.occupancy}</span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">{bus.route}</p>
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
          <h3 className="text-sm font-semibold opacity-90 mb-1">Saarthi Card & Wallet</h3>
          <p className="text-lg font-mono tracking-widest mb-4">•••• 2847</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-80 mb-0.5">Available Balance</p>
              <p className="text-2xl font-bold">₹850</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80 mb-0.5">Daily Commute Auto/Bus/Metro</p>
              <p className="text-sm font-semibold">Cashless Enabled</p>
            </div>
          </div>
          <button onClick={() => navigate('/card')} className="w-full mt-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-sm font-bold transition">
            View Card Dashboard
          </button>
        </div>
      </div>

    </div>
  );
}
