import { create } from 'zustand';

const mockUser = {
  name: 'Aryan Sharma',
  email: 'user@saarthi.ai',
  mobile: '9876543210',
  city: 'Delhi',
  role: 'commuter',
  preferredLanguage: 'English',
  profilePicture: null,
  homeLocation: { lat: 28.6139, lng: 77.2090, address: 'Connaught Place, Delhi' },
  workLocation: { lat: 28.5459, lng: 77.1855, address: 'IIT Delhi, Hauz Khas' },
  travelPreferences: { fastest: true, cheapest: false, leastCrowded: true, safest: true, greenest: false, accessible: false },
  preferenceWeights: { time: 30, cost: 15, crowd: 20, safety: 20, accessibility: 10, environment: 5 }
};

export const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem('saarthi_user') || 'null'),
  token: localStorage.getItem('saarthi_token') || null,
  isAuthenticated: !!localStorage.getItem('saarthi_token'),
  loading: false,

  login: (email, password) => {
    let role = 'commuter';
    let name = 'Aryan Sharma';
    if (email.includes('admin')) { role = 'admin'; name = 'Admin User'; }
    if (email.includes('operator')) { role = 'operator'; name = 'Metro Operator'; }

    const userData = { ...mockUser, email, role, name };
    localStorage.setItem('saarthi_token', 'mock_jwt_token_saarthi');
    localStorage.setItem('saarthi_user', JSON.stringify(userData));
    set({ user: userData, isAuthenticated: true, token: 'mock_jwt_token_saarthi', loading: false });
  },

  register: (data) => {
    const userData = { ...mockUser, ...data, role: data.userType === 'operator' ? 'operator' : 'commuter' };
    localStorage.setItem('saarthi_token', 'mock_jwt_token_saarthi');
    localStorage.setItem('saarthi_user', JSON.stringify(userData));
    set({ user: userData, isAuthenticated: true, token: 'mock_jwt_token_saarthi', loading: false });
  },

  logout: () => {
    localStorage.removeItem('saarthi_token');
    localStorage.removeItem('saarthi_user');
    set({ user: null, token: null, isAuthenticated: false });
  },

  loadUser: () => {
    const token = localStorage.getItem('saarthi_token');
    const userData = JSON.parse(localStorage.getItem('saarthi_user') || 'null');
    if (token && userData) {
      set({ user: userData, isAuthenticated: true, token });
    }
  },

  updateProfile: (data) => {
    const currentUser = get().user;
    const updated = { ...currentUser, ...data };
    localStorage.setItem('saarthi_user', JSON.stringify(updated));
    set({ user: updated });
  }
}));
