import { create } from 'zustand';
import { IAuth } from '../interfaces/user.interface';


interface AuthState {
  
  user: IAuth | null;
  setAuth: (user: IAuth) => void;
  clear: () => void;
}

export const AuthStore = create<AuthState>((set) => ({
  user: null,
  setAuth: (user) => set({user}),
  clear: () => set({user:null}),
}));
