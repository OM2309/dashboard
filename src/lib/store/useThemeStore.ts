import { create } from 'zustand';
import type { Theme } from '@/types/theme';
import type { ThemeState } from '@/interfaces/theme';

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (localStorage.getItem('theme') as Theme) || 'light',

  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },

  toggleTheme: () =>
    set((state) => {
      const nextTheme: Theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      return { theme: nextTheme };
    }),
}));
