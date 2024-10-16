import { useTodo } from "../../../application/use-todo";
import { RemoveAction, StatusAction } from "./todo-actions";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const todos = useTodo();

  return (
    <>
      <br />
      <button onClick={() => todos.create(Math.random().toString())}>
        Добавить случайное задание
      </button>

      {todos.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          actions={
            <>
              <StatusAction id={todo.id} />
              <RemoveAction id={todo.id} />
            </>
          }
        />
      ))}
    </>
  );
}
