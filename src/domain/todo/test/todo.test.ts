import { expect, test, vi } from "vitest";
import { createTask, deleteTask, TodoTask, toggleStatusTask } from "../todo";

const todos: TodoTask[] = [
  {
    complete: false,
    id: "1",
    title: "test 1",
  },
  {
    complete: false,
    id: "2",
    title: "test 2",
  },
];

vi.mock("../../../presenter/utils", () => ({
  currentDate: vi.fn(() => "simple"),
}));

test("add todo item", () => {
  const updated = createTask(todos, "test 3");

  expect(updated).toMatchObject([
    {
      complete: false,
      id: "1",
      title: "test 1",
    },
    {
      complete: false,
      id: "2",
      title: "test 2",
    },
    {
      complete: false,
      id: "simple",
      title: "test 3",
    },
  ]);
});

test("remove todo item by id", () => {
  const updated = deleteTask(todos, "2");

  expect(updated).toMatchObject([
    {
      complete: false,
      id: "1",
      title: "test 1",
    },
  ]);
});

test("toggle todo status by id", () => {
  const updated = toggleStatusTask(todos, "1");

  expect(updated).toMatchObject([
    {
      complete: true,
      id: "1",
      title: "test 1",
    },
    {
      complete: false,
      id: "2",
      title: "test 2",
    },
  ]);
});
