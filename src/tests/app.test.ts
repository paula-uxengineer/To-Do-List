import Task from "../core/template-task";
import { Todolist } from "../core/template-todolist";

describe(Todolist, () => {
  let todoList: Todolist;

  beforeAll(() => {
    todoList = new Todolist();
  });

  afterAll(() => {
    console.log("Run test:");
  });

  test("addTask should add a new task", () => {
    const newTask: Task = todoList.addTask("study TypeScript");
    expect(newTask.text).toBe("study TypeScript");
    expect(newTask.completed).toBe(false);
  });

  test("completedTask should mark a task as completed", () => {
    const newTask: Task = todoList.addTask("study TypeScript");
    todoList.completedTask(newTask.id);
    expect(newTask.completed).toBe(true);
  });

  test("deleteTask should delete a task", () => {
    const taskDeleted = todoList.deleteTask(4);
    expect(taskDeleted).toBe("Deleted!");
  });

  test("showTask should return the correct task", () => {
    const newTask: Task = todoList.addTask("study TypeScript");
    const retrievedTask = todoList.showTask(newTask.id);
    expect(retrievedTask).toEqual(newTask);
  });

  test("showAllTasks should return all tasks", () => {
    const allTasks = todoList.showAllTasks();
    expect(allTasks.length).toBeGreaterThan(6);
  });
});


