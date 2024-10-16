export const routes = {
  root: () => "/",
  products: (id: string = "") => isEmptyIdRoute(id, "/products"),
  cart: () => "/cart",
  todo: () => "/todo",
} as const;

const isEmptyIdRoute = (id: string, exptectedRoute: string) => {
  if (!id) return exptectedRoute;

  return `${exptectedRoute}/${id}`;
};
