import { ITask } from "./ITask";
import { ITaskList } from "./ITasklist";
import { TodolistStorage } from "./todolistStorage";

export class Todolist extends TodolistStorage {
  listTask: ITaskList;

  constructor() {
    super();
    this.listTask = this.loadTasksFromFile("./src/core/data.json");
  }

  addTask(taskText: string): ITask {
    const newTask: ITask = {
      id: this.listTask.indice,
      text: taskText,
      completed: false,
    };

    this.listTask.tasks.push(newTask);
    this.listTask.indice += 1;

    this.saveTasksToFile(this.listTask);

    console.log("New task added:", newTask);

    return newTask;
  }

  completedTask(id: number): string {
    const taskIndex = this.listTask.tasks.findIndex(
      (task: ITask) => task.id === id
    );

    if (taskIndex !== -1) {
      this.listTask.tasks[taskIndex].completed = true;
      this.saveTasksToFile(this.listTask);
      console.log("Task completed:", this.listTask.tasks[taskIndex]);
      return "Ok";
    } else {
      console.log("Task not found");
      return "False";
    }
  }

  deleteTask(id: number): string {
    const index = this.listTask.tasks.findIndex(
      (task: ITask) => task.id === id
    );

    if (index !== -1) {
      const [deletedTask] = this.listTask.tasks.splice(index, 1);
      this.saveTasksToFile(this.listTask);
      console.log("Task deleted:", deletedTask);
      return "Deleted!";
    } else {
      console.log("Task not found");
      return "Not deleted!";
    }
  }

  showTask(id: number): ITask | undefined {
    const task = this.listTask.tasks.find((task: ITask) => task.id === id);

    if (task) {
      console.log("Task found:", task);
    } else {
      console.log("Task not found");
    }

    return task;
  }

  showAllTasks(): ITask[] {
    console.log("All tasks:", this.listTask.tasks);
    return this.listTask.tasks;
  }
}
