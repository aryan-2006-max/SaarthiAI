import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiShield, FiUserCheck, FiDollarSign, FiCheckCircle, 
  FiFileText, FiAward, FiSmartphone, FiUsers, FiZap,
  FiTrendingUp, FiActivity, FiMapPin, FiPhoneCall, FiNavigation,
  FiArrowUpRight, FiCheck, FiX, FiRefreshCw
} from 'react-icons/fi';

export default function DriverPortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'ai_map' | 'withdraw' | 'scheme_info' | 'register'
  
  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: 'Rajesh Kumar',
    phone: '9810234567',
    dlNumber: 'DL-042021008492',
    rcNumber: 'DL-1ER-9821',
    vehicleType: 'E-Rickshaw / Electric Auto',
    govtBadge: 'BADGE-DTC-4892'
  });

  // Operational State
  const [isOnline, setIsOnline] = useState(true);
  const [driverBalance, setDriverBalance] = useState(1480);
  
  // Ride Accepting System
  const [incomingRequests, setIncomingRequests] = useState([
    { id: 1, type: 'Doorstep Home Pickup', customer: 'Aryan Bhakuni (Rohini Sec 7)', fare: 180, mode: 'Personal Cab/Auto', distance: '1.2 km away', phone: '+91 98765 43210' },
    { id: 2, type: 'Nearest Stand Pick', customer: 'Priya Sharma (IIT Main Gate)', fare: 45, mode: 'Shared Stand Auto (3/3 filled)', distance: '0.4 km away', phone: '+91 98123 45678' },
    { id: 3, type: 'Doorstep Pickup', customer: 'Siddharth (Cyber City)', fare: 220, mode: 'Personal Express Auto', distance: '2.5 km away', phone: '+91 97110 88219' },
  ]);

  const [activeRide, setActiveRide] = useState(null);

  // Bank Withdrawal State
  const [withdrawAmt, setWithdrawAmt] = useState('');
  const [upiId, setUpiId] = useState('rajesh.kumar@paytm');
  const [bankAc, setBankAc] = useState('9812048920192');
  const [ifsc, setIfsc] = useState('SBIN0004892');
  const [withdrawMethod, setWithdrawMethod] = useState('upi'); // 'upi' | 'bank'
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  // AI Driver Map Hotspots (Where to drive autos)
  const aiHotspots = [
    { name: 'Rajiv Chowk Metro Exit 2', commuters: 24, status: '🔴 Very High Demand', surge: '+30% Fare', recommendation: 'Deploy here now! High density of metro commuters seeking autos.' },
    { name: 'Anand Vihar ISBT Terminal', commuters: 18, status: '🔴 High Demand', surge: '+20% Fare', recommendation: 'Intercity bus passengers arriving. High demand for doorstep cabs.' },
    { name: 'IIT Delhi Main Gate', commuters: 12, status: '🟡 Moderate Demand', surge: 'Normal Govt Fare', recommendation: 'College hours peak. Ideal for shared seat rides.' },
    { name: 'Cyber City Hub Gurgaon', commuters: 15, status: '🟡 Moderate Demand', surge: '+15% Fare', recommendation: 'Evening office exit. Corporate passengers.' },
  ];

  const acceptRequest = (id) => {
    const req = incomingRequests.find(r => r.id === id);
    if (req) {
      setActiveRide(req);
      setDriverBalance(prev => prev + req.fare);
      setIncomingRequests(incomingRequests.filter(r => r.id !== id));
    }
  };

  const declineRequest = (id) => {
    setIncomingRequests(incomingRequests.filter(r => r.id !== id));
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amt = parseInt(withdrawAmt);
    if (isNaN(amt) || amt <= 0) return;
    if (amt > driverBalance) {
      alert('Withdrawal amount exceeds available wallet balance!');
      return;
    }

    setDriverBalance(prev => prev - amt);
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setWithdrawAmt('');
    }, 4000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 pb-24 min-h-screen">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Authorised Driver Hub
              </span>
              <button 
                onClick={() => navigate('/driver-login')}
                className="bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
              >
                Switch Account
              </button>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Saarthi AI Driver Operating System
            </h1>
            <p className="text-emerald-100 text-sm mt-1 max-w-lg">
              Ride Dispatch • AI Passenger Map Engine • Instant Wallet Payouts
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md self-stretch sm:self-auto">
            {[
              { id: 'dashboard', label: '🚖 Rides' },
              { id: 'ai_map', label: '🗺️ AI Map' },
              { id: 'withdraw', label: '💰 Payouts' },
              { id: 'scheme_info', label: '📜 Schemes' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === tab.id ? 'bg-white text-emerald-800 shadow' : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
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
                    <FiShield /> Verified Driver
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Driver ID: <span className="font-bold text-sky-600 dark:text-sky-400 text-sm">DRV-8492</span> • {regForm.rcNumber}
                </p>
              </div>
            </div>

            {/* Online Toggle & Earnings */}
            <div className="flex flex-wrap items-center justify-end gap-4 w-full md:w-auto border-t md:border-t-0 border-slate-100 dark:border-slate-700 pt-4 md:pt-0">
              <div className="bg-slate-50 dark:bg-slate-700/50 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Available Balance</span>
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

          {/* Active Ongoing Ride (if accepted) */}
          {activeRide && (
            <div className="bg-emerald-500 text-white rounded-3xl p-6 shadow-xl space-y-4 animate-fade-in-out">
              <div className="flex justify-between items-center">
                <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  ⚡ Active Accepted Ride
                </span>
                <span className="text-xs font-bold bg-white text-emerald-800 px-3 py-1 rounded-full">
                  ₹{activeRide.fare} Credited to Driver Wallet
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-extrabold">{activeRide.customer}</h3>
                  <p className="text-xs text-emerald-100">{activeRide.type} • {activeRide.distance}</p>
                </div>
                <a 
                  href={`tel:${activeRide.phone}`}
                  className="bg-white text-emerald-700 p-3 rounded-2xl font-bold flex items-center gap-2 text-xs hover:bg-emerald-50"
                >
                  <FiPhoneCall /> Call Passenger
                </a>
              </div>

              <button
                onClick={() => setActiveRide(null)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-2.5 rounded-xl text-xs"
              >
                Complete Ride
              </button>
            </div>
          )}

          {/* Real-Time Ride Accepting System */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🚖 Live Ride Requests</span>
                <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {incomingRequests.length} Waiting
                </span>
              </h3>
              <button 
                onClick={() => alert('Refreshed ride dispatch feed!')}
                className="text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1"
              >
                <FiRefreshCw /> Refresh Calls
              </button>
            </div>

            {!isOnline ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-700/30 rounded-2xl text-slate-500 text-xs">
                You are currently OFFLINE. Switch status to ONLINE to receive doorstep and stand ride requests.
              </div>
            ) : incomingRequests.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-700/30 rounded-2xl text-slate-500 text-xs">
                No active ride calls at this moment. Stay online!
              </div>
            ) : (
              <div className="space-y-3">
                {incomingRequests.map((req) => (
                  <div 
                    key={req.id} 
                    className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 dark:text-white text-base">{req.customer}</span>
                        <span className={`font-bold text-[10px] px-2 py-0.5 rounded ${
                          req.type.includes('Doorstep') 
                            ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200' 
                            : 'bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200'
                        }`}>
                          {req.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <FiMapPin className="text-sky-500" /> {req.mode} • {req.distance}
                      </p>
                      <p className="text-[10px] text-slate-400">Direct wallet transfer from passenger on acceptance.</p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-2xl">₹{req.fare}</span>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => declineRequest(req.id)}
                          className="bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 p-2.5 rounded-xl hover:bg-slate-300"
                        >
                          <FiX className="text-lg" />
                        </button>
                        <button
                          onClick={() => acceptRequest(req.id)}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-5 py-2.5 rounded-xl shadow transition text-xs flex items-center gap-1"
                        >
                          <FiCheck /> Accept Ride
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Passenger Driver ID QR */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-md border border-slate-100 dark:border-slate-700 text-center space-y-3">
            <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
              Your Passenger Payment QR & Driver ID
            </h3>
            <div className="w-40 h-40 bg-slate-900 mx-auto rounded-2xl p-3 flex flex-col items-center justify-center text-white font-mono text-xs">
              <div className="border-2 border-white/40 p-2 rounded">
                [ DRIVER QR ]
              </div>
              <span className="mt-2 text-[10px] text-emerald-400 font-bold">ID: DRV-8492</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Passengers enter Driver ID <strong className="text-slate-900 dark:text-white">DRV-8492</strong> for instant cashless payments into your wallet.
            </p>
          </div>

        </div>
      )}

      {/* AI Driver Map Engine Tab */}
      {activeTab === 'ai_map' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Smart Deployment Engine</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 flex items-center gap-2">
              <FiNavigation className="text-sky-500" /> AI Driver Map Engine
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Saarthi AI analyzes real-time commuter demand across the city and suggests exactly where to drive your auto for maximum earnings!
            </p>
          </div>

          {/* Heatmap Visual Container */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white space-y-4 relative overflow-hidden min-h-[220px] flex flex-col justify-between border border-slate-700">
            <div className="flex justify-between items-start z-10">
              <div>
                <span className="bg-red-500/80 text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                  🔴 Live Demand Heatmap
                </span>
                <h3 className="text-lg font-bold mt-1">Delhi-NCR Commuter Hotspots</h3>
              </div>
              <span className="text-xs text-slate-400">Updated 1 min ago</span>
            </div>

            {/* Simulated Heatmap Pins */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 z-10">
              <div className="bg-red-950/80 border border-red-500/50 p-3 rounded-xl backdrop-blur-sm">
                <p className="text-xs font-bold text-red-300">Rajiv Chowk Exit 2</p>
                <p className="text-xl font-extrabold text-white">24 Commuters</p>
                <span className="text-[10px] text-red-400 font-bold">+30% Surge Fare</span>
              </div>
              <div className="bg-red-950/80 border border-red-500/50 p-3 rounded-xl backdrop-blur-sm">
                <p className="text-xs font-bold text-red-300">Anand Vihar ISBT</p>
                <p className="text-xl font-extrabold text-white">18 Commuters</p>
                <span className="text-[10px] text-red-400 font-bold">+20% Surge Fare</span>
              </div>
              <div className="bg-amber-950/80 border border-amber-500/50 p-3 rounded-xl backdrop-blur-sm">
                <p className="text-xs font-bold text-amber-300">IIT Delhi Gate</p>
                <p className="text-xl font-extrabold text-white">12 Commuters</p>
                <span className="text-[10px] text-amber-400 font-bold">Standard Fare</span>
              </div>
              <div className="bg-amber-950/80 border border-amber-500/50 p-3 rounded-xl backdrop-blur-sm">
                <p className="text-xs font-bold text-amber-300">Cyber City Gurgaon</p>
                <p className="text-xl font-extrabold text-white">15 Commuters</p>
                <span className="text-[10px] text-amber-400 font-bold">+15% Surge Fare</span>
              </div>
            </div>
          </div>

          {/* AI Hotspots List */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recommended Operating Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiHotspots.map((h, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-600 space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{h.name}</h4>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                      {h.surge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{h.status} • {h.commuters} passengers looking for autos</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-700 p-2.5 rounded-xl border border-slate-200 dark:border-slate-600">
                    💡 <strong>AI Tip:</strong> {h.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Driver Withdrawal Section Tab */}
      {activeTab === 'withdraw' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Earnings Payouts</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 flex items-center gap-2">
              <FiDollarSign className="text-emerald-500" /> Driver Wallet & Bank Withdrawal
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Withdraw your daily passenger earnings directly to your UPI ID or Bank Account instantly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-6 text-white shadow-lg flex justify-between items-center">
            <div>
              <p className="text-xs text-emerald-100 uppercase font-bold tracking-wider">Current Wallet Earnings</p>
              <h3 className="text-4xl font-extrabold mt-1">₹{driverBalance}</h3>
              <p className="text-[11px] text-emerald-200 mt-1">0% Commission platform guarantee</p>
            </div>
            <button
              onClick={() => setWithdrawAmt(driverBalance.toString())}
              className="bg-white text-emerald-800 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow hover:bg-emerald-50"
            >
              Withdraw Full Balance
            </button>
          </div>

          {withdrawSuccess ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 p-5 rounded-2xl text-center space-y-2 animate-fade-in-out">
              <FiCheckCircle className="text-4xl text-emerald-500 mx-auto" />
              <h4 className="font-extrabold text-base">Withdrawal Request Submitted Successfully!</h4>
              <p className="text-xs">₹{withdrawAmt} sent to {withdrawMethod === 'upi' ? upiId : bankAc}. Funds will reflect in your account within 5 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Withdrawal Amount (₹)</label>
                <input 
                  type="number"
                  value={withdrawAmt}
                  onChange={(e) => setWithdrawAmt(e.target.value)}
                  placeholder="Enter amount to withdraw"
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-sm font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Payout Destination</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setWithdrawMethod('upi')}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition ${
                      withdrawMethod === 'upi'
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow'
                        : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    📲 Direct UPI Transfer
                  </button>
                  <button
                    type="button"
                    onClick={() => setWithdrawMethod('bank')}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition ${
                      withdrawMethod === 'bank'
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow'
                        : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    🏛️ Bank Account (NEFT/IMPS)
                  </button>
                </div>
              </div>

              {withdrawMethod === 'upi' ? (
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Registered UPI ID</label>
                  <input 
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-bold text-slate-900 dark:text-white"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Bank Account Number</label>
                    <input 
                      type="text"
                      value={bankAc}
                      onChange={(e) => setBankAc(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-bold text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Bank IFSC Code</label>
                    <input 
                      type="text"
                      value={ifsc}
                      onChange={(e) => setIfsc(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!withdrawAmt}
                className="w-full bg-emerald-500 disabled:bg-slate-300 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition"
              >
                Withdraw Earnings to Bank Account
              </button>
            </form>
          )}
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
            
            <div className="bg-sky-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-sky-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiAward className="text-sky-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">1. PM e-Drive & Delhi EV Subsidy 2.0</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Get up to <strong>₹30,000 direct purchase subsidy</strong> and 5% interest subvention for registering new Electric Auto Rickshaws. Zero road tax for 3 years!
              </p>
            </div>

            <div className="bg-emerald-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-emerald-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">2. Government Mandated Fixed Fare Guarantee</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Authorized rates fixed by Transport Department from Metro/Station points to local hubs. Prevents customer haggling and guarantees fair earnings for drivers.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-slate-700/40 p-5 rounded-2xl border border-amber-100 dark:border-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <FiSmartphone className="text-amber-600 text-xl" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">3. Digital Fare Meter & Wallet Integration</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                100% cashless payments received via Saarthi Card/Wallet transfer directly to your bank account with daily payout settlements.
              </p>
            </div>

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

    </div>
  );
}
