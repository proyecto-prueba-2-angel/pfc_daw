// stores/auth.ts
import { defineStore } from 'pinia';

interface User {
  id: number;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null
  }),
  actions: {
    login(user: User) {
      this.user = user;
      if(process.client) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    logout() {
      this.user = null;
      if(process.client) {
        localStorage.removeItem('user');
      }
    },
    initialize() {
      if(process.client) {
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
          try {
            this.user = JSON.parse(storedUser);
          } catch (e) {
            console.error('Error parsing user from localStorage', e);
            localStorage.removeItem('user');
          }
        }
      }
    }
  },
  getters: {
    isAuthenticated: (state: AuthState) => !!state.user
  }
});
