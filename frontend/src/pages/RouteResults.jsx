import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiClock, FiShield, FiCreditCard, FiUsers, FiCheckCircle, 
  FiZap, FiAlertCircle, FiSend, FiQrCode, FiCheck 
} from 'react-icons/fi';

const mockRoutes = [
  { 
    id: 'A', 
    recommended: false, 
    modes: ['Bus', 'Metro', 'Walk'], 
    time: 42, 
    cost: 35, 
    crowd: 'High', 
    safety: 82, 
    score: 74, 
    explanation: 'Affordable route but currently experiencing high crowd levels.',
    legFares: { bus: 10, metro: 25, auto: 0 }
  },
  { 
    id: 'B', 
    recommended: true, 
    modes: ['E-rickshaw', 'Bus', 'Metro'], 
    time: 46, 
    cost: 42, 
    crowd: 'Medium', 
    safety: 91, 
    score: 88, 
    explanation: 'Optimal balance of time and comfort with moderate crowd to College - IIT Delhi.',
    legFares: { auto: 12, bus: 10, metro: 20 }
  },
  { 
    id: 'C', 
    recommended: false, 
    modes: ['Auto', 'Metro'], 
    time: 35, 
    cost: 85, 
    crowd: 'Low', 
    safety: 87, 
    score: 79, 
    explanation: 'Fastest route, low crowd, but more expensive auto leg.',
    legFares: { auto: 55, metro: 30, bus: 0 }
  }
];

const RouteResults = () => {
  const navigate = useNavigate();
  const [selectedRouteForBooking, setSelectedRouteForBooking] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [driverId, setDriverId] = useState('DRV-8492');

  const handleBookAll = (route) => {
    setSelectedRouteForBooking(route);
  };

  const confirmBookAll = () => {
    setBookingSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 pb-24 min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Recommended Routes</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Destination: College - IIT Delhi / Office Hub</p>
        </div>
        <button className="text-sky-500 font-medium hover:underline text-sm" onClick={() => navigate('/plan')}>Edit Search</button>
      </div>

      <div className="space-y-4">
        {mockRoutes.map((route) => (
          <div 
            key={route.id} 
            className={`bg-white dark:bg-slate-800 rounded-3xl shadow-sm p-6 transition-all hover:shadow-md ${
              route.recommended 
                ? 'border-2 border-sky-500 dark:border-sky-400 ring-2 ring-sky-100 dark:ring-sky-900/40' 
                : 'border border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Route {route.id}</h3>
                  {route.recommended && (
                    <span className="bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      ⭐ Recommended for College Commute
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {route.modes.map((mode, i) => (
                    <React.Fragment key={i}>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg text-xs font-bold">{mode}</span>
                      {i < route.modes.length - 1 && <span className="text-slate-300">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border-4 border-sky-500 dark:border-sky-400 relative">
                <span className="text-lg font-extrabold text-sky-600 dark:text-sky-400">{route.score}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-3 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <FiClock className="text-sky-500" />
                <span className="font-semibold">{route.time} <span className="text-xs font-normal">min</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <FiCreditCard className="text-sky-500" />
                <span className="font-semibold">₹{route.cost}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <FiUsers className={`text-${route.crowd === 'High' ? 'red' : route.crowd === 'Medium' ? 'amber' : 'green'}-500`} />
                <span className="font-medium text-sm">{route.crowd}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <FiShield className="text-sky-500" />
                <span className="font-medium text-sm">{route.safety} Safety</span>
              </div>
            </div>

            {route.recommended && (
              <div className="bg-sky-50 dark:bg-sky-950/40 rounded-2xl p-4 mb-4 text-xs text-sky-900 dark:text-sky-200 border border-sky-100 dark:border-sky-800 space-y-1">
                <p className="font-bold flex items-center gap-1">💡 Why AI recommends this route for College:</p>
                <p>{route.explanation}</p>
                <p className="text-[11px] text-sky-700 dark:text-sky-300 font-semibold">
                  • Metro & Bus fares go directly to DMRC & DTC authorities.
                  • Auto Rickshaw fare (₹{route.legFares.auto}) is paid directly to authorised driver (0% app fee).
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button 
                onClick={() => navigate(`/route/${route.id}`)}
                className="flex-1 border border-sky-500 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 font-bold py-3 rounded-xl transition-colors text-xs"
              >
                View Route Details
              </button>

              <button 
                onClick={() => handleBookAll(route)}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3 rounded-xl shadow transition-colors text-xs flex justify-center items-center gap-1.5"
              >
                <FiZap /> Book All Conveyances in 1 Click (₹{route.cost})
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book All Modal */}
      {selectedRouteForBooking && !bookingSuccess && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-lg space-y-5 shadow-2xl">
            
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  1-Click Multi-Modal Ticket Checkout
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Book All Conveyances to Destination
                </h3>
              </div>
              <button onClick={() => setSelectedRouteForBooking(null)} className="text-slate-400 font-bold text-lg">✕</button>
            </div>

            {/* Fare Payment Split Notice */}
            <div className="bg-sky-50 dark:bg-sky-950/40 p-4 rounded-2xl border border-sky-100 dark:border-sky-800 space-y-3 text-xs">
              <h4 className="font-bold text-sky-900 dark:text-sky-300">Payment Allocation Breakdown:</h4>
              
              <div className="space-y-2">
                {selectedRouteForBooking.legFares.metro > 0 && (
                  <div className="flex justify-between items-center bg-white dark:bg-slate-700 p-2.5 rounded-xl border border-sky-100 dark:border-slate-600">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">🚇 DMRC Metro Line Ticket</span>
                      <span className="text-[10px] text-emerald-600 block">Direct Authority Cashless Payment</span>
                    </div>
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">₹{selectedRouteForBooking.legFares.metro}</span>
                  </div>
                )}

                {selectedRouteForBooking.legFares.bus > 0 && (
                  <div className="flex justify-between items-center bg-white dark:bg-slate-700 p-2.5 rounded-xl border border-sky-100 dark:border-slate-600">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">🚌 DTC Electric Bus Ticket</span>
                      <span className="text-[10px] text-emerald-600 block">Direct Authority Cashless Payment</span>
                    </div>
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">₹{selectedRouteForBooking.legFares.bus}</span>
                  </div>
                )}

                {selectedRouteForBooking.legFares.auto > 0 && (
                  <div className="flex justify-between items-center bg-amber-50 dark:bg-amber-950/50 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800">
                    <div>
                      <span className="font-bold text-amber-900 dark:text-amber-200">🛺 Authorised Auto Rickshaw Leg</span>
                      <span className="text-[10px] text-amber-700 dark:text-amber-300 block font-semibold">
                        Customer pays Directly to Driver {driverId} (0% App Fee)
                      </span>
                    </div>
                    <span className="font-extrabold text-amber-900 dark:text-amber-200 text-sm">₹{selectedRouteForBooking.legFares.auto}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-sky-200 dark:border-sky-800 pt-2 flex justify-between font-extrabold text-sm text-slate-900 dark:text-white">
                <span>Total Route Fare</span>
                <span className="text-sky-600 dark:text-sky-400">₹{selectedRouteForBooking.cost}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedRouteForBooking(null)}
                className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={confirmBookAll}
                className="flex-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3 px-6 rounded-xl shadow flex justify-center items-center gap-2"
              >
                <FiCheckCircle /> Confirm & Generate Master Pass
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
              All Tickets Booked Successfully!
            </h3>
            
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Authority vouchers generated for Metro & Bus. Auto rickshaw leg (₹{selectedRouteForBooking?.legFares.auto}) ready for direct driver payment to Driver {driverId}.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/journey')}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl shadow"
              >
                Start Live Navigation
              </button>
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedRouteForBooking(null);
                }}
                className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default RouteResults;
