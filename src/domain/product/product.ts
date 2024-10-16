import { Cart } from "../cart";
import { Ingredient } from "./ingredient";

export interface Product {
  name: string;
  price: number;
  ingredient: Ingredient[];
  id: string | number;
}

export const totalProductsPrice = (cart: Cart) => {
  return cart.products.reduce((total, { price }) => total + price, 0);
};
