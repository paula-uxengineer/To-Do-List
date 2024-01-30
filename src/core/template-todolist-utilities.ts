import Task from "./template-task";
import * as fs from "fs";

export class TodolistDataStorage {
  saveTasksToFile(tasks: Task[]) {
    const tasksData: string = JSON.stringify(tasks, null, 2);
    
    fs.writeFileSync('./tasks.json', tasksData, 'utf-8');

    console.log('Tasks saved in the tasks.json file.');
  }

  loadTasksFromFile(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8');
    const tasks = JSON.parse(data);

    return tasks;
  }
}