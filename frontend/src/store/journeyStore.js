import { create } from 'zustand';
import { mockRoutes } from '../utils/mockData';

export const useJourneyStore = create((set) => ({
  routes: [],
  selectedRoute: null,
  activeJourney: null,
  searchParams: null,
  loading: false,

  planJourney: async (from, to, date, time, options) => {
    set({ loading: true, searchParams: { from, to, date, time, options } });
    setTimeout(() => {
      set({ routes: mockRoutes, loading: false });
    }, 1500);
  },

  selectRoute: (route) => set({ selectedRoute: route }),

  startJourney: () => set((state) => ({ 
    activeJourney: { ...state.selectedRoute, startTime: new Date().toISOString() },
    routes: [],
    selectedRoute: null 
  })),

  clearRoutes: () => set({ routes: [], selectedRoute: null, searchParams: null }),
  
  endJourney: () => set({ activeJourney: null })
}));
