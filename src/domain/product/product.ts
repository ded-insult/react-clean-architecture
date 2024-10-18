import { Cart } from "../cart";
import { Ingredient } from "./ingredient";

export interface Product {
  name: string;
  price: number;
  quantity?: number;
  ingredient: Ingredient[];
  id: string | number;
}

export const totalProductsPrice = (cart: Cart) => {
  return cart.products.reduce(
    (total, { price, quantity }) => total + price * (quantity || 1),
    0
  );
};
