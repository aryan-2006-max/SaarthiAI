import { create } from 'zustand';
import { mockWallet, mockCard, mockTransactions } from '../utils/mockData';

export const useWalletStore = create((set) => ({
  wallet: null,
  card: null,
  transactions: [],
  loading: false,

  fetchWallet: async () => {
    set({ loading: true });
    setTimeout(() => set({ wallet: mockWallet, loading: false }), 500);
  },

  fetchCard: async () => {
    set({ loading: true });
    setTimeout(() => set({ card: mockCard, loading: false }), 500);
  },

  fetchTransactions: async () => {
    set({ loading: true });
    setTimeout(() => set({ transactions: mockTransactions, loading: false }), 800);
  },

  addMoney: async (amount) => {
    set({ loading: true });
    setTimeout(() => set((state) => ({
      wallet: { ...state.wallet, balance: state.wallet.balance + amount },
      loading: false
    })), 1000);
  },

  freezeCard: async () => {
    set((state) => ({ card: { ...state.card, status: 'frozen' } }));
  },
  
  unfreezeCard: async () => {
    set((state) => ({ card: { ...state.card, status: 'active' } }));
  }
}));
