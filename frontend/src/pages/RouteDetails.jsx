import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiCheckCircle, FiChevronRight, FiZap, FiCreditCard, 
  FiShield, FiUsers, FiClock, FiCheck, FiSend 
} from 'react-icons/fi';

const RouteDetails = () => {
  const navigate = useNavigate();
  const [showBookAllModal, setShowBookAllModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [driverId, setDriverId] = useState('DRV-8492');

  const segments = [
    { mode: 'Walk', from: 'Home', to: 'Stand', duration: 5, fare: 0, paymentType: 'Free Walk' },
    { mode: 'E-rickshaw / Auto', from: 'Stand', to: 'Bus Stop A', duration: 12, fare: 10, paymentType: 'Direct Driver Pay (Driver ID DRV-8492)' },
    { mode: 'DTC Bus', from: 'Bus Stop A', to: 'Metro Stn', duration: 15, fare: 12, paymentType: 'Direct Authority (DTC Pass)' },
    { mode: 'DMRC Metro', from: 'Metro Stn', to: 'IIT Delhi Station', duration: 10, fare: 20, paymentType: 'Direct Authority (DMRC Pass)' },
    { mode: 'Walk', from: 'IIT Delhi Station', to: 'College Campus', duration: 4, fare: 0, paymentType: 'Free Walk' }
  ];

  const totalFare = segments.reduce((acc, curr) => acc + curr.fare, 0);

  const scores = [
    { label: 'Time', value: 85 },
    { label: 'Cost', value: 72 },
    { label: 'Crowd', value: 78 },
    { label: 'Safety', value: 91 },
    { label: 'Accessibility', value: 65 },
    { label: 'Environment', value: 80 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-3xl space-y-6 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
        <div>
          <span className="bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
            College Commute Option
          </span>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-1">Route B Details</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Home → College - IIT Delhi • 46 min • ₹{totalFare}</p>
        </div>

        <div className="relative w-16 h-16 flex items-center justify-center font-extrabold text-sky-600 dark:text-sky-400 text-xl">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#E0F2FE" strokeWidth="8" fill="transparent" />
            <circle cx="50" cy="50" r="40" stroke="#0EA5E9" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset={251 - (88/100)*251} />
          </svg>
          88
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left: Journey Timeline */}
        <div>
          <h3 className="font-extrabold text-base mb-4 text-slate-800 dark:text-slate-100">
            Multi-Modal Conveyance Plan
          </h3>

          <div className="pl-2 relative border-l-2 border-dashed border-sky-200 dark:border-sky-800 ml-4 pb-4">
            {segments.map((seg, i) => (
              <div key={i} className="mb-6 relative">
                <div className="absolute -left-[25px] bg-sky-100 dark:bg-sky-900/60 w-8 h-8 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-300 font-bold text-xs ring-4 ring-white dark:ring-slate-800">
                  {seg.mode.charAt(0)}
                </div>
                <div className="ml-6 bg-slate-50 dark:bg-slate-700/40 p-3 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-slate-800 dark:text-white text-xs flex items-center gap-1">
                    {seg.from} <FiChevronRight className="text-slate-400" /> {seg.to}
                  </h4>
                  <div className="flex justify-between items-center mt-1 text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{seg.mode} • {seg.duration} min</span>
                    {seg.fare > 0 && <span className="text-emerald-600 dark:text-emerald-400 font-bold">₹{seg.fare}</span>}
                  </div>
                  <span className="text-[10px] text-sky-700 dark:text-sky-300 font-semibold block mt-1">
                    • {seg.paymentType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Scores & AI Authority Notice */}
        <div className="space-y-6">
          <h3 className="font-extrabold text-base mb-4 text-slate-800 dark:text-slate-100">
            AI Evaluation Breakdown
          </h3>

          <div className="space-y-3 bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
            {scores.map(score => (
              <div key={score.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{score.label}</span>
                  <span className="text-slate-800 dark:text-white font-bold">{score.value}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${score.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-800 space-y-2 text-xs">
            <h4 className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300">
              <FiCheckCircle className="text-emerald-500" /> Direct Authority Payment Rule
            </h4>
            <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed text-[11px]">
              When you click <strong>Book All Conveyances</strong>, money for Metro & Bus is sent directly to DMRC & DTC. Money for E-rickshaw/Auto is paid directly to Driver {driverId} (0% platform cut!).
            </p>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
        <button 
          onClick={() => setShowBookAllModal(true)}
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-4 rounded-2xl shadow-lg transition-colors text-sm flex justify-center items-center gap-2"
        >
          <FiZap /> Book All Conveyances in 1 Click (₹{totalFare})
        </button>
        <button 
          onClick={() => navigate('/journey')}
          className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl shadow transition-colors text-sm"
        >
          Start Navigation
        </button>
      </div>

      {/* Book All Checkout Modal */}
      {showBookAllModal && !bookingSuccess && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-md space-y-4 shadow-2xl">
            
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  College Route 1-Click Pass
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Confirm All Ticket Bookings
                </h3>
              </div>
              <button onClick={() => setShowBookAllModal(false)} className="text-slate-400 font-bold text-lg">✕</button>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 space-y-2.5 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-600 pb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">🚇 Metro Ticket (DMRC Authority)</span>
                <span className="font-bold text-emerald-600">₹20</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-600 pb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">🚌 Bus Ticket (DTC Authority)</span>
                <span className="font-bold text-emerald-600">₹12</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-amber-900 dark:text-amber-200">🛺 Auto Rickshaw Leg</span>
                  <span className="text-[10px] text-amber-700 dark:text-amber-300 block">Direct Pay to Driver {driverId}</span>
                </div>
                <span className="font-bold text-amber-600">₹10</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowBookAllModal(false)}
                className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => setBookingSuccess(true)}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3 rounded-xl shadow text-xs"
              >
                Pay & Generate Pass
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Success Modal */}
      {bookingSuccess && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-md text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
              <FiCheck />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              All Conveyance Tickets Booked!
            </h3>
            
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Metro & Bus authority tickets issued. ₹10 Auto fare ready for direct transfer to Driver {driverId}.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/journey')}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl shadow"
              >
                Start Live Journey
              </button>
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setShowBookAllModal(false);
                }}
                className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default RouteDetails;
