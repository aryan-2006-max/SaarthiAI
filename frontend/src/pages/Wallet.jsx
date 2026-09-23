import React, { useState } from 'react';
import { 
  FiPlus, FiTrendingUp, FiDollarSign, FiCreditCard, FiArrowUpRight, 
  FiArrowDownLeft, FiX, FiCheck, FiShield, FiSend, FiQrCode, FiZap 
} from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, CartesianGrid } from 'recharts';

const Wallet = () => {
  const [balance, setBalance] = useState(850);
  const [metroPassBalance, setMetroPassBalance] = useState(450);
  const [busPassBalance, setBusPassBalance] = useState(120);

  const [addAmount, setAddAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbank'
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('Money added to Commuter Wallet successfully!');

  // Direct Driver Pay State
  const [driverPayId, setDriverPayId] = useState('');
  const [driverPayAmt, setDriverPayAmt] = useState('');
  const [driverPaySuccess, setDriverPaySuccess] = useState(false);

  const dailyData = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 62 },
    { day: 'Wed', amount: 38 },
    { day: 'Thu', amount: 55 },
    { day: 'Fri', amount: 48 },
    { day: 'Sat', amount: 25 },
    { day: 'Sun', amount: 0 },
  ];

  const pieData = [
    { name: 'Bus', value: 35, color: '#0EA5E9' },
    { name: 'Metro', value: 40, color: '#0284C7' },
    { name: 'Auto', value: 15, color: '#0369A1' },
    { name: 'E-rickshaw', value: 10, color: '#7DD3FC' },
  ];

  const handleAddMoney = () => {
    if (!addAmount) return;
    const amt = parseInt(addAmount.replace('₹', ''));
    if (isNaN(amt) || amt <= 0) return;
    
    setBalance(prev => prev + amt);
    setAddAmount('');
    setSuccessMsg(`₹${amt} added to Commuter Transit Balance via ${paymentMethod.toUpperCase()}!`);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const handleDirectDriverPay = (e) => {
    e.preventDefault();
    if (!driverPayId || !driverPayAmt) return;
    const amt = parseInt(driverPayAmt);
    if (isNaN(amt) || amt <= 0) return;

    if (amt > balance) {
      alert('Insufficient wallet balance! Please add money first.');
      return;
    }

    setBalance(prev => prev - amt);
    setDriverPaySuccess(true);
    setTimeout(() => {
      setDriverPaySuccess(false);
      setDriverPayId('');
      setDriverPayAmt('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20 transition-colors">
      <div className="p-4 sm:p-6 space-y-6 max-w-4xl mx-auto">
        
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Commuter Wallet & Direct Payments</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Cashless Authority passes + Direct Authorized Driver transfers</p>
        </header>

        {showSuccess && (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl flex items-center space-x-2 animate-fade-in-out">
            <FiCheck className="text-emerald-500 text-lg" />
            <span className="text-sm font-medium">{successMsg}</span>
          </div>
        )}

        {/* Balance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Main Wallet */}
          <div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <p className="text-sky-100 font-medium text-xs mb-1 relative z-10 uppercase tracking-wider">Commuter Wallet Balance</p>
            <h2 className="text-4xl font-extrabold relative z-10">₹{balance}</h2>
            <p className="text-[11px] text-sky-200 mt-2 relative z-10 flex items-center">
              <FiCreditCard className="mr-1" /> Linked to Saarthi Card #2847
            </p>
          </div>

          {/* DMRC Metro Pass */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-5 shadow-md flex flex-col justify-between">
            <div>
              <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">DMRC Direct Pass</span>
              <p className="text-xs opacity-80 mt-2">Metro Card Pass Balance</p>
              <h3 className="text-2xl font-bold mt-1">₹{metroPassBalance}</h3>
            </div>
            <p className="text-[10px] opacity-70 mt-2">Direct Authority Cashless Transit</p>
          </div>

          {/* DTC Bus Pass */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-5 shadow-md flex flex-col justify-between">
            <div>
              <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">DTC Direct Pass</span>
              <p className="text-xs opacity-80 mt-2">Electric Bus Daily Pass</p>
              <h3 className="text-2xl font-bold mt-1">₹{busPassBalance}</h3>
            </div>
            <p className="text-[10px] opacity-70 mt-2">Direct Authority Cashless Transit</p>
          </div>

        </div>

        {/* 1. Commuter Add Money Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <FiPlus className="text-sky-500" /> Commuter Add Money Section
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase">Enter Top-Up Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                <input 
                  type="number"
                  value={addAmount.replace('₹', '')}
                  onChange={(e) => setAddAmount('₹' + e.target.value)}
                  placeholder="e.g. 500"
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl py-3.5 pl-9 pr-4 font-bold text-slate-900 dark:text-white text-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {['100', '200', '500', '1000'].map(amt => (
                  <button 
                    key={amt}
                    type="button"
                    onClick={() => setAddAmount('₹' + amt)}
                    className="bg-sky-50 dark:bg-slate-700 text-sky-700 dark:text-sky-300 py-2 rounded-xl font-bold border border-sky-100 dark:border-slate-600 hover:bg-sky-100 text-xs transition"
                  >
                    +₹{amt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`py-2.5 rounded-xl font-bold text-xs border transition flex flex-col items-center justify-center ${
                    paymentMethod === 'upi'
                      ? 'bg-sky-500 text-white border-sky-500 shadow'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>📲 UPI</span>
                  <span className="text-[9px] opacity-80">(GPay/PhonePe)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2.5 rounded-xl font-bold text-xs border transition flex flex-col items-center justify-center ${
                    paymentMethod === 'card'
                      ? 'bg-sky-500 text-white border-sky-500 shadow'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>💳 Card</span>
                  <span className="text-[9px] opacity-80">(Debit/Credit)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbank')}
                  className={`py-2.5 rounded-xl font-bold text-xs border transition flex flex-col items-center justify-center ${
                    paymentMethod === 'netbank'
                      ? 'bg-sky-500 text-white border-sky-500 shadow'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <span>🏛️ NetBank</span>
                  <span className="text-[9px] opacity-80">(All Banks)</span>
                </button>
              </div>

              <button 
                onClick={handleAddMoney}
                disabled={!addAmount || addAmount === '₹'}
                className="w-full bg-sky-500 disabled:bg-slate-200 disabled:text-slate-400 text-white py-3.5 rounded-2xl font-extrabold shadow hover:bg-sky-600 transition"
              >
                Add Money to Commuter Wallet
              </button>
            </div>
          </div>
        </div>

        {/* 2. Direct Authorised Driver Payment Module */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-6 shadow-sm border border-emerald-100 dark:border-slate-700 space-y-4">
          <div>
            <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
              Private Auto/Rickshaw Direct Driver Pay
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1 flex items-center gap-2">
              <FiSend className="text-emerald-600" /> Pay Authorized Driver Directly
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              Private auto fares are NOT kept by the app. Enter Driver ID or UPI to send money directly to the driver's wallet with 0% platform fee!
            </p>
          </div>

          {driverPaySuccess ? (
            <div className="bg-emerald-500 text-white p-4 rounded-2xl text-center space-y-1 animate-fade-in-out">
              <FiCheck className="text-3xl mx-auto" />
              <p className="font-extrabold text-sm">₹{driverPayAmt} Transferred Directly to Driver {driverPayId}!</p>
              <p className="text-xs text-emerald-100">Driver notified instantly with 0% platform deduction.</p>
            </div>
          ) : (
            <form onSubmit={handleDirectDriverPay} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Driver ID or UPI ID</label>
                <input 
                  type="text" 
                  value={driverPayId}
                  onChange={(e) => setDriverPayId(e.target.value)}
                  placeholder="e.g. DRV-8492 or driver@upi"
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Fare Amount (₹)</label>
                <input 
                  type="number" 
                  value={driverPayAmt}
                  onChange={(e) => setDriverPayAmt(e.target.value)}
                  placeholder="e.g. 45"
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex items-end">
                <button 
                  type="submit"
                  disabled={!driverPayId || !driverPayAmt}
                  className="w-full bg-emerald-500 disabled:bg-slate-300 text-white py-2.5 px-4 rounded-xl font-extrabold shadow hover:bg-emerald-600 text-xs transition"
                >
                  Pay Driver Directly
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Charts & Spending Summary */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Daily Commute Spending (Last 7 Days)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748B' }} tickFormatter={(val) => `₹${val}`} />
                  <Tooltip 
                    cursor={{ fill: '#F1F5F9' }} 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`₹${value}`, 'Spent']}
                  />
                  <Bar dataKey="amount" fill="#38BDF8" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Wallet;
