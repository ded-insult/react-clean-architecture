import { TodoTaskService } from "../../application/ports";
import { useStore } from "../store/todo-store";

export const useTodoStorage = (): TodoTaskService => {
  return useStore();
};
