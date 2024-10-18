import { Product } from "../product";

export interface Cart {
  products: Product[];
}

export const addToCart = (cart: Cart, product: Product): Cart => {
  const isExisting = cart.products.findIndex((prod) => prod.id === product.id);

  if (isExisting !== -1) {
    const updated = cart.products.map((product, index) =>
      index === isExisting
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    );

    return { ...cart, products: updated };
  }

  return { ...cart, products: [...cart.products, product] };
};
