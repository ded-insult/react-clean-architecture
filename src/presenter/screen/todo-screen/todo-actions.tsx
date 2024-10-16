import { ComponentPropsWithoutRef } from "react";
import { TodoTask } from "../../../domain";
import { useTodo } from "../../../application/use-todo";

export const StatusAction = (
  props: ComponentPropsWithoutRef<"button"> & Pick<TodoTask, "id">
) => {
  const todos = useTodo();

  const updateHandler = () => todos.toggleStatus(props.id);

  return (
    <button {...props} onClick={updateHandler}>
      Изменить статус
    </button>
  );
};

export const RemoveAction = (
  props: ComponentPropsWithoutRef<"button"> & Pick<TodoTask, "id">
) => {
  const todos = useTodo();

  const removeHandler = () => todos.remove(props.id);

  return (
    <button {...props} onClick={removeHandler}>
      Удалить
    </button>
  );
};
