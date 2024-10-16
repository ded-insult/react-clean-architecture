import { TodoTask } from "../../../domain";

export const todoData: TodoTask[] = [
  {
    complete: false,
    id: Math.random().toString(),
    title: "Сделать тест",
  },
  {
    complete: false,
    id: Math.random().toString(),
    title: "бим бим бам бам",
  },
];
