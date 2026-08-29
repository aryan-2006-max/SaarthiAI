import React from 'react';
import { TRANSPORT_TYPES } from '../utils/constants';

export const JourneyTimeline = ({ segments }) => {
  return (
    <div className="py-2">
      {segments.map((segment, index) => {
        const typeInfo = TRANSPORT_TYPES[segment.mode] || TRANSPORT_TYPES.WALK;
        const isLast = index === segments.length - 1;

        return (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${typeInfo.bg} ${typeInfo.color} flex items-center justify-center font-bold text-xs z-10`}>
                {segment.mode[0]}
              </div>
              {!isLast && <div className="w-0.5 h-12 bg-sky-200 border-l-2 border-dashed border-sky-300 my-1 flex-1"></div>}
            </div>
            
            <div className="pb-6 flex-1 pt-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-slate-800">{segment.from}</h4>
                  <p className="text-sm text-slate-500">{segment.mode} • {segment.duration} min</p>
                </div>
                {segment.fare > 0 && <span className="font-medium text-sky-600">₹{segment.fare}</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
