import { Product } from "../domain/product";
import { addToCart } from "../domain/cart";
import { useCartStorage } from "../services/adapters/cart-adapter";

export const useCart = () => {
  const cart = useCartStorage();

  const { cart: productCart } = cart;

  const add = (product: Product) => {
    const updated = addToCart(productCart, product);

    cart.updateCart(updated);
  };

  const clear = () => {
    cart.empty();
  };

  return {
    cart: productCart,
    clear,
    add,
  };
};
