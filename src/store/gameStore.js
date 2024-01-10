import { create } from "zustand";

const useGameStore = create((set) => ({
  activePlayer: "",
  game: {},
  budget: 0,
  score: {},
  setGame: (game) => set(() => ({ game })),
  setActivePlayer: (activePlayer) => set(() => ({ activePlayer })),
}));

export default useGameStore;
