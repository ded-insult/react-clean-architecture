import { ReactNode } from "react";
import { TodoTask } from "../../../domain";

interface TodoItemProps {
  todo: TodoTask;
  actions: ReactNode;
}

export function TodoItem(todo: TodoItemProps) {
  const { todo: todoItem, actions } = todo;

  return (
    <div>
      <p>Название: {todoItem.title}</p>
      <p>Статус: {todoStatus(todoItem.complete)}</p>
      <p>Айди: {todoItem.id}</p>

      {actions}
    </div>
  );
}

const todoStatus = (status: boolean) => {
  return status ? "Выполнено" : "В процессе";
};
