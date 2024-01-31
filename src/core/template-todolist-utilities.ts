import Task from "./template-task";
import fs from "fs";

export class TodolistDataStorage {
  saveTasksToFile(tasks: Task[]) {
    
    fs.writeFileSync(__dirname + "/tasks.json", JSON.stringify(tasks), 'utf-8');

    console.log('Tasks saved in the tasks.json file.');
  }

  loadTasksFromFile(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8');
    const tasks = JSON.parse(data);
  
    return tasks;
  }
}

const resultado = new TodolistDataStorage().loadTasksFromFile(__dirname + "/tasks.json");
console.log(resultado);

// async function loadTasksFromFile(filename: string) {
//   const data = await fs.promises.readFile(filename, 'utf-8');
//   const tasks = JSON.parse(data);

//   return tasks;
// }
// async function call(){
//   const json = await loadTasksFromFile(__dirname + "/tasks.json");
//   console.log(json);

// }
// call()
// console.log(__dirname + "/tasks.json")
