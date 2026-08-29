export const TRANSPORT_TYPES = {
  BUS: { label: 'Bus', color: 'text-blue-500', bg: 'bg-blue-100' },
  METRO: { label: 'Metro', color: 'text-purple-500', bg: 'bg-purple-100' },
  AUTO: { label: 'Auto', color: 'text-green-500', bg: 'bg-green-100' },
  E_RICKSHAW: { label: 'E-Rickshaw', color: 'text-teal-500', bg: 'bg-teal-100' },
  WALK: { label: 'Walk', color: 'text-slate-500', bg: 'bg-slate-100' },
  CAB: { label: 'Cab', color: 'text-yellow-500', bg: 'bg-yellow-100' }
};

export const CROWD_LEVELS = {
  LOW: { label: 'Low', color: 'text-green-700', bg: 'bg-green-100' },
  MODERATE: { label: 'Moderate', color: 'text-amber-700', bg: 'bg-amber-100' },
  HIGH: { label: 'High', color: 'text-red-700', bg: 'bg-red-100' }
};

export const TRAFFIC_LEVELS = {
  FREE: { label: 'Free', color: 'text-green-700', bg: 'bg-green-100' },
  MODERATE: { label: 'Moderate', color: 'text-amber-700', bg: 'bg-amber-100' },
  HEAVY: { label: 'Heavy', color: 'text-red-700', bg: 'bg-red-100' }
};

export const CITIES = [
  'Delhi', 'Mumbai', 'Bengaluru', 'Pune', 'Hyderabad', 'Lucknow', 'Nashik'
];

export const DISRUPTION_TYPES = {
  TRAFFIC: { label: 'Traffic Jam', icon: '🚦' },
  ACCIDENT: { label: 'Accident', icon: '⚠️' },
  WEATHER: { label: 'Weather', icon: '⛈️' },
  MAINTENANCE: { label: 'Maintenance', icon: '🚧' }
};

export const REPORT_TYPES = [
  'Accident', 'Traffic jam', 'Flooding', 'Road damage', 'Bus overcrowding', 'Vehicle breakdown', 'Unsafe area', 'Road closure'
];
