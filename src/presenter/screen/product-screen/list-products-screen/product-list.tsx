import { Product } from "../../../../domain";
import { AddToCartAction } from "./product-actions";
import { ProductItem } from "./product-item";

const products: Product[] = [
  {
    id: "1",
    ingredient: ["meme", "chocolate"],
    name: "test 1",
    price: 228,
  },
  {
    id: 2,
    ingredient: ["meme"],
    name: "test 2",
    price: 733,
  },
];

export function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          actions={
            <>
              <AddToCartAction product={product} />
            </>
          }
        />
      ))}
    </div>
  );
}
