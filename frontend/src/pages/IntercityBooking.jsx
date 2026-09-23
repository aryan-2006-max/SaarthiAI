import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiCalendar, FiClock, FiCheckCircle, FiPhoneCall, 
  FiZap, FiNavigation, FiCreditCard, FiArrowRight, FiUserCheck,
  FiShare2, FiDownload, FiAlertCircle, FiGlobe, FiShield, FiDollarSign
} from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export default function IntercityBooking() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  // Pan-India City list
  const indianCities = [
    'Delhi NCR', 'Jaipur', 'Mumbai', 'Bengaluru', 'Chennai', 
    'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Agra', 
    'Chandigarh', 'Lucknow', 'Varanasi', 'Surat'
  ];

  const [fromCity, setFromCity] = useState('Delhi NCR');
  const [homePlace, setHomePlace] = useState('Sector 7, Rohini (Home)');
  
  const [toCity, setToCity] = useState('Jaipur');
  const [destPlace, setDestPlace] = useState('Pink City / Amber Fort');

  const [travelDate, setTravelDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [bookingStep, setBookingStep] = useState('search'); // 'search' | 'dispatch' | 'confirmed'
  const [pickupType, setPickupType] = useState('doorstep'); // 'doorstep' | 'stand'
  
  const [driverDispatching, setDriverDispatching] = useState(false);
  const [driverAssigned, setDriverAssigned] = useState(null);
  const [driverUpiId, setDriverUpiId] = useState('driver.rajesh@upi');
  const [driverIdInput, setDriverIdInput] = useState('DRV-8492');

  // Dynamic Fare Calculation
  const isDoorstep = pickupType === 'doorstep';
  const autoFare = isDoorstep ? 180 : 45; // Doorstep cab/auto vs Stand shared auto
  const trainFare = 680;
  const destCabFare = isDoorstep ? 220 : 60;
  const totalFare = autoFare + trainFare + destCabFare;

  const startBooking = () => {
    setBookingStep('dispatch');
    setDriverDispatching(true);

    // Simulate driver matching (Uber/Ola style or stand driver connect)
    setTimeout(() => {
      setDriverDispatching(false);
      setDriverAssigned({
        name: 'Rajesh Kumar',
        phone: '+91 98765 43210',
        rating: '4.9 ★',
        vehicle: 'Authorised Green E-Auto (DL-1R-8492)',
        driverId: 'DRV-8492',
        upi: 'driver.rajesh@upi',
        eta: isDoorstep ? '6 mins to home' : 'Driver ready at Stand Gate 2',
        otp: '4892'
      });
    }, 2500);
  };

  const confirmAllTickets = () => {
    setBookingStep('confirmed');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-15 translate-x-6 -translate-y-6">
          <FiGlobe className="text-9xl" />
        </div>
        <div className="relative z-10">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Pan-India Multi-Modal Connection
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Intercity All-India Route Planner
          </h1>
          <p className="text-sky-100 text-sm mt-1 max-w-xl">
            Select any city & local area across India. Book direct authority tickets (IRCTC/Metro/Bus) + direct authorized driver transfers!
          </p>
        </div>
      </div>

      {bookingStep === 'search' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FiMapPin className="text-sky-500" /> Select Pan-India Connection Route
          </h2>

          {/* From City & Home Place */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">1. Origin City</label>
              <select 
                value={fromCity} 
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-sm font-bold text-slate-800 dark:text-white"
              >
                {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Nearest Place / Home Location</label>
              <input 
                type="text"
                value={homePlace}
                onChange={(e) => setHomePlace(e.target.value)}
                placeholder="e.g. Sector 7, Rohini (Home)"
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-xs font-semibold text-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* To City & Target Place */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">2. Destination City</label>
              <select 
                value={toCity} 
                onChange={(e) => setToCity(e.target.value)}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-sm font-bold text-slate-800 dark:text-white"
              >
                {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Target Destination Place</label>
              <input 
                type="text"
                value={destPlace}
                onChange={(e) => setDestPlace(e.target.value)}
                placeholder="e.g. Pink City / Amber Fort"
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-xs font-semibold text-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Date & Doorstep Preference Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Date of Journey</label>
              <input 
                type="date" 
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-slate-800 dark:text-slate-100 font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Doorstep vs Shared Stand Preference</label>
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <button
                  type="button"
                  onClick={() => setPickupType('doorstep')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition flex flex-col items-center justify-center text-center ${
                    pickupType === 'doorstep' 
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>🚖 Doorstep Cab</span>
                  <span className="text-[10px] opacity-80">(Personal Pickup • ₹180)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPickupType('stand')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition flex flex-col items-center justify-center text-center ${
                    pickupType === 'stand' 
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>🛺 Shared Stand</span>
                  <span className="text-[10px] opacity-80">(Economical • ₹45)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Payment Structure Guarantee Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
              <FiShield className="text-base text-amber-600" /> Transparent Authority & Driver Direct Payment Guarantee
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-amber-800 dark:text-amber-200">
              <div>
                • <strong>Metro/Bus/Train Fares:</strong> Paid directly to DMRC, DTC, & Indian Railways IRCTC.
              </div>
              <div>
                • <strong>Private Auto Fares:</strong> Paid directly from user app to Authorised Driver ID / UPI (0% platform cut!).
              </div>
            </div>
          </div>

          {/* Route Blueprint Overview */}
          <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-extrabold text-sky-900 dark:text-sky-300 uppercase tracking-wider flex items-center gap-2">
              <FiZap className="text-amber-500" /> Multi-Modal Journey ({fromCity} → {toCity})
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
                      {isDoorstep ? 'Personal Doorstep Pickup' : 'Nearest Stand Shared Pickup'} ({fromCity})
                    </h4>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                      ₹{autoFare} (Direct Driver Pay)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {homePlace} → Central Railway Junction ({fromCity}).
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
                      Intercity Express Train ({fromCity} → {toCity})
                    </h4>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded">
                      ₹{trainFare} (IRCTC Direct Authority)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Superfast Express reserved seat. 4h 30m travel time.
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
                      {toCity} Destination Drop-off ({destPlace})
                    </h4>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                      ₹{destCabFare} (Direct Driver Pay)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Authorised Driver meets at {toCity} Junction Exit Gate 2.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-sky-200 dark:border-sky-800">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total Combined Itinerary</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹{totalFare}</p>
              </div>
              <button
                onClick={startBooking}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                Proceed & Connect Driver <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {bookingStep === 'dispatch' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              🚖 Connecting Authorised Driver in {fromCity}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isDoorstep ? `Broadcasting doorstep pickup at ${homePlace}...` : `Connecting with drivers at nearest stand near ${homePlace}...`}
            </p>
          </div>

          {driverDispatching ? (
            <div className="p-8 text-center space-y-4 bg-sky-50 dark:bg-sky-950/30 rounded-2xl border border-sky-100 dark:border-sky-800">
              <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-bold text-sky-800 dark:text-sky-300">
                Contacting authorised driver network...
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Driver Assigned Card */}
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FiCheckCircle /> Driver Assigned & Ready!
                  </span>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">{driverAssigned?.eta}</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xl">
                    👨‍✈️
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{driverAssigned?.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{driverAssigned?.vehicle}</p>
                    <p className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mt-0.5">Driver ID: {driverAssigned?.driverId}</p>
                  </div>
                  <a 
                    href={`tel:${driverAssigned?.phone}`}
                    className="p-3 bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 rounded-xl hover:bg-sky-100"
                  >
                    <FiPhoneCall className="text-xl" />
                  </a>
                </div>

                {/* Direct Driver Pay Box */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl space-y-2 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Direct Driver Payment (UPI / Driver ID Transfer)
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600">₹{autoFare}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Pay ₹{autoFare} directly to Driver UPI <strong className="text-slate-900 dark:text-white">{driverAssigned?.upi}</strong> or enter Driver ID <strong className="text-slate-900 dark:text-white">{driverAssigned?.driverId}</strong> in wallet. App charges 0% cut.
                  </p>
                </div>
              </div>

              {/* Combined Payment Breakdown */}
              <div className="bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Payment Routing Summary</h3>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>{fromCity} Auto Pickup</span>
                    <span className="font-bold text-amber-600">₹{autoFare} (Direct Driver Pay)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{fromCity} → {toCity} Express Train Ticket</span>
                    <span className="font-bold text-emerald-600">₹{trainFare} (Direct IRCTC Authority)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{toCity} Local Convenience Taxi</span>
                    <span className="font-bold text-amber-600">₹{destCabFare} (Direct Driver Pay)</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-600 pt-2 flex justify-between font-bold text-sm text-slate-900 dark:text-white">
                    <span>Total Travel Cost</span>
                    <span className="text-sky-600 dark:text-sky-400">₹{totalFare}</span>
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
                  <FiCreditCard /> Confirm Intercity Multi-Pass
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
              Pan-India Itinerary Booked!
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Your route from {fromCity} ({homePlace}) to {toCity} ({destPlace}) is ready.
            </p>
          </div>

          {/* Master Ticket Card */}
          <div className="bg-gradient-to-b from-sky-50 to-white dark:from-slate-700 dark:to-slate-800 border-2 border-sky-300 dark:border-sky-700 rounded-2xl p-5 text-left space-y-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-sky-100 dark:border-slate-600 pb-3">
              <div>
                <span className="text-[10px] font-bold text-sky-600 uppercase">Pan-India Master Ticket</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white font-mono">SAARTHI-IND-9821</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-1 rounded-full">
                TOTAL ₹{totalFare}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-base">🚖</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 1: {fromCity} Local Pickup ({pickupType === 'doorstep' ? 'Doorstep' : 'Shared Stand'})</p>
                  <p className="text-slate-500">Driver ID: <span className="font-bold text-sky-600">DRV-8492</span> • Fare: ₹{autoFare} (Paid Direct to Driver)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base">🚆</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 2: Express Train ({fromCity} → {toCity})</p>
                  <p className="text-slate-500">Reserved Executive Coach • PNR: 294819204 • Fare: ₹{trainFare} (Direct Authority)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base">🚕</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Leg 3: {toCity} Drop-off ({destPlace})</p>
                  <p className="text-slate-500">Authorized Driver assigned at station exit • Fare: ₹{destCabFare} (Direct to Driver)</p>
                </div>
              </div>
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
