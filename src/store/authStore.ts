import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: any; // You can define a more specific type for the user if needed
  setAuth: (token: string, user: any) => void;
  clear: () => void;
}

export const AuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => set({ token, user }),
  clear: () => set({ token: null, user: null }),
}));
