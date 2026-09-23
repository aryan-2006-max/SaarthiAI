import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiClock, FiZap, FiX, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

export const CommuteAgentAlert = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);
  const [bookedEarly, setBookedEarly] = useState(false);

  // Commute Routine Details
  const routineTime = '08:30 AM';
  const earlyTime = '06:30 AM (2 Hours Prior Notice)';
  const recommendedLeaveTime = '08:00 AM (30 min early)';

  if (!showAlert) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 left-4 sm:left-auto sm:max-w-md bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 border-2 border-amber-400 dark:border-amber-500 rounded-3xl p-5 shadow-2xl z-50 animate-bounce-slight space-y-3">
      
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500 text-white rounded-xl shadow">
            <FiAlertTriangle className="text-xl" />
          </div>
          <div>
            <span className="bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              🤖 Commute AI Agent (2 Hours Prior Alert)
            </span>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mt-0.5">
              🌧️ Heavy Rain Alert for 08:30 AM Commute
            </h4>
          </div>
        </div>

        <button 
          onClick={() => setShowAlert(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
        >
          <FiX className="text-lg" />
        </button>
      </div>

      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
        Analyzed your daily routine to IIT Delhi/Office (usually at {routineTime}). Heavy rainfall & waterlogging predicted at 08:30 AM. Road congestion expected +30 mins.
      </p>

      <div className="bg-white/80 dark:bg-slate-700/80 p-3 rounded-2xl border border-amber-200 dark:border-slate-600 flex justify-between items-center text-xs">
        <div>
          <span className="text-[10px] text-slate-500 block">AI Recommendation</span>
          <span className="font-bold text-amber-900 dark:text-amber-200">Leave early at {recommendedLeaveTime}</span>
        </div>
        <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-2 py-1 rounded">
          Notice sent 2h prior ({earlyTime})
        </span>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          onClick={() => {
            setBookedEarly(true);
            setTimeout(() => {
              navigate('/daily-commute-booking');
            }, 1000);
          }}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-2.5 px-3 rounded-xl shadow text-xs flex justify-center items-center gap-1.5 transition"
        >
          {bookedEarly ? (
            <>
              <FiCheckCircle /> Reserved Early Route!
            </>
          ) : (
            <>
              <FiZap /> Book Early Express Ride <FiChevronRight />
            </>
          )}
        </button>
        <button
          onClick={() => setShowAlert(false)}
          className="bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 font-bold py-2.5 px-3 rounded-xl text-xs"
        >
          Dismiss
        </button>
      </div>

    </div>
  );
};
