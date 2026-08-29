import React from 'react';

export const ScoreDisplay = ({ score, label, size = 'md' }) => {
  let color = 'text-green-500';
  let stroke = '#22C55E';
  if (score < 50) {
    color = 'text-red-500';
    stroke = '#EF4444';
  } else if (score < 75) {
    color = 'text-amber-500';
    stroke = '#F59E0B';
  }

  const sizes = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-3xl'
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative ${sizes[size]} flex items-center justify-center font-bold ${color}`}>
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="#E0F2FE" strokeWidth="8" fill="transparent" />
          <circle 
            cx="50" cy="50" r={radius} 
            stroke={stroke} 
            strokeWidth="8" 
            fill="transparent" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="relative z-10">{score}</span>
      </div>
      {label && <span className="text-xs text-slate-500 mt-1 font-medium">{label}</span>}
    </div>
  );
};
