import { CartProvider } from "../../../services/store/cart-store";
import { Cart } from "../../components/cart";

export function CartScreen() {
  return (
    <CartProvider>
      <Cart />
      <div>cart</div>
    </CartProvider>
  );
}
