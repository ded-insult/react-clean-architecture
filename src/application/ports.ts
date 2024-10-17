import { Cart } from "../domain/cart";
import { TodoTask } from "../domain/todo";

export interface TodoTaskService {
  todos: TodoTask[];
  updateTodos(todos: TodoTask[]): void;
}

export interface CartService {
  cart: Cart;
  updateCart(cart: Cart): void;
  empty(): void;
}

export interface NotificationService {
  notify(message: string): void;
}
