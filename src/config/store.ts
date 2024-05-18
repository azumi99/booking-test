import { create } from "zustand";
interface ApiState {
  showModal: boolean;
  setShowModal: (isLoading: boolean) => void;
}
const BackConfirm = create<ApiState>((set) => ({
  showModal: false,
  setShowModal: (isModal) => set({ showModal: isModal }),
}));

export { BackConfirm };
