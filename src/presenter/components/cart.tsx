import { useCart } from "../../application/use-cart";
import { Cart as CartType } from "../../domain/cart";
import { Product, totalProductsPrice } from "../../domain";
import { isLastIndex } from "../utils/is-last-index";

export function Cart() {
  const cart = useCart();

  const {
    cart: { products },
  } = cart;

  if (!products.length) return "Нет продуктов";

  return (
    <div>
      {cart.cart.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <TotalCartProductsPrice products={products} />
      <ClearCartButton />
    </div>
  );
}

const CartItem = ({ product }: { product: Product }) => {
  const ingredientsMarkup = product.ingredient.map((ingredient, idx) =>
    !isLastIndex(product.ingredient.length - 1, idx)
      ? `${ingredient},`
      : ingredient
  );

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <div>Имя товара: {product.name}</div>
      <div>Цена {product.price}</div>
      <div>Ингредиенты: {ingredientsMarkup}</div>
      <div>Количество:{product.quantity || 1}</div>
    </div>
  );
};

const TotalCartProductsPrice = (cart: CartType) => {
  return (
    <div>
      <h2>Итоговая цена {totalProductsPrice(cart)}</h2>
    </div>
  );
};

const ClearCartButton = () => {
  const cart = useCart();
  const clearHandler = () => cart.clear();

  return <button onClick={clearHandler}>очистить корзину</button>;
};
