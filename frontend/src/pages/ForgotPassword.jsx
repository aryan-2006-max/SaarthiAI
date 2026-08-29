import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-sky-100 w-full max-w-md p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-sky-500 text-2xl font-bold">Reset Password</h1>
          <p className="text-slate-500 mt-2 text-sm">Enter your email to receive a reset link</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-100 text-green-700 p-4 rounded-xl text-center">
            <p className="font-medium">Password reset link sent to your email.</p>
            <p className="text-sm mt-2 opacity-80">Check your inbox and spam folder.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-slate-400" />
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-colors" 
                  placeholder="you@example.com" 
                  required 
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition-colors">
              Reset Password
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="inline-flex items-center text-sky-500 hover:text-sky-700 text-sm font-medium">
            <FiArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
