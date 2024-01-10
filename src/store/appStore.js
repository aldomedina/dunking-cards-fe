import { create } from "zustand";

const useAppStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (menuOpen) => set(() => ({ menuOpen })),
  recentlyCreatedGame: false,
  setRecentlyCreatedGame: (recentlyCreatedGame) =>
    set(() => ({ recentlyCreatedGame })),
}));

export default useAppStore;
