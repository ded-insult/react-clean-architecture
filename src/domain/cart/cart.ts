import { Product } from "../product";

export interface Cart {
  products: Product[];
}

export const addToCart = (cart: Cart, product: Product): Cart => {
  return { ...cart, products: [...cart.products, product] };
};
