import Task from "./template-task";
import { TodolistDataStorage } from "./template-todolist-utilities";

export class Todolist extends TodolistDataStorage{

    listTask: Task[]

    constructor(){
        super();
        this.listTask = [];
    }

    addTask(taska: string) {
        const newTask: Task = {
            id: this.listTask.length + 1,
            text: taska,
            completed: false,
        }

        this.listTask.push(newTask);
        
        this.saveTasksToFile(this.listTask);

        console.log("New task is added");
        
        return newTask;
    }

    completedTask(id: number) {
        const task = this.listTask.find(task => task.id == id)

        if (task) {
            task.completed = true;
            console.log("Task is completed");

        } else {
            console.log("Not completed taks found");
        }
    }

    deleteTask(id: number) {
        const index = this.listTask.findIndex((task) => task.id === id);

        if (index !== -1) {
            this.listTask.splice(index, 1);
            console.log("Task is deleted");

        } else {
            console.log("Not task found");
        }
    }
    
    showTask(id:number) {
        const task = this.listTask.find((task) => task.id === id);
        console.log(task);

        return task;
    }

    showAllTasks() {
        return this.listTask;
    }

}