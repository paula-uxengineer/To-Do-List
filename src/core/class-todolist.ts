import Task from "./interface-task";
import { TodolistDataStorage } from "./class-data_from_todolist";

export class Todolist extends TodolistDataStorage{

    listTask: any;

    constructor(){
        super();
        this.listTask = this.loadTasksFromFile("./src/core/tasks.json");
    }

    addTask(taska: string) {
        const newTask: Task = {
            id: this.listTask.indice,
            text: taska,
            completed: false,
        }

        this.listTask.taskas.push(newTask);
        
        this.listTask.indice += 1;

        this.saveTasksToFile(this.listTask);

        console.log("New task is added");
        
        return newTask;
    }

    completedTask(id: number) {
        const task = this.listTask.taskas.find((task: Task) => task.id == id)

        if (task) {
            task.completed = true;
            console.log("Task is completed");

        } else {
            console.log("Not completed taks found");
        }
    }

    deleteTask(id: number) {
        const index = this.listTask.taskas.findIndex((task: Task) => task.id === id);

        if (index !== -1) {
            this.listTask.taskas.splice(index, 1);
            console.log("Task is deleted");
            
        } else {
            console.log("Not task found");
        }
        
        return "Deleted!"
    }
    
    showTask(id:number) {
        const task = this.listTask.taskas.find((task: Task) => task.id === id);
        console.log(task); 

        return task;
    }

    showAllTasks() {
       return this.listTask.taskas;
    }

}



// const app = new Todolist();
// console.log(app);

// console.log(app.addTask("aprender typescript "));

// console.log(app.showAllTasks())

// console.log(app.deleteTask(3))