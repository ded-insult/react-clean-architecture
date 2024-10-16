import { useCart } from "../../../../application/use-cart";
import { Product } from "../../../../domain";

export const AddToCartAction = ({ product }: { product: Product }) => {
  const cart = useCart();

  return <button onClick={() => cart.add(product)}>Добавить в корзину</button>;
};
