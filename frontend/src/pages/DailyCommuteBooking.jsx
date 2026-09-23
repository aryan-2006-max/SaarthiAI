import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiClock, FiCreditCard, FiZap, FiCheckCircle, 
  FiUsers, FiDollarSign, FiShield, FiUser, FiArrowRight, FiCheck
} from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export default function DailyCommuteBooking() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const [routeType, setRouteType] = useState('college'); // 'college' | 'office'
  const [rideMode, setRideMode] = useState('shared'); // 'shared' | 'instant_full'
  const [driverId, setDriverId] = useState('DRV-8492');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [paymentStep, setPaymentStep] = useState(false);

  // Government Fixed Fare Rates table for Place A -> Place B
  const fareRates = {
    shared: {
      auto: 15, // per seat
      metro: 30,
      bus: 10,
      total: 55
    },
    instant_full: {
      auto: 45, // 3 seats x ₹15 to go early
      metro: 30,
      bus: 10,
      total: 85
    }
  };

  const currentFare = fareRates[rideMode];

  const handleOneClickBooking = () => {
    setBookingSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 pb-24 min-h-screen">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Daily Commuter One-Click Pass
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Seamless College & Office Commute
          </h1>
          <p className="text-sky-100 text-sm mt-1 max-w-xl">
            Book Auto + Metro + Bus in 1 click! Cashless payment for Metro & Bus, and direct wallet transfer to Government-Authorized Auto Drivers.
          </p>
        </div>
      </div>

      {/* Select Destination Routine */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
        
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FiZap className="text-amber-500" /> Daily Suggested Route
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setRouteType('college')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                routeType === 'college' 
                  ? 'bg-sky-500 text-white shadow' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              🎓 College Commute
            </button>
            <button
              onClick={() => setRouteType('office')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                routeType === 'office' 
                  ? 'bg-sky-500 text-white shadow' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              🏢 Office Commute
            </button>
          </div>
        </div>

        {/* Route Multimodal Steps */}
        <div className="bg-sky-50 dark:bg-sky-950/40 p-5 rounded-2xl border border-sky-100 dark:border-sky-800 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                {routeType === 'college' ? 'Home → IIT Delhi Campus' : 'Home → Cyber City Gurgaon'}
              </p>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                AI Optimal Multi-Modal Combo
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Total Time</span>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg">42 min</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Step 1: Private Auto */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-bold text-[10px] px-2 py-0.5 rounded">
                  Leg 1: Private Auto
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">₹{currentFare.auto}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Home → Nearest Metro Station
              </p>
              <p className="text-[11px] text-slate-500">
                Authorized Driver ID Transfer. Government Fixed Fare.
              </p>
            </div>

            {/* Step 2: Metro */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 font-bold text-[10px] px-2 py-0.5 rounded">
                  Leg 2: Metro Line
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">₹{currentFare.metro}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Yellow Line → Hauz Khas
              </p>
              <p className="text-[11px] text-slate-500">
                Cashless DMRC Direct Authority Voucher.
              </p>
            </div>

            {/* Step 3: Bus */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] px-2 py-0.5 rounded">
                  Leg 3: Electric DTC Bus
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">₹{currentFare.bus}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Bus 423 → Destination Gate
              </p>
              <p className="text-[11px] text-slate-500">
                Cashless DTC Transport Voucher.
              </p>
            </div>
          </div>
        </div>

        {/* Private Auto Ride Capacity & Fare Option (Government Authorized Scheme) */}
        <div className="bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-600 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <FiShield className="text-sky-500" /> Private Auto Option & Driver ID Direct Pay
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Government regulated rate card for Authorized Saarthi AI drivers. Choose your travel condition:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option A: Seat Sharing */}
            <div 
              onClick={() => setRideMode('shared')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                rideMode === 'shared'
                  ? 'bg-white dark:bg-slate-800 border-sky-500 shadow-md ring-2 ring-sky-200 dark:ring-sky-900'
                  : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-600'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <FiUsers className="text-sky-500" /> Seat Sharing Ride
                </span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                  ₹15 / seat
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Driver fills auto with fellow commuters. Standard government fixed fare per seat.
              </p>
            </div>

            {/* Option B: Instant Full Departure */}
            <div 
              onClick={() => setRideMode('instant_full')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                rideMode === 'instant_full'
                  ? 'bg-white dark:bg-slate-800 border-sky-500 shadow-md ring-2 ring-sky-200 dark:ring-sky-900'
                  : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-600'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  ⚡ Express Instant (Full Auto)
                </span>
                <span className="text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                  ₹45 (All 3 Seats)
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Depart immediately without waiting! You pay for all seats, benefiting both you and the driver.
              </p>
            </div>
          </div>

          {/* Authorized Driver ID Section */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Authorised Private Auto Driver Wallet Transfer
              </p>
              <p className="text-[11px] text-slate-500">
                Enter Driver ID printed on the auto dashboard or scan driver QR:
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input 
                type="text" 
                value={driverId}
                onChange={(e) => setDriverId(e.target.value)}
                placeholder="e.g. DRV-8492"
                className="bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <span className="text-xs bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-bold whitespace-nowrap">
                ✓ Verified Driver
              </span>
            </div>
          </div>

        </div>

        {/* Total Checkout Bar */}
        <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100 dark:border-slate-700">
          <div>
            <span className="text-xs text-slate-500">Combined 1-Click Commute Total:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">₹{currentFare.total}</span>
              <span className="text-xs text-slate-400">(Cashless Authority + Direct Driver Wallet)</span>
            </div>
          </div>

          <button
            onClick={handleOneClickBooking}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
          >
            ⚡ Book All Rides in 1 Click
          </button>
        </div>

      </div>

      {/* Confirmation Modal */}
      {bookingSuccess && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-md space-y-5 shadow-2xl text-center">
            
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
              <FiCheckCircle />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                1-Click Commute Booked!
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Cashless tickets generated for Metro & Bus, and ₹{currentFare.auto} credited directly to Driver {driverId}'s wallet.
              </p>
            </div>

            {/* Issued Passes */}
            <div className="bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-4 text-left space-y-3 text-xs border border-slate-200 dark:border-slate-600">
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-600 pb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">🛺 Auto Wallet Receipt</span>
                <span className="text-emerald-600 font-bold">₹{currentFare.auto} → Driver {driverId}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-600 pb-2">
                <span className="font-bold text-slate-800 dark:text-slate-200">🚇 DMRC Metro QR Pass</span>
                <span className="text-sky-600 font-bold">VALID (₹{currentFare.metro})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-800 dark:text-slate-200">🚌 DTC Bus Digital Ticket</span>
                <span className="text-sky-600 font-bold">VALID (₹{currentFare.bus})</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/journey')}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl shadow"
              >
                Track Live Commute
              </button>
              <button
                onClick={() => setBookingSuccess(false)}
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
}
