import Task from "./interface-task";
import { TodolistDataStorage } from "./class-data";

export class Todolist extends TodolistDataStorage{

    listTask: any;

    constructor(){
        super();
        this.listTask = this.loadTasksFromFile("./src/core/data.json");
    }

    addTask(taska: string): Task {
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

    completedTask(id: number) : string {
        const task = this.listTask.taskas.findIndex((task: Task) => task.id == id)

        if (task != -1) {
            this.listTask.taskas[task].completed = true;
            console.log("Task is completed");
            this.saveTasksToFile(this.listTask);
            return "Ok"

        } else {
            console.log("Not completed taks found");
            return "False"
        }
    }

    deleteTask(id: number) : string {
        const index = this.listTask.taskas.findIndex((task: Task) => task.id === id);

        if (index != -1) {
            this.listTask.taskas.splice(index, 1);
            this.saveTasksToFile(this.listTask)
            console.log("Task is deleted");
            return "Deleted!"
            
        } else {
            console.log("Not task found");
            return "No deleted!"
        }
    }
    
    showTask(id:number): Task {
        const task = this.listTask.taskas.find((task: Task) => task.id === id);
        
        console.log(task); 

        return task;
    }

    showAllTasks() : Task[] {
       return this.listTask.taskas;
    }

}

// const exemple = new Todolist().addTask("check VS");
// console.log(exemple);