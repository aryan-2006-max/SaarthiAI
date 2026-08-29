import React from 'react';
import { CROWD_LEVELS } from '../utils/constants';

export const CrowdBadge = ({ level }) => {
  const config = CROWD_LEVELS[level] || CROWD_LEVELS.MODERATE;
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${config.bg} ${config.color}`}>
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {config.label} Crowd
    </span>
  );
};
