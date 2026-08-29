import React from 'react';
import { FiClock, FiCreditCard } from 'react-icons/fi';
import { CrowdBadge } from './CrowdBadge';
import { ScoreDisplay } from './ScoreDisplay';

export const RouteCard = ({ route, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl p-4 border cursor-pointer transition-all hover:bg-sky-50 shadow-sm
        ${route.recommended ? 'border-l-4 border-l-sky-500 border-sky-100' : 'border-slate-200'}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-slate-800 text-lg">{route.label}</h3>
            {route.recommended && (
              <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded">⭐ Recommended</span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1 text-slate-500 text-sm">
            {route.modes.map((mode, i) => (
              <React.Fragment key={i}>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-medium">{mode}</span>
                {i < route.modes.length - 1 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <ScoreDisplay score={route.commuteScore} size="sm" />
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-3 text-slate-700 font-medium">
        <div className="flex items-center gap-1">
          <FiClock className="text-sky-500" /> {route.time} min
        </div>
        <div className="flex items-center gap-1">
          <FiCreditCard className="text-sky-500" /> ₹{route.cost}
        </div>
        <CrowdBadge level={route.crowd} />
      </div>

      <p className="text-sm text-slate-600 bg-sky-50/50 p-2 rounded">{route.explanation}</p>
    </div>
  );
};
