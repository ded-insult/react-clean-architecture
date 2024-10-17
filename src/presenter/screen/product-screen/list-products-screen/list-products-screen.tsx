import { CartProvider } from "../../../../services/store/cart-store";
import { ProductList } from "./product-list";
import { ProductShowCart } from "./product-show-cart";

export function ListProductsScreen() {
  return (
    <CartProvider>
      <ProductList />
      <ProductShowCart />
    </CartProvider>
  );
}
