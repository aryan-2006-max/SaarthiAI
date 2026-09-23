import React, { useState } from 'react';
import { FiBell, FiAlertTriangle, FiUsers, FiMap, FiClock, FiCreditCard, FiShield, FiInfo, FiZap } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();
  const [notifs, setNotifs] = useState([
    { id: 0, type: 'agent', title: '🌧️ Commute Agent Alert (2 Hours Prior)', msg: 'Heavy rain forecasted for your 08:30 AM IIT Delhi commute. Road congestion expected to increase travel time by 30 mins. Pre-book your 1-click early express ride now.', time: '06:30 AM (Just now)', read: false, icon: <FiZap className="text-amber-500"/>, action: '/daily-commute-booking' },
    { id: 1, type: 'traffic', title: 'Heavy traffic on Rajiv Chowk route', msg: 'Expect a 15 min delay on your usual route. Consider taking the Metro.', time: '10m ago', read: false, icon: <FiAlertTriangle className="text-amber-500"/> },
    { id: 2, type: 'crowd', title: 'Bus 42 is 90% full', msg: 'The approaching bus is highly crowded. Next bus in 12 mins is 40% full.', time: '30m ago', read: false, icon: <FiUsers className="text-red-500"/> },
    { id: 3, type: 'route', title: 'Route updated', msg: 'We found a 10 min faster route for your evening commute via Ring Road.', time: '1h ago', read: false, icon: <FiMap className="text-sky-500"/> },
    { id: 4, type: 'reminder', title: 'Time to leave', msg: 'Leave in 5 mins to catch the 09:15 AM Blue Line Metro.', time: '2h ago', read: true, icon: <FiClock className="text-sky-500"/> },
    { id: 5, type: 'wallet', title: '₹40 debited', msg: 'Payment successful for Delhi Metro ride.', time: '3h ago', read: true, icon: <FiCreditCard className="text-green-500"/> },
    { id: 6, type: 'safety', title: 'Safe route available', msg: 'Navigating you via well-lit main roads for your safety.', time: 'Yesterday', read: true, icon: <FiShield className="text-sky-500"/> },
    { id: 7, type: 'disruption', title: 'Metro delay', msg: 'Yellow line facing minor delays due to technical snags.', time: 'Yesterday', read: true, icon: <FiAlertTriangle className="text-red-500"/> },
    { id: 8, type: 'briefing', title: 'Morning Briefing', msg: 'Weather is clear. 3 disruptions on your saved routes. Click for details.', time: 'Yesterday', read: true, icon: <FiInfo className="text-sky-500"/> },
  ]);

  const toggleRead = (id) => {
    setNotifs(notifs.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifs.filter(n => !n.read).length;

  return (
    <div className="p-4 md:p-8 bg-white dark:bg-slate-900 min-h-screen pb-20 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
           <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h1>
           {unreadCount > 0 && <span className="bg-sky-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount}</span>}
        </div>
        <button onClick={markAllRead} className="text-sky-500 font-medium text-sm hover:underline">
          Mark All Read
        </button>
      </div>

      <div className="space-y-2">
        {notifs.map(n => (
          <div 
            key={n.id} 
            onClick={() => {
              toggleRead(n.id);
              if (n.action) navigate(n.action);
            }}
            className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition ${
              n.read 
                ? 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700' 
                : 'bg-sky-50 dark:bg-sky-950/40 border-l-4 border-sky-500 dark:border-sky-400'
            }`}
          >
            <div className="mt-1 bg-white dark:bg-slate-700 p-2.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-600 flex-shrink-0">
              {n.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`text-sm ${n.read ? 'font-medium text-slate-700 dark:text-slate-300' : 'font-extrabold text-slate-900 dark:text-white'}`}>{n.title}</h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">{n.time}</span>
              </div>
              <p className={`text-xs ${n.read ? 'text-slate-500 dark:text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>{n.msg}</p>
              {n.action && (
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate(n.action); }} 
                  className="mt-2 text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/50 px-3 py-1 rounded-lg hover:bg-sky-200"
                >
                  ⚡ Book Early Ride Now →
                </button>
              )}
            </div>
            {!n.read && <div className="w-2.5 h-2.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
