import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShield, FiUserCheck, FiSmartphone, FiLock, FiArrowRight } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

export default function DriverLogin() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  
  const [driverId, setDriverId] = useState('DRV-8492');
  const [phone, setPhone] = useState('9810234567');
  const [pin, setPin] = useState('1234');

  const handleLogin = (e) => {
    e.preventDefault();
    // Log in driver user
    login({
      name: 'Rajesh Kumar',
      role: 'operator',
      city: 'Delhi',
      driverId: driverId
    });
    navigate('/driver-portal');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 border border-emerald-100 dark:border-slate-700">
        
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-3xl mx-auto font-bold shadow-inner">
            🛺
          </div>
          <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
            Government Authorised Scheme
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Driver Partner Login
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For Private Auto & E-Rickshaw Authorised Drivers
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Driver ID or Mobile Number</label>
            <div className="relative mt-1">
              <FiSmartphone className="absolute left-3 top-3.5 text-slate-400" />
              <input 
                type="text"
                value={driverId}
                onChange={(e) => setDriverId(e.target.value)}
                placeholder="e.g. DRV-8492 or 9810234567"
                className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white uppercase focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">4-Digit Security PIN</label>
            <div className="relative mt-1">
              <FiLock className="absolute left-3 top-3.5 text-slate-400" />
              <input 
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition flex justify-center items-center gap-2 text-sm"
          >
            Log In to Driver Dashboard <FiArrowRight />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-4">
          Need Driver Registration under PM e-Drive?{' '}
          <button 
            onClick={() => navigate('/driver-portal')} 
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
          >
            Register Here
          </button>
        </div>

      </div>
    </div>
  );
}
