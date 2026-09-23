import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiClock, FiChevronDown, FiChevronUp, FiZap, FiCheckCircle } from 'react-icons/fi';

const PlanJourney = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [fromLocation, setFromLocation] = useState('Home (Rohini)');
  const [toLocation, setToLocation] = useState('College - IIT Delhi');
  
  const savedPlaces = ['Home - Rohini', 'College - IIT Delhi', 'Office - Cyber Hub', 'New Delhi Railway Station'];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/routes');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-6 pb-24 transition-colors">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">Plan Your Journey</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Find recommended multimodal routes and book tickets for all conveyances in 1 click!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From Input */}
        <div className="relative">
          <div className="absolute top-3.5 left-4 text-slate-400">
            <FiMapPin />
          </div>
          <input 
            type="text" 
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Where from?" 
            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl py-3 pl-10 pr-4 text-slate-800 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
            list="saved-places"
          />
        </div>

        {/* To Input */}
        <div className="relative">
          <div className="absolute top-3.5 left-4 text-sky-500">
            <FiMapPin />
          </div>
          <input 
            type="text" 
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Where to?" 
            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl py-3 pl-10 pr-4 text-slate-800 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
            list="saved-places"
          />
        </div>

        <datalist id="saved-places">
          {savedPlaces.map((place, idx) => (
            <option key={idx} value={place} />
          ))}
        </datalist>

        <div className="grid grid-cols-2 gap-4">
          {/* Date Input */}
          <div className="relative">
            <div className="absolute top-3.5 left-4 text-slate-400">
              <FiCalendar />
            </div>
            <input 
              type="date" 
              defaultValue={new Date().toISOString().split('T')[0]}
              className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl py-3 pl-10 pr-4 text-slate-800 dark:text-white font-medium text-xs"
            />
          </div>
          {/* Time Input */}
          <div className="relative">
            <div className="absolute top-3.5 left-4 text-slate-400">
              <FiClock />
            </div>
            <input 
              type="time" 
              defaultValue={new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
              className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl py-3 pl-10 pr-4 text-slate-800 dark:text-white font-medium text-xs"
            />
          </div>
        </div>

        {/* More Options */}
        <div className="pt-1">
          <button 
            type="button" 
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs hover:underline"
          >
            {showOptions ? <FiChevronUp /> : <FiChevronDown />}
            More Search Options
          </button>
          
          {showOptions && (
            <div className="mt-4 p-4 bg-sky-50 dark:bg-slate-700/50 rounded-2xl space-y-4 border border-sky-100 dark:border-slate-600 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-200 mb-2">Preferred Transports</label>
                <div className="flex flex-wrap gap-2">
                  {['Bus', 'Metro', 'Auto', 'E-rickshaw', 'Walk'].map(mode => (
                    <label key={mode} className="inline-flex items-center bg-white dark:bg-slate-600 px-3 py-1.5 rounded-xl border border-sky-100 dark:border-slate-500 cursor-pointer">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-sky-500 rounded mr-2" defaultChecked />
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-4 rounded-2xl shadow-md transition-all text-base flex justify-center items-center gap-2"
        >
          Find Recommended Routes & Book All
        </button>
      </form>

      {/* Quick Routes Section */}
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3">
        <h3 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Saved Routine Commutes
        </h3>

        <div 
          className="bg-gradient-to-r from-sky-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700/60 p-4 rounded-2xl cursor-pointer hover:shadow-md transition border border-sky-100 dark:border-slate-600 flex justify-between items-center" 
          onClick={() => navigate('/routes')}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm">Home → College - IIT Delhi</span>
              <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">⭐ Recommended</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 mt-1">
              <span className="flex items-center gap-1 font-semibold"><FiClock className="text-sky-500" /> 42 min</span>
              <span className="font-bold text-emerald-600">₹42 Total (1-Click Book All)</span>
            </div>
          </div>
          <button className="bg-emerald-500 text-white p-2.5 rounded-xl text-xs font-bold shadow flex items-center gap-1">
            <FiZap /> Book All
          </button>
        </div>

        <div 
          className="bg-slate-50 dark:bg-slate-700/40 p-4 rounded-2xl cursor-pointer hover:shadow-md transition border border-slate-200 dark:border-slate-600 flex justify-between items-center" 
          onClick={() => navigate('/routes')}
        >
          <div>
            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Home → Office - Cyber Hub</p>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
              <span className="flex items-center gap-1"><FiClock className="text-sky-500" /> 55 min</span>
              <span>₹48 Total</span>
            </div>
          </div>
          <div className="w-9 h-9 bg-white dark:bg-slate-600 rounded-full flex items-center justify-center text-sky-500 shadow-sm">
            <FiChevronDown className="transform -rotate-90" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PlanJourney;
