import fs from "fs";
import { ITaskList } from "./ITasklist";

export class TodolistStorage {
  saveTasksToFile(taskList: ITaskList): void {
    fs.writeFileSync(
      "./src/core/data.json",
      JSON.stringify(taskList, null, 2),
      "utf-8"
    );
    console.log("Tasks saved to file.");
  }

  loadTasksFromFile(filename: string): ITaskList {
    try {
      const data = fs.readFileSync(filename, "utf-8");
      const taskList: ITaskList = JSON.parse(data);
      return taskList;
    } catch (error) {
      console.error("Error loading tasks from file:", error);
      return { tasks: [], indice: 1 };
    }
  }
}
