import { TodoId, TodoTask, TodoTitle } from "../domain/todo";

export interface TodoTaskService {
  todos: TodoTask[];
  createTodo(todos: TodoTask[], taskTitle: TodoTitle): void;
  updateTodos(todos: TodoTask[]): void;
  removeTodo(todos: TodoTask[], id: TodoId): void;
  // updateTodoStatus(todos: TodoTask[], id: TodoId): void;
}

export interface NotificationService {
  notify(message: string): void;
}
