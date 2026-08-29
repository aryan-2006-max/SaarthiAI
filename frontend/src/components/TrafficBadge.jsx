import React from 'react';
import { TRAFFIC_LEVELS } from '../utils/constants';

export const TrafficBadge = ({ level }) => {
  const config = TRAFFIC_LEVELS[level] || TRAFFIC_LEVELS.MODERATE;
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${config.bg} ${config.color}`}>
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {config.label} Traffic
    </span>
  );
};
