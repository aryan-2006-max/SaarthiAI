import React, { useState } from 'react';
import { FiPhoneCall, FiShare2, FiMapPin, FiShield, FiX } from 'react-icons/fi';

const SafetyMode = () => {
  const [showSOS, setShowSOS] = useState(false);
  const [shareJourney, setShareJourney] = useState(false);
  const [routeAlert, setRouteAlert] = useState(true);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Safety Features</h1>

      <div className="bg-sky-50 rounded-2xl p-6 mb-8 text-center border border-sky-100">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-green-500 mb-3">
          <div className="text-2xl font-bold text-green-600">85</div>
        </div>
        <h2 className="font-bold text-slate-900 text-lg">Area Safety Score</h2>
        <p className="text-sm text-slate-600">Connaught Place is generally safe at this hour.</p>
      </div>

      <div className="mb-10 text-center">
        <button 
          onClick={() => setShowSOS(true)}
          className="bg-red-500 text-white rounded-full w-32 h-32 mx-auto flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse hover:bg-red-600 transition"
        >
          SOS
        </button>
        <p className="text-sm text-slate-500 mt-3">Hold for 3s in real app</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-sky-100 p-2 rounded-lg text-sky-600"><FiShare2 /></div>
            <div>
              <div className="font-semibold text-slate-900">Share Journey</div>
              <div className="text-xs text-slate-500">Live track with contacts</div>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={shareJourney} onChange={() => setShareJourney(!shareJourney)} />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><FiMapPin /></div>
            <div>
              <div className="font-semibold text-slate-900">Route Deviation Alert</div>
              <div className="text-xs text-slate-500">Notify if off-route</div>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={routeAlert} onChange={() => setRouteAlert(!routeAlert)} />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-slate-900">Emergency Contacts</h2>
           <button className="text-sky-500 text-sm font-medium">Add New</button>
        </div>
        <div className="space-y-3">
          {['Rahul Sharma (Father)', 'Priya Sharma (Mother)', 'Delhi Police Helpline (112)'].map((contact, i) => (
             <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
               <span className="text-sm font-medium text-slate-800">{contact}</span>
               <button className="text-sky-500 bg-sky-50 p-2 rounded-lg"><FiPhoneCall size={16}/></button>
             </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-50 p-4 rounded-xl flex items-start gap-3 pb-20">
        <FiShield className="text-sky-600 mt-1 flex-shrink-0" />
        <p className="text-sm text-slate-700">Stay in well-lit areas. Our AI constantly monitors your route for safety anomalies and will alert your contacts if something seems wrong.</p>
      </div>

      {showSOS && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-red-600">Emergency Alert</h3>
              <button onClick={() => setShowSOS(false)} className="text-slate-400 hover:text-slate-600"><FiX size={24}/></button>
            </div>
            <p className="text-slate-900 font-medium mb-2">Your location has been shared.</p>
            <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 font-mono mb-4">
              28.6139°N, 77.2090°E<br/>Connaught Place, Delhi
            </div>
            <div className="text-sm text-slate-600 mb-4">
              Alert sent to:<br/>
              • Rahul Sharma<br/>
              • Priya Sharma<br/>
              • Delhi Police
            </div>
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
              Alert Sent (Simulated)
            </div>
            <p className="text-xs text-slate-400">⚠️ This is a demo. Real emergency services are not contacted.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyMode;
