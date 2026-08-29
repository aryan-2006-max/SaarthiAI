export const mockUser = {
  name: 'Aryan Sharma',
  email: 'user@saarthi.ai',
  city: 'Delhi',
  role: 'commuter',
  preferences: { time: 40, cost: 20, crowd: 20, safety: 10, accessibility: 5, environment: 5 }
};

export const mockRoutes = [
  {
    id: 'r1',
    label: 'Recommended',
    recommended: true,
    time: 45,
    cost: 40,
    crowd: 'MODERATE',
    safetyScore: 92,
    commuteScore: 88,
    modes: ['WALK', 'METRO', 'E_RICKSHAW'],
    explanation: 'Fastest route with moderate crowd. Takes Blue Line metro which is running on time.',
    segments: [
      { mode: 'WALK', from: 'Home', to: 'Dwarka Sec 21', duration: 10, fare: 0 },
      { mode: 'METRO', from: 'Dwarka Sec 21', to: 'Rajiv Chowk', duration: 25, fare: 30 },
      { mode: 'E_RICKSHAW', from: 'Rajiv Chowk', to: 'Office', duration: 10, fare: 10 }
    ]
  },
  {
    id: 'r2',
    label: 'Cheapest',
    recommended: false,
    time: 65,
    cost: 15,
    crowd: 'HIGH',
    safetyScore: 75,
    commuteScore: 72,
    modes: ['WALK', 'BUS', 'WALK'],
    explanation: 'Very affordable but takes longer due to heavy traffic on Ring Road.',
    segments: [
      { mode: 'WALK', from: 'Home', to: 'Bus Stop A', duration: 5, fare: 0 },
      { mode: 'BUS', from: 'Bus Stop A', to: 'Bus Stop B', duration: 55, fare: 15 },
      { mode: 'WALK', from: 'Bus Stop B', to: 'Office', duration: 5, fare: 0 }
    ]
  }
];

export const mockTransactions = Array.from({length: 15}).map((_, i) => ({
  id: `tx_${i}`,
  date: new Date(Date.now() - i * 86400000).toISOString(),
  transport: i % 2 === 0 ? 'Metro' : 'Bus',
  route: i % 2 === 0 ? 'Dwarka -> Rajiv Chowk' : 'Stop A -> Stop B',
  amount: i % 2 === 0 ? 40 : 15,
  status: 'Completed',
  method: 'Saarthi Card'
}));

export const mockWallet = {
  balance: 850,
  spending: { daily: 40, weekly: 280, monthly: 1150, byTransport: [
    { name: 'Metro', value: 800 }, { name: 'Bus', value: 200 }, { name: 'Auto', value: 150 }
  ]}
};

export const mockCard = {
  cardNumber: 'XXXX XXXX XXXX 2847',
  name: 'Aryan Sharma',
  status: 'active',
  expiry: '12/28'
};

export const mockBriefing = {
  normalTime: '45 mins',
  predictedTime: '55 mins',
  traffic: 'MODERATE',
  crowd: 'HIGH',
  weather: 'Clear, 28°C',
  score: 82,
  recommendation: 'Leave 10 mins early due to moderate traffic near Connaught Place.'
};
