import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const PlanJourney = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  
  const savedPlaces = ['Home - Connaught Place', 'College - IIT Delhi', 'Office - Cyber Hub'];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/routes');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Plan Your Journey</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From Input */}
        <div className="relative">
          <div className="absolute top-3 left-4 text-slate-400">
            <FiMapPin />
          </div>
          <input 
            type="text" 
            placeholder="Where from?" 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            list="saved-places"
          />
        </div>

        {/* To Input */}
        <div className="relative">
          <div className="absolute top-3 left-4 text-sky-500">
            <FiMapPin />
          </div>
          <input 
            type="text" 
            placeholder="Where to?" 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
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
            <div className="absolute top-3 left-4 text-slate-400">
              <FiCalendar />
            </div>
            <input 
              type="date" 
              defaultValue={new Date().toISOString().split('T')[0]}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          {/* Time Input */}
          <div className="relative">
            <div className="absolute top-3 left-4 text-slate-400">
              <FiClock />
            </div>
            <input 
              type="time" 
              defaultValue={new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* More Options */}
        <div className="pt-2">
          <button 
            type="button" 
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center gap-2 text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
          >
            {showOptions ? <FiChevronUp /> : <FiChevronDown />}
            More Options
          </button>
          
          {showOptions && (
            <div className="mt-4 p-4 bg-sky-50 rounded-xl space-y-4 border border-sky-100">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Transport</label>
                <div className="flex flex-wrap gap-2">
                  {['Bus', 'Metro', 'Auto', 'E-rickshaw', 'Walk'].map(mode => (
                    <label key={mode} className="inline-flex items-center bg-white px-3 py-1.5 rounded-lg border border-sky-100 cursor-pointer hover:bg-sky-50">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-sky-500 rounded border-slate-300 focus:ring-sky-500 mr-2" defaultChecked />
                      <span className="text-sm text-slate-700">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Max Budget (₹)</label>
                <input type="number" placeholder="e.g., 50" className="w-full sm:w-1/2 bg-white border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Accessibility Needs</label>
                <div className="flex flex-wrap gap-2">
                  {['Wheelchair', 'Elderly'].map(need => (
                    <label key={need} className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-sky-500 rounded border-slate-300 focus:ring-sky-500 mr-2" />
                      <span className="text-sm text-slate-600">{need}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Crowd Preference</label>
                <select className="w-full sm:w-1/2 bg-white border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Any</option>
                  <option>Low Only</option>
                  <option>Moderate OK</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-lg"
        >
          Find Best Routes
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Routes</h3>
        <div className="space-y-3">
          <div className="bg-sky-50 p-4 rounded-xl cursor-pointer hover:bg-sky-100 transition-colors border border-sky-100 flex justify-between items-center" onClick={() => navigate('/routes')}>
            <div>
              <p className="font-semibold text-slate-800">Home → College</p>
              <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
                <span className="flex items-center gap-1"><FiClock className="text-sky-500" /> 42 min</span>
                <span>₹35</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm">
              <FiChevronDown className="transform -rotate-90" />
            </div>
          </div>
          <div className="bg-sky-50 p-4 rounded-xl cursor-pointer hover:bg-sky-100 transition-colors border border-sky-100 flex justify-between items-center" onClick={() => navigate('/routes')}>
            <div>
              <p className="font-semibold text-slate-800">Home → Office</p>
              <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
                <span className="flex items-center gap-1"><FiClock className="text-sky-500" /> 55 min</span>
                <span>₹48</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm">
              <FiChevronDown className="transform -rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanJourney;
