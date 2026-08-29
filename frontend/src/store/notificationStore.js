import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [
    { id: 1, type: 'TRAFFIC', title: 'Heavy Traffic', message: 'Avoid Ring Road', read: false },
    { id: 2, type: 'WALLET', title: 'Balance Low', message: 'Your balance is below ₹100', read: true }
  ],
  unreadCount: 1,
  
  fetchNotifications: async () => {},
  markRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n),
    unreadCount: state.unreadCount - 1
  })),
  markAllRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true })),
    unreadCount: 0
  }))
}));
