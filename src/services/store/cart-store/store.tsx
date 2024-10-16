import { ReactNode, createContext, useContext, useState } from "react";
import { Cart } from "../../../domain/cart";
import { CartService } from "../../../application/ports";

const Context = createContext<CartService | null>(null);
export const useStore = (): CartService => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStore должен быть внутри CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ products: [] });

  const values = {
    cart,
    updateCart: setCart,
    empty: () => setCart({ products: [] }),
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
