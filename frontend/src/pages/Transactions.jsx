import React from 'react';
import { FiNavigation, FiTruck, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Transactions = () => {
  const transactions = [
    { id: 1, date: "Aug 29, 09:30 AM", type: "Metro", icon: <FiNavigation />, route: "Rajiv Chowk → Hauz Khas", amount: "₹40", status: "Success" },
    { id: 2, date: "Aug 28, 06:15 PM", type: "Bus", icon: <FiTruck />, route: "AIIMS → INA", amount: "₹15", status: "Success" },
    { id: 3, date: "Aug 28, 08:45 AM", type: "Metro", icon: <FiNavigation />, route: "Hauz Khas → Rajiv Chowk", amount: "₹40", status: "Success" },
    { id: 4, date: "Aug 27, 07:20 PM", type: "Bus", icon: <FiTruck />, route: "CP → India Gate", amount: "₹10", status: "Failed" },
    { id: 5, date: "Aug 27, 09:00 AM", type: "Metro", icon: <FiNavigation />, route: "Noida Sec 15 → Rajiv Chowk", amount: "₹50", status: "Success" },
    { id: 6, date: "Aug 26, 05:30 PM", type: "Bus", icon: <FiTruck />, route: "Saket → Malviya Nagar", amount: "₹15", status: "Pending" },
    { id: 7, date: "Aug 26, 08:30 AM", type: "Metro", icon: <FiNavigation />, route: "Malviya Nagar → Saket", amount: "₹20", status: "Success" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Success': return <span className="text-[10px] font-bold bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Success</span>;
      case 'Failed': return <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Failed</span>;
      case 'Pending': return <span className="text-[10px] font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">Pending</span>;
      default: return null;
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Transactions</h1>

      <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex justify-between w-full text-sm">
          <div className="text-center px-2">
             <div className="text-slate-500 text-xs">This Month</div>
             <div className="font-bold text-slate-900 text-lg">₹820</div>
          </div>
          <div className="text-center px-2 border-l border-sky-200">
             <div className="text-slate-500 text-xs">Avg Daily</div>
             <div className="font-bold text-slate-900 text-lg">₹27</div>
          </div>
          <div className="text-center px-2 border-l border-sky-200">
             <div className="text-slate-500 text-xs">Most Used</div>
             <div className="font-bold text-sky-600 text-lg">Metro</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        <button className="flex items-center gap-1 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
          <FiFilter /> Filter
        </button>
        <select className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm outline-none">
          <option>All Transport</option>
          <option>Metro</option>
          <option>Bus</option>
        </select>
        <select className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm outline-none">
          <option>Last 30 Days</option>
          <option>This Week</option>
        </select>
      </div>

      <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="divide-y divide-slate-100">
          {transactions.map(t => (
            <div key={t.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
              <div className="flex items-center gap-3">
                <div className="bg-sky-50 p-3 rounded-full text-sky-500">
                  {t.icon}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.route}</div>
                  <div className="text-xs text-slate-500">{t.date} • {t.type}</div>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="font-bold text-slate-900 mb-1">{t.amount}</div>
                {getStatusBadge(t.status)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-slate-600 pb-20">
        <div>Showing 1-7 of 45</div>
        <div className="flex gap-2">
          <button className="p-2 border border-slate-200 rounded hover:bg-slate-50"><FiChevronLeft /></button>
          <button className="p-2 border border-slate-200 rounded hover:bg-slate-50"><FiChevronRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
