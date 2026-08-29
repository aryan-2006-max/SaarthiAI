import React from 'react';

export const StatCard = ({ icon: Icon, label, value, change }) => {
  return (
    <div className="bg-white border border-sky-100 rounded-xl p-4 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center text-xl">
        <Icon />
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          {change && (
            <span className={`text-xs font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change > 0 ? '+' : ''}{change}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
