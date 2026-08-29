import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiLock, FiMapPin, FiGlobe, FiBriefcase } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

const Register = () => {
  const navigate = useNavigate();
  const register = useAuthStore(state => state.register);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    city: 'Delhi',
    language: 'English',
    userType: 'Commuter'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.name || !formData.email || !formData.mobile || !formData.password) {
      setError('Please fill all required fields');
      return;
    }
    // Mock success
    register(formData);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-sky-100 w-full max-w-md p-6 sm:p-8">
        <div className="text-center mb-6">
          <h1 className="text-sky-500 text-2xl font-bold">Create Account</h1>
          <p className="text-slate-500 mt-1 text-sm">Join the intelligent mobility network</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-slate-700 text-xs font-medium mb-1">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-slate-400" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm" placeholder="John Doe" required />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-medium mb-1">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-slate-400" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm" placeholder="john@example.com" required />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-medium mb-1">Mobile Number</label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-3 text-slate-400" />
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm" placeholder="9876543210" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-slate-400" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm" placeholder="••••••••" required />
              </div>
            </div>
            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1">Confirm</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-slate-400" />
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm" placeholder="••••••••" required />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1">City</label>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-3 text-slate-400" />
                <select name="city" value={formData.city} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm bg-white">
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                  <option>Pune</option>
                  <option>Hyderabad</option>
                  <option>Lucknow</option>
                  <option>Nashik</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1">Language</label>
              <div className="relative">
                <FiGlobe className="absolute left-3 top-3 text-slate-400" />
                <select name="language" value={formData.language} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm bg-white">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-medium mb-1">User Type</label>
            <div className="relative">
              <FiBriefcase className="absolute left-3 top-3 text-slate-400" />
              <select name="userType" value={formData.userType} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none text-sm bg-white">
                <option>Commuter</option>
                <option>Transport Operator</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold mt-4 transition-colors">
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-slate-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-sky-500 font-medium hover:text-sky-700">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
