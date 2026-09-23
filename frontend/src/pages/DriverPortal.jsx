import React, { useState } from 'react';
import { 
  FiShield, FiUserCheck, FiDollarSign, FiCheckCircle, 
  FiFileText, FiAward, FiSmartphone, FiUsers, FiZap,
  FiTrendingUp, FiActivity, FiMapPin, FiPhoneCall
} from 'react-icons/fi';

export default function DriverPortal() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'scheme_info' | 'register'
  
  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: 'Suresh Verma',
    phone: '9810234567',
    dlNumber: 'DL-042021008492',
    rcNumber: 'DL-1ER-9821',
    vehicleType: 'E-Rickshaw / Electric Auto',
    govtBadge: 'BADGE-DTC-4892'
  });
  const [registered, setRegistered] = useState(true);

  // Driver Operational State
  const [driverMode, setDriverMode] = useState('shared'); // 'shared' | 'full_auto'
  const [isOnline, setIsOnline] = useState(true);
  const [driverBalance, setDriverBalance] = useState(1480);
  const [incomingRequests, setIncomingRequests] = useState([
    { id: 1, type: 'Home Pickup (Uber/Ola Style)', customer: 'Aryan (Rohini Sec 7)', fare: 120, mode: 'Instant Full', distance: '1.2 km away' },
    { id: 2, type: 'Nearest Stand Pick', customer: 'Priya (IIT Gate)', fare: 45, mode: 'Seat Sharing (3/3 filled)', distance: '0.4 km away' },
  ]);

  const acceptRequest = (id) => {
    const req = incomingRequests.find(r => r.id === id);
    if (req) {
      setDriverBalance(prev => prev + req.fare);
      setIncomingRequests(incomingRequests.filter(r => r.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 pb-24 min-h-screen">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Government Authorised Driver Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Saarthi AI Driver Partner Hub
            </h1>
            <p className="text-emerald-100 text-sm mt-1 max-w-lg">
              Authorized portal for Private Auto & Rickshaw drivers. Fixed govt fares, instant passenger wallet payments & seat capacity management.
            </p>
          </div>

          <div className="flex gap-2 bg-white/10 p-1 rounded-2xl backdrop-blur-md self-stretch sm:self-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'dashboard' ? 'bg-white text-emerald-800 shadow' : 'text-white hover:bg-white/10'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('scheme_info')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'scheme_info' ? 'bg-white text-emerald-800 shadow' : 'text-white hover:bg-white/10'
              }`}
            >
              Govt Schemes
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'register' ? 'bg-white text-emerald-800 shadow' : 'text-white hover:bg-white/10'
              }`}
            >
              Registration
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          
          {/* Driver Status Bar */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-3xl font-bold">
                🛺
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{regForm.name}</h2>
                  <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <FiShield /> Authorised Driver
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Driver ID: <span className="font-bold text-sky-600 dark:text-sky-400 text-sm">DRV-8492</span> • Badge: {regForm.govtBadge}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{regForm.vehicleType} ({regForm.rcNumber})</p>
              </div>
            </div>

            {/* Online Toggle & Balance */}
            <div className="flex flex-wrap items-center justify-end gap-4 w-full md:w-auto border-t md:border-t-0 border-slate-100 dark:border-slate-700 pt-4 md:pt-0">
              <div className="bg-slate-50 dark:bg-slate-700/50 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Wallet Earnings</span>
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">₹{driverBalance}</span>
              </div>

              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm shadow transition flex items-center gap-2 ${
                  isOnline 
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${isOnline ? 'bg-white animate-pulse' : 'bg-slate-400'}`}></span>
                {isOnline ? 'ONLINE (Receiving Rides)' : 'OFFLINE'}
              </button>
            </div>
          </div>

          {/* Passenger Payment Driver ID QR & Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Driver ID QR Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-md border border-slate-100 dark:border-slate-700 text-center space-y-3">
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                Passenger Payment QR Code
              </h3>
              <div className="w-40 h-40 bg-slate-900 mx-auto rounded-2xl p-3 flex flex-col items-center justify-center text-white font-mono text-xs">
                <div className="border-2 border-white/40 p-2 rounded">
                  [ SCAN DRIVER QR ]
                </div>
                <span className="mt-2 text-[10px] text-emerald-400 font-bold">DRIVER ID: DRV-8492</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Passengers enter Driver ID <strong className="text-slate-900 dark:text-white">DRV-8492</strong> in Saarthi AI app for instant wallet credit.
              </p>
            </div>

            {/* Capacity & Operating Rules Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-sky-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-6 shadow-md border border-sky-100 dark:border-slate-700 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <FiZap className="text-amber-500" /> Government Mandated Seat & Capacity Rules
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white dark:bg-slate-700/60 p-4 rounded-xl border border-sky-100 dark:border-slate-600 space-y-1">
                  <span className="font-extrabold text-sky-700 dark:text-sky-300 block">
                    👥 1. Shared Seat Mode (Standard)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Auto fills to full capacity (e.g. 3 seats). Each passenger pays government fixed fare per seat (e.g. ₹15).
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-700/60 p-4 rounded-xl border border-sky-100 dark:border-slate-600 space-y-1">
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-300 block">
                    ⚡ 2. Instant Express Mode (Full Auto)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    If passenger wants to leave immediately without waiting, they pay total price for all 3 seats (3 x ₹15 = ₹45). Driver departs instantly!
                  </p>
                </div>
              </div>

              <div className="bg-emerald-100 dark:bg-emerald-950/60 p-3 rounded-xl text-emerald-900 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-emerald-600 text-base shrink-0" />
                <span>Government Authorized Fare Guarantee: Money directly lands in your Saarthi Driver Wallet with 0% commission cut!</span>
              </div>
            </div>

          </div>

          {/* Incoming Ride Requests (Uber / Ola Style for Saarthi AI Auto Drivers) */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center justify-between">
              <span>🚖 Live Doorstep & Stand Pickup Requests</span>
              <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-full">
                {incomingRequests.length} Active Calls
              </span>
            </h3>

            {incomingRequests.length === 0 ? (
              <div className="p-6 text-center text-slate-500 text-xs">
                No active pickup requests right now. Stay online to receive home pickup alerts!
              </div>
            ) : (
              <div className="space-y-3">
                {incomingRequests.map((req) => (
                  <div key={req.id} className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm">{req.customer}</span>
                        <span className="bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-bold text-[10px] px-2 py-0.5 rounded">
                          {req.mode}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <FiMapPin className="text-sky-500" /> {req.type} • {req.distance}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-xl">₹{req.fare}</span>
                      <button
                        onClick={() => acceptRequest(req.id)}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl shadow transition"
                      >
                        Accept Ride
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {activeTab === 'scheme_info' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Official Government Authorised Schemes</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              Driver Welfare & Electric Auto Incentives
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Saarthi AI is integrated directly with Ministry of Road Transport & Highways (MoRTH) digital transport initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Scheme 1 */}
            <div className="bg-sky-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-sky-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiAward className="text-sky-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">1. PM e-Drive & Delhi EV Subsidy 2.0</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Get up to <strong>₹30,000 direct purchase subsidy</strong> and 5% interest subvention for registering new Electric Auto Rickshaws. Zero road tax for 3 years!
              </p>
            </div>

            {/* Scheme 2 */}
            <div className="bg-emerald-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-emerald-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">2. Government Mandated Fixed Fare Guarantee</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Authorized rates fixed by Transport Department from Metro/Station points to local hubs. Prevents customer haggling and guarantees fair earnings for drivers.
              </p>
            </div>

            {/* Scheme 3 */}
            <div className="bg-amber-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-amber-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiSmartphone className="text-amber-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">3. Digital Fare Meter & Wallet Integration</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                100% cashless payments received via Saarthi Card/Wallet transfer directly to your bank account with daily payout settlements.
              </p>
            </div>

            {/* Scheme 4 */}
            <div className="bg-purple-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-purple-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiUserCheck className="text-purple-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">4. Driver Insurance & Welfare Cover</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                All registered Saarthi AI Drivers get <strong>₹5 Lakh Accident Insurance Cover</strong> and free health checkups at authorized auto stands.
              </p>
            </div>

          </div>
        </div>
      )}

      {activeTab === 'register' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Authorised Driver Registration
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Submit your details to get verified under the Government Authorised Scheme.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setActiveTab('dashboard'); }} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Driver Full Name</label>
                <input 
                  type="text" 
                  value={regForm.name} 
                  onChange={(e) => setRegForm({...regForm, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Mobile Number</label>
                <input 
                  type="text" 
                  value={regForm.phone} 
                  onChange={(e) => setRegForm({...regForm, phone: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Driving License (DL) Number</label>
                <input 
                  type="text" 
                  value={regForm.dlNumber} 
                  onChange={(e) => setRegForm({...regForm, dlNumber: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Vehicle RC Number</label>
                <input 
                  type="text" 
                  value={regForm.rcNumber} 
                  onChange={(e) => setRegForm({...regForm, rcNumber: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Vehicle Type</label>
                <select 
                  value={regForm.vehicleType}
                  onChange={(e) => setRegForm({...regForm, vehicleType: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                >
                  <option>E-Rickshaw / Electric Auto</option>
                  <option>CNG Auto Rickshaw</option>
                  <option>Taxi Cab</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Government Transport Badge No</label>
                <input 
                  type="text" 
                  value={regForm.govtBadge} 
                  onChange={(e) => setRegForm({...regForm, govtBadge: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-medium text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl shadow-md transition"
            >
              Submit Driver Registration & Activate Portal
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
