import Task from "./interface-task";
import fs from "fs";

export class TodolistDataStorage {
  saveTasksToFile(tasks: Task[]) {
    
    fs.writeFileSync("./src/core/tasks.json", JSON.stringify(tasks), 'utf-8');

    console.log('Tasks saved in the tasks.json file.');
  }

  loadTasksFromFile(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8');
    const tasks = JSON.parse(data);
  
    return tasks;
  }
}

const resultado = new TodolistDataStorage().loadTasksFromFile("./src/core/tasks.json");

// console.log(resultado)