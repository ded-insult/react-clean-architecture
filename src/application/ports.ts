import { Cart } from "../domain/cart";
import { TodoId, TodoTask, TodoTitle } from "../domain/todo";

export interface TodoTaskService {
  todos: TodoTask[];
  createTodo(todos: TodoTask[], taskTitle: TodoTitle): void;
  removeTodo(todos: TodoTask[], id: TodoId): void;
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
