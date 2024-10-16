import { createBrowserRouter } from "react-router-dom";

import {
  ListProductsScreen,
  SingleProductScreen,
} from "../screen/product-screen";
import { CartScreen } from "../screen/cart-screen";
import { RootScreen } from "../root";
import { TodoScreen } from "../screen/todo-screen";

import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <RootScreen />,
    children: [
      {
        path: routes.products(":id"),
        element: <SingleProductScreen />,
      },
      {
        path: routes.cart(),
        element: <CartScreen />,
      },
      {
        path: routes.products(),
        element: <ListProductsScreen />,
      },
      {
        path: routes.todo(),
        element: <TodoScreen />,
      },
    ],
  },
]);
