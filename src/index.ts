import Task from "./template";
import  "./data-storage.json";

export class Todolist{

    listTask: Task[]

    constructor(){
        this.listTask = [];
    }

    addTask(taska: string) {
        const newTask: Task = {
            id: this.listTask.length +1,
            text: taska,
            completed: false,
        }

        this.listTask.push(newTask);

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

    deleteAllTasks(){
        this.listTask = [];
        return this.listTask;
    }
}


const app = new Todolist(); 

console.log(app.addTask(`Adopt a dog`));

console.log(app.addTask(`adopt more dogs`));

console.log("Current Task:", app.showTask(1));

console.log("Show all current tasks:", app.showAllTasks());

