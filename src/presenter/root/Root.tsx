import { Link, Outlet } from "react-router-dom";

import { routes } from "../router";

import "./Root.css";

export function RootScreen() {
  return (
    <>
      <h1>Vite + React</h1>
      <Link to={routes.cart()}>Корзина</Link>
      <Link to={routes.todo()}>Список задач</Link>
      <Link to={routes.products()}>Продукты</Link>
      <Link to={routes.products("safa")}>Продукт</Link>

      <Outlet />
    </>
  );
}
