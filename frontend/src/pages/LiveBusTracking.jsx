import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FiRefreshCw, FiFilter, FiClock, FiUsers, FiMapPin, FiNavigation, FiAlertTriangle, FiSearch, FiPause, FiPlay } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';

const initialBuses = [
  { id: 'DTC-423', route: 'Rajiv Chowk → Nehru Place', routeNo: '423', type: 'DTC', lat: 28.6329, lng: 77.2195, speed: 22, heading: 180, occupancy: 78, crowdLevel: 'high', capacity: 60, passengers: 47, nextStop: 'Mandi House', eta: 2, delay: 3, accessible: true },
  { id: 'DTC-522', route: 'ISBT → Mehrauli', routeNo: '522', type: 'DTC', lat: 28.6705, lng: 77.2283, speed: 18, heading: 210, occupancy: 45, crowdLevel: 'moderate', capacity: 55, passengers: 25, nextStop: 'Kashmere Gate', eta: 4, delay: 0, accessible: true },
  { id: 'DTC-604', route: 'Anand Vihar → Dwarka', routeNo: '604', type: 'DTC', lat: 28.6473, lng: 77.3161, speed: 30, heading: 270, occupancy: 32, crowdLevel: 'low', capacity: 60, passengers: 19, nextStop: 'Laxmi Nagar', eta: 1, delay: 0, accessible: false },
  { id: 'CL-721', route: 'Lajpat Nagar → CP', routeNo: '721', type: 'Cluster', lat: 28.5709, lng: 77.2406, speed: 15, heading: 0, occupancy: 88, crowdLevel: 'high', capacity: 45, passengers: 40, nextStop: 'Jangpura', eta: 3, delay: 7, accessible: false },
  { id: 'DTC-181', route: 'Noida → Kashmere Gate', routeNo: '181', type: 'DTC', lat: 28.5815, lng: 77.3152, speed: 25, heading: 315, occupancy: 62, crowdLevel: 'moderate', capacity: 60, passengers: 37, nextStop: 'Mayur Vihar Ph-1', eta: 5, delay: 2, accessible: true },
  { id: 'CL-534', route: 'Rohini → Badarpur', routeNo: '534', type: 'Cluster', lat: 28.7185, lng: 77.1181, speed: 20, heading: 180, occupancy: 55, crowdLevel: 'moderate', capacity: 50, passengers: 28, nextStop: 'Pitampura', eta: 2, delay: 0, accessible: true },
  { id: 'DTC-764', route: 'Vasant Kunj → Old Delhi', routeNo: '764', type: 'DTC', lat: 28.5275, lng: 77.1581, speed: 12, heading: 45, occupancy: 91, crowdLevel: 'high', capacity: 60, passengers: 55, nextStop: 'Vasant Vihar', eta: 1, delay: 10, accessible: false },
  { id: 'CL-990', route: 'Saket → AIIMS', routeNo: '990', type: 'Cluster', lat: 28.5237, lng: 77.2165, speed: 28, heading: 0, occupancy: 25, crowdLevel: 'low', capacity: 45, passengers: 11, nextStop: 'Hauz Khas', eta: 3, delay: 0, accessible: true },
  { id: 'DTC-347', route: 'Mundka → ISBT', routeNo: '347', type: 'DTC', lat: 28.6847, lng: 77.0330, speed: 35, heading: 90, occupancy: 40, crowdLevel: 'low', capacity: 60, passengers: 24, nextStop: 'Paschim Vihar', eta: 6, delay: 0, accessible: true },
  { id: 'DTC-429', route: 'IIT Delhi → Chandni Chowk', routeNo: '429', type: 'DTC', lat: 28.5459, lng: 77.1926, speed: 19, heading: 20, occupancy: 72, crowdLevel: 'high', capacity: 55, passengers: 40, nextStop: 'Green Park', eta: 2, delay: 5, accessible: false },
  { id: 'CL-815', route: 'Janakpuri → Nehru Place', routeNo: '815', type: 'Cluster', lat: 28.6186, lng: 77.0912, speed: 22, heading: 120, occupancy: 50, crowdLevel: 'moderate', capacity: 50, passengers: 25, nextStop: 'Rajouri Garden', eta: 4, delay: 1, accessible: true },
  { id: 'DTC-112', route: 'Narela → ISBT', routeNo: '112', type: 'DTC', lat: 28.8526, lng: 77.0930, speed: 40, heading: 180, occupancy: 35, crowdLevel: 'low', capacity: 60, passengers: 21, nextStop: 'Bawana', eta: 8, delay: 0, accessible: true },
];

const getCrowdLevel = (occupancy) => {
  if (occupancy < 40) return 'low';
  if (occupancy <= 70) return 'moderate';
  return 'high';
};

const getPrediction = (bus) => {
  if (bus.delay > 5) return 'Significant delay detected. Alternative buses available on this route.';
  if (bus.occupancy > 70) return `Crowd expected to remain high until ${bus.nextStop}. Consider waiting for next bus.`;
  if (bus.occupancy >= 40 && bus.occupancy <= 70) return `Occupancy predicted to increase soon. Board now for better comfort.`;
  return `Good time to board. Crowd expected to remain low for next 3 stops.`;
};

const createCustomIcon = (crowdLevel, routeNo) => {
  let bgColor = 'bg-green-500';
  if (crowdLevel === 'moderate') bgColor = 'bg-amber-500';
  if (crowdLevel === 'high') bgColor = 'bg-red-500';

  return L.divIcon({
    className: 'custom-bus-icon',
    html: `<div class="w-8 h-8 rounded-full ${bgColor} text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-md">${routeNo}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const MapController = ({ selectedBus }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedBus) {
      map.flyTo([selectedBus.lat, selectedBus.lng], 15, { animate: true, duration: 1 });
    }
  }, [selectedBus, map]);
  return null;
};

const LiveBusTracking = () => {
  const [buses, setBuses] = useState(initialBuses);
  const [simulationActive, setSimulationActive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  const [crowdFilter, setCrowdFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedBusId, setSelectedBusId] = useState(null);

  useEffect(() => {
    if (!simulationActive) return;
    
    const interval = setInterval(() => {
      setBuses(prev => prev.map(bus => {
        // Calculate new position
        const rad = bus.heading * Math.PI / 180;
        const dist = (bus.speed / 3600) * 3; // Approx km traveled in 3 seconds
        const latDelta = dist * Math.cos(rad) / 111.32;
        const lngDelta = dist * Math.sin(rad) / (40075 * Math.cos(bus.lat * Math.PI / 180) / 360);
        
        // Fluctuate occupancy
        const occChange = Math.floor(Math.random() * 7) - 3;
        const newOcc = Math.max(0, Math.min(100, bus.occupancy + occChange));
        
        // Random delays
        const delayChange = Math.random() > 0.9 ? (Math.floor(Math.random() * 3) - 1) : 0;
        const newDelay = Math.max(0, bus.delay + delayChange);

        return {
          ...bus,
          lat: bus.lat + latDelta,
          lng: bus.lng + lngDelta,
          occupancy: newOcc,
          crowdLevel: getCrowdLevel(newOcc),
          delay: newDelay,
        };
      }));
      setLastUpdated(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, [simulationActive]);

  const filteredBuses = useMemo(() => {
    return buses.filter(bus => {
      const matchCrowd = crowdFilter === 'All' || bus.crowdLevel.toLowerCase() === crowdFilter.toLowerCase();
      const matchType = typeFilter === 'All' || bus.type === typeFilter;
      const matchSearch = bus.routeNo.includes(searchQuery) || bus.route.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCrowd && matchType && matchSearch;
    });
  }, [buses, crowdFilter, typeFilter, searchQuery]);

  const selectedBus = useMemo(() => buses.find(b => b.id === selectedBusId), [buses, selectedBusId]);

  const stats = useMemo(() => {
    return {
      total: buses.length,
      low: buses.filter(b => b.crowdLevel === 'low').length,
      moderate: buses.filter(b => b.crowdLevel === 'moderate').length,
      high: buses.filter(b => b.crowdLevel === 'high').length,
    };
  }, [buses]);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">Live Bus Tracking</h1>
              {simulationActive && (
                <div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded-full border border-green-100">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-700">Live</span>
                </div>
              )}
            </div>
            <p className="text-sm text-slate-500 mt-1">Real-time bus positions with crowd predictions</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-sky-700">{stats.total} buses tracked</p>
              <p className="text-xs text-slate-400">Last updated: {lastUpdated.toLocaleTimeString()}</p>
            </div>
            <button 
              onClick={() => setSimulationActive(!simulationActive)}
              className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-sm font-medium"
            >
              {simulationActive ? <FiPause size={16} /> : <FiPlay size={16} />}
              {simulationActive ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row p-4 gap-4">
        
        {/* Left/Top Area: Map & Stats */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-sky-100 p-3 rounded-xl border border-sky-200 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-sky-700">{stats.total}</span>
              <span className="text-xs font-medium text-sky-600 uppercase tracking-wide">Total Tracked</span>
            </div>
            <div className="bg-green-100 p-3 rounded-xl border border-green-200 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-green-700">{stats.low}</span>
              <span className="text-xs font-medium text-green-600 uppercase tracking-wide">Low Crowd</span>
            </div>
            <div className="bg-amber-100 p-3 rounded-xl border border-amber-200 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-amber-700">{stats.moderate}</span>
              <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">Moderate</span>
            </div>
            <div className="bg-red-100 p-3 rounded-xl border border-red-200 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-red-700">{stats.high}</span>
              <span className="text-xs font-medium text-red-600 uppercase tracking-wide">High Crowd</span>
            </div>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-xl shadow-sm border border-sky-100 overflow-hidden flex-1 min-h-[400px] lg:min-h-0 relative">
            <MapContainer center={[28.6139, 77.2090]} zoom={12} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              <MapController selectedBus={selectedBus} />
              
              {filteredBuses.map((bus) => (
                <Marker 
                  key={bus.id} 
                  position={[bus.lat, bus.lng]} 
                  icon={createCustomIcon(bus.crowdLevel, bus.routeNo)}
                  eventHandlers={{
                    click: () => setSelectedBusId(bus.id),
                  }}
                >
                  <Popup className="bus-popup">
                    <div className="p-1 min-w-[200px]">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-800">{bus.id}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold text-white
                          ${bus.crowdLevel === 'low' ? 'bg-green-500' : bus.crowdLevel === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}
                        `}>
                          {bus.occupancy}% Full
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium mb-3">{bus.route}</p>
                      
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                          <FiUsers className="text-sky-500" /> {bus.passengers}/{bus.capacity} pax
                        </div>
                        <div className="flex items-center gap-1">
                          <FiNavigation className="text-sky-500" /> {bus.speed} km/h
                        </div>
                        <div className="flex items-center gap-1 col-span-2">
                          <FiMapPin className="text-sky-500 min-w-3" /> Next: {bus.nextStop}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="text-sky-500" /> ETA: {bus.eta.toFixed(1)}m
                        </div>
                        {bus.delay > 0 && (
                          <div className="flex items-center gap-1 text-amber-600 font-medium">
                            <FiAlertTriangle /> +{bus.delay}m delay
                          </div>
                        )}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Right Area: Bus List Panel */}
        <div className="w-full lg:w-[400px] flex flex-col gap-4">
          
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-sky-100">
            <div className="flex items-center gap-2 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <FiSearch className="text-slate-400 ml-2" />
              <input 
                type="text" 
                placeholder="Search route or bus no..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Crowd Level</p>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Low', 'Moderate', 'High'].map(level => (
                    <button
                      key={level}
                      onClick={() => setCrowdFilter(level)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border
                        ${crowdFilter === level 
                          ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}
                      `}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Bus Type</p>
                <div className="flex flex-wrap gap-2">
                  {['All', 'DTC', 'Cluster'].map(type => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border
                        ${typeFilter === type 
                          ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="bg-white rounded-xl shadow-sm border border-sky-100 flex-1 overflow-hidden flex flex-col h-[500px] lg:h-auto">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-sky-50/50">
              <h2 className="font-bold text-slate-800">Tracked Buses</h2>
              <span className="text-xs font-medium bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">
                {filteredBuses.length} results
              </span>
            </div>
            
            <div className="overflow-y-auto flex-1 p-3 space-y-3">
              {filteredBuses.length === 0 ? (
                <div className="text-center p-8 text-slate-500 text-sm">
                  No buses match your filters.
                </div>
              ) : (
                filteredBuses.map((bus) => {
                  const crowdColor = bus.crowdLevel === 'low' ? 'bg-green-500' : bus.crowdLevel === 'moderate' ? 'bg-amber-500' : 'bg-red-500';
                  const crowdBg = bus.crowdLevel === 'low' ? 'bg-green-100' : bus.crowdLevel === 'moderate' ? 'bg-amber-100' : 'bg-red-100';
                  const crowdText = bus.crowdLevel === 'low' ? 'text-green-700' : bus.crowdLevel === 'moderate' ? 'text-amber-700' : 'text-red-700';

                  return (
                    <div 
                      key={bus.id} 
                      onClick={() => setSelectedBusId(bus.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md
                        ${selectedBusId === bus.id ? 'border-sky-500 bg-sky-50/30 ring-1 ring-sky-500' : 'border-slate-100 bg-white hover:border-sky-200'}
                      `}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${crowdColor}`}></span>
                          <h3 className="font-bold text-slate-800">{bus.id}</h3>
                          {bus.accessible && <span className="text-sky-500" title="Wheelchair Accessible">♿</span>}
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${crowdBg} ${crowdText}`}>
                          {bus.occupancy}% Full
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium text-slate-700 mb-3">{bus.route}</p>
                      
                      {/* Gauge Bar */}
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${crowdColor} transition-all duration-1000`}
                          style={{ width: `${bus.occupancy}%` }}
                        ></div>
                      </div>

                      {/* AI Prediction */}
                      <div className="bg-sky-50/50 p-2.5 rounded-lg border border-sky-100 mb-3">
                        <p className="text-xs text-sky-800 leading-relaxed font-medium">
                          <span className="font-bold text-sky-600 mr-1">AI Prediction:</span>
                          {getPrediction(bus)}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="text-slate-400" /> Next: {bus.nextStop}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="text-slate-400" /> ETA: {bus.eta.toFixed(1)}m
                        </span>
                        <span className="flex items-center gap-1">
                          <FiNavigation className="text-slate-400" /> {bus.speed} km/h
                        </span>
                        {bus.delay > 0 && (
                          <span className="flex items-center gap-1 text-amber-600">
                            <FiAlertTriangle /> +{bus.delay}m delay
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveBusTracking;
