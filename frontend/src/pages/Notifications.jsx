import React, { useState } from 'react';
import { FiBell, FiAlertTriangle, FiUsers, FiMap, FiClock, FiCreditCard, FiShield, FiInfo } from 'react-icons/fi';

const Notifications = () => {
  const [notifs, setNotifs] = useState([
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
    <div className="p-4 md:p-8 bg-white min-h-screen pb-20">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
           <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
           {unreadCount > 0 && <span className="bg-sky-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount}</span>}
        </div>
        <button onClick={markAllRead} className="text-sky-500 font-medium text-sm hover:underline">
          Mark All Read
        </button>
      </div>

      <div className="space-y-1">
        {notifs.map(n => (
          <div 
            key={n.id} 
            onClick={() => toggleRead(n.id)}
            className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition ${n.read ? 'bg-white' : 'bg-sky-50 border-l-4 border-sky-500'}`}
          >
            <div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-slate-100 flex-shrink-0">
              {n.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`text-sm ${n.read ? 'font-medium text-slate-700' : 'font-bold text-slate-900'}`}>{n.title}</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{n.time}</span>
              </div>
              <p className={`text-sm ${n.read ? 'text-slate-500' : 'text-slate-700'}`}>{n.msg}</p>
            </div>
            {!n.read && <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
