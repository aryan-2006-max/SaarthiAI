import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiCalendar, FiClock, FiCheckCircle, FiPhoneCall, 
  FiZap, FiNavigation, FiCreditCard, FiArrowRight, FiUserCheck,
  FiShare2, FiDownload, FiAlertCircle
} from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export default function IntercityBooking() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [origin, setOrigin] = useState('Home (Rohini, Delhi)');
  const [destination, setDestination] = useState('Jaipur Junction / Pink City, Rajasthan');
  const [travelDate, setTravelDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [bookingStep, setBookingStep] = useState('search'); // 'search' | 'dispatch' | 'confirmed'
  const [pickupType, setPickupType] = useState('home'); // 'home' | 'stand'
  const [intercityMode, setIntercityMode] = useState('train'); // 'train' | 'bus'
  
  const [driverDispatching, setDriverDispatching] = useState(false);
  const [driverAssigned, setDriverAssigned] = useState(null);

  const startBooking = () => {
    setBookingStep('dispatch');
    setDriverDispatching(true);

    // Simulate driver matching (Uber/Ola style)
    setTimeout(() => {
      setDriverDispatching(false);
      setDriverAssigned({
        name: 'Rajesh Kumar',
        phone: '+91 98765 43210',
        rating: '4.9 ★',
        vehicle: 'Green E-Auto (Delhi DL-1R-8492)',
        eta: '5 mins',
        otp: '4892'
      });
    }, 3000);
  };

  const confirmAllTickets = () => {
    setBookingStep('confirmed');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-15 translate-x-6 -translate-y-6">
          <FiNavigation className="text-9xl" />
        </div>
        <div className="relative z-10">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Multi-Modal Door-to-Door Journey
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Intercity Seamless Booking
          </h1>
          <p className="text-sky-100 text-sm mt-1 max-w-xl">
            Book your entire journey from home pickup in Delhi all the way to your destination in Jaipur in one single click!
          </p>
        </div>
      </div>

      {bookingStep === 'search' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FiMapPin className="text-sky-500" /> Plan Intercity Route
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Origin */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">From (Origin Home / Stand)</label>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-3.5 text-slate-400" />
                <input 
                  type="text" 
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 pl-10 pr-4 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">To (Intercity Destination)</label>
              <div className="relative">
                <FiNavigation className="absolute left-3 top-3.5 text-sky-500" />
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 pl-10 pr-4 text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Date of Travel</label>
              <input 
                type="date" 
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-slate-800 dark:text-slate-100 font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Doorstep Pickup Preference</label>
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <button
                  type="button"
                  onClick={() => setPickupType('home')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition ${
                    pickupType === 'home' 
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  🚖 Home Pickup (Uber/Ola style)
                </button>
                <button
                  type="button"
                  onClick={() => setPickupType('stand')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition ${
                    pickupType === 'stand' 
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  🛺 Nearest Taxi Stand
                </button>
              </div>
            </div>
          </div>

          {/* Route Blueprint Overview */}
          <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-extrabold text-sky-900 dark:text-sky-300 uppercase tracking-wider flex items-center gap-2">
              <FiZap className="text-amber-500" /> Integrated 3-Leg Journey Preview
            </h3>

            <div className="space-y-3">
              {/* Leg 1 */}
              <div className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                      {pickupType === 'home' ? 'Home Doorstep Pickup' : 'Nearest Stand Pickup'} (Delhi)
                    </h4>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">₹120</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Saarthi AI Driver notifies & picks you up at home → Drops off at New Delhi Railway Station (NDLS).
                  </p>
                </div>
              </div>

              {/* Leg 2 */}
              <div className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                      Intercity Express (Vande Bharat Train 20978)
                    </h4>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">₹680</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    New Delhi Station (06:10 AM) → Jaipur Junction (10:45 AM). Reserved Executive Chair Car.
                  </p>
                </div>
              </div>

              {/* Leg 3 */}
              <div className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                      Jaipur Station → Final Destination Convenience Cab
                    </h4>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">₹150</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Auto/Taxi wala authorized by Saarthi AI in Jaipur drops you off directly to Pink City Hotel.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-sky-200 dark:border-sky-800">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total All-in-One Fare</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹950 <span className="text-xs font-normal text-slate-500">(Includes all 3 legs)</span></p>
              </div>
              <button
                onClick={startBooking}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                Proceed & Notify Driver <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {bookingStep === 'dispatch' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              🚖 Step 1: Doorstep Pickup Dispatch
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Connecting with nearby Saarthi AI authorized auto/cab drivers in Rohini, Delhi...
            </p>
          </div>

          {driverDispatching ? (
            <div className="p-8 text-center space-y-4 bg-sky-50 dark:bg-sky-950/30 rounded-2xl border border-sky-100 dark:border-sky-800">
              <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-bold text-sky-800 dark:text-sky-300">
                Broadcasting ride request to authorized driver network...
              </p>
              <p className="text-xs text-slate-500">
                Drivers using Saarthi AI app nearby will accept your home pickup request.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Driver Assigned Card */}
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FiCheckCircle /> Driver Accepted & En Route!
                  </span>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">ETA: {driverAssigned?.eta}</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xl">
                    👨‍✈️
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{driverAssigned?.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{driverAssigned?.vehicle}</p>
                    <p className="text-xs text-amber-500 font-semibold mt-0.5">{driverAssigned?.rating} Driver Rating</p>
                  </div>
                  <a 
                    href={`tel:${driverAssigned?.phone}`}
                    className="p-3 bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 rounded-xl hover:bg-sky-100"
                  >
                    <FiPhoneCall className="text-xl" />
                  </a>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl flex justify-between items-center text-xs">
                  <span className="text-slate-500">Pickup OTP for Driver:</span>
                  <span className="font-mono font-bold text-sky-600 text-base tracking-widest">{driverAssigned?.otp}</span>
                </div>
              </div>

              {/* Total Payment Confirmation */}
              <div className="bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Combined Payment Details</h3>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between"><span>Delhi Auto Home Pickup</span><span>₹120</span></div>
                  <div className="flex justify-between"><span>Delhi to Jaipur Vande Bharat Ticket</span><span>₹680</span></div>
                  <div className="flex justify-between"><span>Jaipur Station Taxi Convenience</span><span>₹150</span></div>
                  <div className="border-t border-slate-200 dark:border-slate-600 pt-2 flex justify-between font-bold text-sm text-slate-900 dark:text-white">
                    <span>Total Amount (Deducted from Wallet)</span>
                    <span className="text-sky-600 dark:text-sky-400">₹950</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setBookingStep('search')}
                  className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl"
                >
                  Back
                </button>
                <button
                  onClick={confirmAllTickets}
                  className="flex-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex justify-center items-center gap-2"
                >
                  <FiCreditCard /> Confirm & Generate Master Ticket
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {bookingStep === 'confirmed' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-emerald-200 dark:border-emerald-800 space-y-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-3xl mx-auto">
            <FiCheckCircle />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              All 3 Legs Booked Successfully!
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Your multi-modal itinerary from Delhi Home to Jaipur Station is live.
            </p>
          </div>

          {/* Master Ticket Card */}
          <div className="bg-gradient-to-b from-sky-50 to-white dark:from-slate-700 dark:to-slate-800 border-2 border-sky-300 dark:border-sky-700 rounded-2xl p-5 text-left space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-sky-100 dark:border-slate-600 pb-3">
              <div>
                <span className="text-[10px] font-bold text-sky-600 uppercase">Master Ticket Pass</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white font-mono">SAARTHI-JAI-9821</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-1 rounded-full">
                PAID ₹950
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-base">🚖</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 1: Delhi Home Pickup (Arriving in 5m)</p>
                  <p className="text-slate-500">Driver: Rajesh Kumar (DL-1R-8492) • OTP: <span className="font-bold text-sky-600">4892</span></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base">🚆</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 2: Vande Bharat Express (Train #20978)</p>
                  <p className="text-slate-500">Seat C4-32 • Departs NDLS 06:10 AM • PNR: 294819204</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base">🚕</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 3: Jaipur Drop-off Taxi Convenience</p>
                  <p className="text-slate-500">Pre-assigned driver will meet at Jaipur Junction Exit Gate 2.</p>
                </div>
              </div>
            </div>

            {/* QR Mock */}
            <div className="pt-2 text-center border-t border-sky-100 dark:border-slate-600">
              <div className="w-32 h-32 bg-slate-900 mx-auto rounded-xl p-2 flex items-center justify-center text-white text-xs font-mono">
                [ QR CODE ]
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Scan at station gates and with assigned drivers</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => navigate('/journey')}
              className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl shadow transition-colors"
            >
              Start Live Navigation
            </button>
            <button
              onClick={() => navigate('/home')}
              className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
