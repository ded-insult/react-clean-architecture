import { useStore } from "../store/cart-store";

export const useCartStorage = () => {
  return useStore();
};
