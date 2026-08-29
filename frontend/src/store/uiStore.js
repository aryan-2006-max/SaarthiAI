import { create } from 'zustand';

export const useUiStore = create((set) => ({
  sidebarOpen: false,
  demoMode: true,
  currentCity: 'Delhi',
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleDemoMode: () => set((state) => ({ demoMode: !state.demoMode })),
  setCity: (city) => set({ currentCity: city })
}));
