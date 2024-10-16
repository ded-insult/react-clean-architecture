import {
  createTask,
  deleteTask,
  TodoId,
  TodoTitle,
  toggleStatusTask,
} from "../domain";
import { useStore } from "../services/store/todo-store";

export const useTodo = () => {
  const todo = useStore();

  const { todos } = todo;

  const remove = (id: TodoId) => {
    const updated = deleteTask(todos, id);

    todo.updateTodos(updated);
  };

  const create = (title: TodoTitle = "bebera") => {
    const updated = createTask(todos, title);

    todo.updateTodos(updated);
  };

  const toggleStatus = (id: TodoId) => {
    const updated = toggleStatusTask(todos, id);

    todo.updateTodos(updated);
  };

  return {
    todos,
    remove,
    create,
    toggleStatus,
  };
};
