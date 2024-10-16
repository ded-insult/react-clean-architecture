import { ReactNode, createContext, useContext, useState } from "react";
import { TodoTask } from "../../../domain";
import { todoData } from "./fake-data";
import { TodoTaskService } from "../../../application/ports";

const Context = createContext<TodoTaskService | null>(null);
export const useStore = (): TodoTaskService => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStore должен быть внутри TodoProvider");
  }

  return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoTask[]>(todoData);

  const values = {
    todos,
    createTodo: setTodos,
    removeTodo: setTodos,
    updateTodos: setTodos,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
