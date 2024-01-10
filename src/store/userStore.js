import { create } from "zustand";

const useUserStore = create((set) => ({
  user: false,
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
