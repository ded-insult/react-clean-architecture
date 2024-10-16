import { CartProvider } from "../../../../services/store/cart-store";
import { ProductList } from "./product-list";

export function ListProductsScreen() {
  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  );
}
