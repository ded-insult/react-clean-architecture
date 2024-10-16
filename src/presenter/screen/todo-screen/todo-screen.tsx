import { TodoProvider } from "../../../services/store/todo-store/store";
import { TodoList } from "./todo-list";

export function TodoScreen() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
