import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiClock, FiAlertTriangle, FiRefreshCw, FiX, FiCheck, FiNavigation } from 'react-icons/fi';

const LiveJourney = () => {
  const navigate = useNavigate();
  const [currentSegment, setCurrentSegment] = useState(0);
  const [showDisruption, setShowDisruption] = useState(false);
  const [journeyCompleted, setJourneyCompleted] = useState(false);
  const [switchedRoute, setSwitchedRoute] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const defaultSegments = [
    { mode: 'Walk', from: 'Home', to: 'Stand', time: '5 min', cost: 0, icon: '🚶' },
    { mode: 'E-rickshaw', from: 'Stand', to: 'Bus Stop', time: '8 min', cost: 15, icon: '🛺' },
    { mode: 'Bus 127', from: 'Bus Stop', to: 'Metro', time: '15 min', cost: 10, icon: '🚌' },
    { mode: 'Metro Blue Line', from: 'Station', to: 'IIT Delhi', time: '12 min', cost: 30, icon: '🚇' },
    { mode: 'Walk', from: 'IIT Delhi Station', to: 'Campus', time: '6 min', cost: 0, icon: '🚶' },
  ];

  const altSegments = [
    { mode: 'Walk', from: 'Home', to: 'Stand', time: '5 min', cost: 0, icon: '🚶' },
    { mode: 'E-rickshaw', from: 'Stand', to: 'Bus Stop', time: '8 min', cost: 15, icon: '🛺' },
    { mode: 'Bus 127', from: 'Bus Stop', to: 'Transfer', time: '15 min', cost: 10, icon: '🚌' },
    { mode: 'Bus 56 & 78', from: 'Transfer', to: 'IIT Delhi', time: '20 min', cost: 12, icon: '🚌' }, // Switched part
    { mode: 'E-rickshaw', from: 'Bus Stop', to: 'Campus', time: '6 min', cost: 10, icon: '🛺' },
  ];

  const segments = switchedRoute ? altSegments : defaultSegments;

  useEffect(() => {
    if (journeyCompleted) return;
    
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000); // 1s real time = 1 min sim time

    return () => clearInterval(timer);
  }, [journeyCompleted]);

  useEffect(() => {
    if (journeyCompleted || showDisruption) return;

    const segmentTimer = setInterval(() => {
      setCurrentSegment(prev => {
        if (prev === 2 && !switchedRoute) {
          setShowDisruption(true);
          return prev;
        }
        if (prev < segments.length - 1) {
          return prev + 1;
        } else {
          setJourneyCompleted(true);
          return prev;
        }
      });
    }, 5000);

    return () => clearInterval(segmentTimer);
  }, [showDisruption, journeyCompleted, segments.length, switchedRoute]);

  const handleSwitchRoute = () => {
    setSwitchedRoute(true);
    setShowDisruption(false);
  };

  const handleContinue = () => {
    setShowDisruption(false);
  };

  if (journeyCompleted) {
    return (
      <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCheck className="text-green-500 text-3xl" />
          </div>
          <h2 className="text-xl font-bold text-center text-slate-900 mb-2">Journey Completed!</h2>
          
          <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl">
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">Total Time</span>
              <span className="font-semibold text-slate-900">46 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">Segments Completed</span>
              <span className="font-semibold text-slate-900">{segments.length}</span>
            </div>
            <div className="border-t border-slate-200 my-2 pt-2">
              <p className="text-center text-sm font-medium text-slate-800">Fare deducted from Saarthi Card: <span className="text-red-500 font-bold">₹55</span></p>
              <p className="text-center text-xs text-slate-500 mt-1">New Balance: ₹795</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/wallet')}
            className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold mb-3 hover:bg-sky-600"
          >
            View Transaction
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentSeg = segments[currentSegment];

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="p-4 space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Live Journey - Route B</h1>
            <p className="text-sm text-slate-500">Home → IIT Delhi</p>
          </div>
          <button onClick={() => navigate('/')} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-100">
            <FiX />
          </button>
        </header>

        {/* Map Placeholder */}
        <div className="bg-sky-50 rounded-2xl h-48 border border-sky-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwZWE1ZTkiLz48L3N2Zz4=')]"></div>
          <div className="z-10 flex flex-col items-center">
            <FiNavigation className="text-sky-500 text-4xl mb-2" />
            <p className="text-sm font-medium text-sky-800 bg-white/80 px-3 py-1 rounded-full shadow-sm">Following Live Route...</p>
          </div>
        </div>

        {/* Journey Progress */}
        <div className="py-4 overflow-x-auto hide-scrollbar">
          <div className="flex items-center min-w-max px-2">
            {segments.map((seg, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg z-10 
                    ${idx < currentSegment ? 'bg-green-500 text-white shadow-md shadow-green-200' : 
                      idx === currentSegment ? 'bg-sky-500 text-white shadow-lg shadow-sky-300 animate-pulse' : 
                      'bg-slate-100 text-slate-400 border-2 border-slate-200'}`}
                  >
                    {idx < currentSegment ? <FiCheck /> : seg.icon}
                  </div>
                  <span className={`text-[10px] mt-2 font-medium ${idx === currentSegment ? 'text-sky-600' : 'text-slate-500'}`}>{seg.mode}</span>
                </div>
                {idx < segments.length - 1 && (
                  <div className={`w-12 h-1 mx-1 rounded-full ${idx < currentSegment ? 'bg-green-500' : 'bg-slate-200'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Current Segment Card */}
        <div className="bg-white border-2 border-sky-200 rounded-2xl p-5 shadow-md shadow-sky-50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-bold text-sky-500 tracking-wider uppercase mb-1 block">Current Segment</span>
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <span className="mr-2">{currentSeg.icon}</span> {currentSeg.mode}
              </h2>
            </div>
            <div className="bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100">
              <span className="text-sm font-bold text-sky-700">{currentSeg.time}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <div className="w-0.5 h-8 bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-sky-500"></div>
            </div>
            <div className="flex flex-col justify-between h-14">
              <p className="text-sm text-slate-600 font-medium">{currentSeg.from}</p>
              <p className="text-sm text-slate-900 font-bold">{currentSeg.to}</p>
            </div>
          </div>
        </div>

        {/* ETA Display */}
        <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-100">
          <div className="flex items-center space-x-2">
            <FiClock className="text-slate-500" />
            <span className="text-sm text-slate-600">Total ETA</span>
          </div>
          <span className="font-bold text-slate-900 text-lg">
            {segments.slice(currentSegment).reduce((acc, curr) => acc + parseInt(curr.time), 0)} min remaining
          </span>
        </div>

        {/* Disruption Alert */}
        {showDisruption && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-lg shadow-amber-100/50 animate-bounce-slight">
            <div className="flex items-start space-x-3 mb-3">
              <div className="bg-amber-100 p-2 rounded-full mt-0.5">
                <FiAlertTriangle className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-amber-900">⚠️ Metro Blue Line Disruption</h3>
                <p className="text-sm text-amber-800 mt-1">Service delayed by approximately 15 minutes due to signal failure at Rajiv Chowk.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-amber-200 mb-4">
              <h4 className="text-sm font-bold text-sky-700 mb-2">AI Suggested Alternative:</h4>
              <p className="font-medium text-slate-800 mb-2">Bus 56 → Bus 78 → E-rickshaw</p>
              <div className="flex space-x-4 text-xs">
                <span className="text-red-500 font-medium">+8 min</span>
                <span className="text-red-500 font-medium">Additional cost: ₹12</span>
              </div>
              <p className="text-xs text-slate-500 mt-2 bg-slate-50 p-2 rounded">This route avoids the metro disruption entirely.</p>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={handleSwitchRoute}
                className="flex-1 bg-sky-500 text-white py-2.5 rounded-xl font-semibold shadow-md shadow-sky-200 text-sm"
              >
                Switch Route
              </button>
              <button 
                onClick={handleContinue}
                className="flex-1 bg-white border border-amber-300 text-amber-700 py-2.5 rounded-xl font-semibold text-sm"
              >
                Continue Current
              </button>
            </div>
          </div>
        )}

        {/* Journey Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">Time Elapsed</span>
            <span className="font-bold text-slate-900">{elapsedTime} min</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">Estimated Cost</span>
            <span className="font-bold text-slate-900">₹{segments.reduce((acc, curr) => acc + curr.cost, 0)}</span>
          </div>
        </div>

        {/* End Journey Button */}
        <button 
          onClick={() => setJourneyCompleted(true)}
          className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold border border-red-200 mt-4"
        >
          End Journey Early
        </button>

      </div>
    </div>
  );
};

export default LiveJourney;
