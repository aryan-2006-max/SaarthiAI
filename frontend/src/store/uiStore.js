import { create } from 'zustand';

export const useUiStore = create((set) => ({
  sidebarOpen: false,
  demoMode: true,
  currentCity: 'Delhi',
  darkMode: localStorage.getItem('saarthi_darkMode') === 'true',
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleDemoMode: () => set((state) => ({ demoMode: !state.demoMode })),
  setCity: (city) => set({ currentCity: city }),
  toggleDarkMode: () => set((state) => {
    const newVal = !state.darkMode;
    localStorage.setItem('saarthi_darkMode', newVal);
    if (newVal) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { darkMode: newVal };
  }),
  initDarkMode: () => {
    const saved = localStorage.getItem('saarthi_darkMode') === 'true';
    if (saved) {
      document.documentElement.classList.add('dark');
    }
    set({ darkMode: saved });
  }
}));
