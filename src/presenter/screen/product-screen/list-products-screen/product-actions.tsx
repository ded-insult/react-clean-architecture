import { useCart } from "../../../../application/use-cart";
import { Product } from "../../../../domain";

export const AddToCartAction = ({ product }: { product: Product }) => {
  const cart = useCart();
  const addHandler = () => cart.add(product);

  return <button onClick={addHandler}>Добавить в корзину</button>;
};
