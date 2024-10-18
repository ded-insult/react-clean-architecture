import { expect, test } from "vitest";
import { totalProductsPrice } from "../product";
import { Cart } from "../../cart";

const cart: Cart = {
  products: [
    {
      id: "1",
      ingredient: ["bebe"],
      name: "name 1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      ingredient: ["bebe"],
      name: "name 1",
      price: 100,
      quantity: 1,
    },
  ],
};

test("calculate total price", () => {
  const totalPrice = totalProductsPrice(cart);

  expect(totalPrice).toBe(300);
});
