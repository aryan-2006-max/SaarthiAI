import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const [opacity, setOpacity] = useState('opacity-0');
  const navigate = useNavigate();

  useEffect(() => {
    // Fade in effect
    setTimeout(() => setOpacity('opacity-100'), 100);

    // Auto navigate
    const timer = setTimeout(() => {
      const token = localStorage.getItem('saarthi_token');
      if (token) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-sky-500 to-sky-700 flex flex-col items-center justify-center transition-opacity duration-1000 ${opacity}`}>
      <h1 className="text-white text-5xl font-bold mb-4 tracking-tight">SaarthiAI</h1>
      <p className="text-white/80 text-lg font-medium text-center px-4">Your Intelligent Mobility Companion</p>
      <p className="text-white/60 text-sm mt-3 text-center px-4">Plan smarter → Predict better → Travel easier</p>
    </div>
  );
};

export default SplashScreen;
