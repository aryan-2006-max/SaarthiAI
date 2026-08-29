import React, { useState } from 'react';
import { FiPlus, FiThumbsUp, FiMapPin, FiCamera, FiX, FiFilter } from 'react-icons/fi';

const CommunityReports = () => {
  const [showModal, setShowModal] = useState(false);

  const reports = [
    { id: 1, type: 'Traffic Jam', icon: '🚗', location: 'ITO Intersection', desc: 'Heavy traffic due to signal failure.', severity: 'High', status: 'Verified', upvotes: 24, time: '10 mins ago' },
    { id: 2, type: 'Bus Overcrowding', icon: '🚌', location: 'AIIMS Bus Stand', desc: 'Route 522 buses are completely packed.', severity: 'Medium', status: 'Pending', upvotes: 8, time: '25 mins ago' },
    { id: 3, type: 'Waterlogging', icon: '🌧️', location: 'Minto Bridge', desc: 'Underpass flooded, avoid route.', severity: 'High', status: 'Verified', upvotes: 56, time: '1 hour ago' },
    { id: 4, type: 'Road Damage', icon: '🚧', location: 'Lajpat Nagar Ring Road', desc: 'Large pothole in the left lane.', severity: 'Low', status: 'Resolved', upvotes: 12, time: '3 hours ago' },
    { id: 5, type: 'Accident', icon: '⚠️', location: 'DND Flyway', desc: 'Minor collision, traffic moving slowly.', severity: 'Medium', status: 'Verified', upvotes: 19, time: '4 hours ago' }
  ];

  const getSeverityColor = (sev) => {
    return sev === 'High' ? 'bg-red-100 text-red-600' : sev === 'Medium' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600';
  };
  
  const getStatusColor = (stat) => {
    return stat === 'Resolved' ? 'bg-green-100 text-green-700' : stat === 'Verified' ? 'bg-sky-100 text-sky-700' : 'bg-amber-100 text-amber-700';
  };

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Community Reports</h1>
        <button onClick={() => setShowModal(true)} className="bg-sky-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-sky-600 shadow-sm">
          <FiPlus /> New Report
        </button>
      </div>

      <div className="flex gap-2 mb-6 border-b border-slate-200 pb-2">
        <button className="px-4 py-2 text-sky-600 border-b-2 border-sky-500 font-medium">List View</button>
        <button className="px-4 py-2 text-slate-500 font-medium hover:text-slate-700">Map View</button>
        <div className="flex-1"></div>
        <button className="text-slate-500 p-2"><FiFilter size={20}/></button>
      </div>

      <div className="space-y-4">
        {reports.map(rep => (
          <div key={rep.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{rep.icon}</span>
                <span className="font-bold text-slate-900">{rep.type}</span>
              </div>
              <div className="flex gap-2">
                <span className={`text-xs px-2 py-1 rounded font-medium ${getSeverityColor(rep.severity)}`}>{rep.severity}</span>
                <span className={`text-xs px-2 py-1 rounded font-medium ${getStatusColor(rep.status)}`}>{rep.status}</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-slate-500 mb-2 gap-1">
              <FiMapPin /> {rep.location} • {rep.time}
            </div>
            <p className="text-sm text-slate-700 mb-4">{rep.desc}</p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-600 px-3 py-1.5 rounded-lg text-sm transition">
                <FiThumbsUp /> {rep.upvotes} Helpful
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50">
          <div className="bg-white w-full md:w-[500px] rounded-t-2xl md:rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Report Incident</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400"><FiX size={24}/></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none focus:border-sky-500">
                  <option>Traffic Jam</option>
                  <option>Accident</option>
                  <option>Bus Overcrowding</option>
                  <option>Waterlogging</option>
                  <option>Road Damage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <div className="flex">
                  <input type="text" placeholder="e.g. India Gate" className="w-full bg-slate-50 border border-slate-200 rounded-l-lg p-2.5 outline-none focus:border-sky-500" />
                  <button className="bg-sky-100 text-sky-600 px-3 rounded-r-lg border border-l-0 border-slate-200"><FiMapPin/></button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows="3" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none focus:border-sky-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Severity</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-1 text-sm"><input type="radio" name="sev" className="text-sky-500" /> Low</label>
                  <label className="flex items-center gap-1 text-sm"><input type="radio" name="sev" className="text-sky-500" defaultChecked/> Medium</label>
                  <label className="flex items-center gap-1 text-sm"><input type="radio" name="sev" className="text-sky-500" /> High</label>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 text-slate-500 py-3 rounded-lg hover:bg-slate-50">
                <FiCamera /> Add Photo (Optional)
              </button>
              <button onClick={() => setShowModal(false)} className="w-full bg-sky-500 text-white font-bold py-3 rounded-lg hover:bg-sky-600 mt-2">
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityReports;
