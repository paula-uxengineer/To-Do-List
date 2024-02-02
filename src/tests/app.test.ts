import Task from "../core/interface-task";
import { Todolist } from "../core/class-todolist_from_class-data";

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
    const completedTask = todoList.completedTask(1);
    expect(completedTask).toBe("Ok");
  });

  
  test("showTask should return the correct task", () => {
    const retrievedTask = todoList.showTask(1);
    expect(typeof retrievedTask).toBe("object");
  });
  
  test("showAllTasks should return all tasks", () => {
    const allTasks = todoList.showAllTasks();
    expect(allTasks.length).toBeGreaterThan(1);
  });

  test("deleteTask should delete a task", () => {
    const taskDeleted = todoList.deleteTask(1);
    expect(taskDeleted).toBe("Deleted!");
  });
});


