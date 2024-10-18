import { expect, test } from "vitest";
import { addToCart, Cart } from "../cart";

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

test("add product to cart", () => {
  const updated = addToCart(cart, {
    id: "3",
    ingredient: ["chocolate"],
    name: "test product",
    price: 12345,
    quantity: 1,
  });

  expect(updated).toMatchObject({
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
      {
        id: "3",
        ingredient: ["chocolate"],
        name: "test product",
        price: 12345,
        quantity: 1,
      },
    ],
  });
});
