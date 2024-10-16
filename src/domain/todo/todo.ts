import { currentDate } from "../../presenter/utils";

export type TodoTitle = string;
export type TodoId = string;

export interface TodoTask {
  title: TodoTitle;
  complete: boolean;
  id: TodoId;
}

export function createTask(
  todos: TodoTask[],
  taskTitle: TodoTitle
): TodoTask[] {
  return [
    ...todos,
    {
      title: taskTitle,
      complete: false,
      id: currentDate(),
    },
  ];
}

export function deleteTask(todos: TodoTask[], id: TodoId) {
  return todos.filter((todo) => todo.id !== id);
}

export function toggleStatusTask(todos: TodoTask[], id: TodoId) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, complete: !todo.complete } : todo
  );
}
