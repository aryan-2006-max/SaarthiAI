import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiShield } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      login(email, password);
      navigate('/home');
    } catch (err) {
      setError('Login failed. Try a demo account.');
    }
    setLoading(false);
  };

  const handleDemoLogin = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    login(demoEmail, demoPass);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-sky-100 w-full max-w-md p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-sky-500 text-3xl font-bold">SaarthiAI</h1>
          <p className="text-slate-500 mt-2 text-sm">Your Intelligent Mobility Companion</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-slate-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-slate-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sky-500 text-sm hover:text-sky-700">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-6">
          Don't have an account? <Link to="/register" className="text-sky-500 font-medium hover:text-sky-700">Create Account</Link>
        </p>

        {/* Demo Quick Login */}
        <div className="mt-8 pt-6 border-t border-sky-100">
          <p className="text-center text-xs text-slate-400 mb-4 uppercase tracking-wide font-medium">Quick Demo Login</p>
          <div className="space-y-2">
            <button
              onClick={() => handleDemoLogin('user@saarthi.ai', 'password123')}
              className="w-full flex items-center justify-center space-x-2 bg-sky-50 hover:bg-sky-100 text-sky-700 py-3 rounded-xl text-sm font-medium transition-colors border border-sky-200"
            >
              <FiUser className="w-4 h-4" />
              <span>Login as Commuter (Aryan)</span>
            </button>
            <button
              onClick={() => handleDemoLogin('operator@saarthi.ai', 'password123')}
              className="w-full flex items-center justify-center space-x-2 bg-sky-50 hover:bg-sky-100 text-sky-700 py-3 rounded-xl text-sm font-medium transition-colors border border-sky-200"
            >
              <FiShield className="w-4 h-4" />
              <span>Login as Transport Operator</span>
            </button>
            <button
              onClick={() => handleDemoLogin('admin@saarthi.ai', 'password123')}
              className="w-full flex items-center justify-center space-x-2 bg-sky-50 hover:bg-sky-100 text-sky-700 py-3 rounded-xl text-sm font-medium transition-colors border border-sky-200"
            >
              <FiShield className="w-4 h-4" />
              <span>Login as Admin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
