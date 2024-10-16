import { ReactNode } from "react";
import { Product } from "../../../../domain";

interface ProductItemProps {
  product: Product;
  actions?: ReactNode;
}

export function ProductItem({ actions, product }: ProductItemProps) {
  return (
    <div>
      <div
        style={{
          border: "2px solid green",
        }}
      >
        <div>ингредиент {product.ingredient}</div>
        <div>имя {product.name}</div>
        <div>цена {product.price}</div>
      </div>

      <div>{actions}</div>
    </div>
  );
}
