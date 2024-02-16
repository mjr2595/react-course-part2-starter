import { create } from "zustand";

interface AuthStore {
  user: string;
  signIn: (username: string) => void;
  signOut: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  signIn: (username) => set(() => ({ user: username })),
  signOut: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
