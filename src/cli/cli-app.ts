import * as readline from 'readline'

import Task from "../core/template-task";
import { Todolist } from "../core/template-todolist";

//////*** INIZIALICE CLI ***///////

const figlet = require("figlet"); //import figlet
const todoListInstance = new Todolist();

// const filename = 'tasks.json';

//////*** TITLE ***///////
function displayTitle(){ 
  return console.log(figlet.textSync("To-Do  List")) // .textsync() method from figlet to turn the text into ASCII Art
};

//////*** MENU ***///////
function displayMainMenu() {
  displayTitle();
  console.log('--- Menu ---');
  console.log('1. Add task');
  console.log('2. Completed task');
  console.log('3. Delete task');
  console.log('4. Display task');
  console.log('5. Display all tasks');
  console.log('6. Exit');

  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question('Select an option (1-9): ', (choice: string) => {
    readLine.close();
    handleMenuChoice(choice);
  });
}

function handleMenuChoice(choice: string) {
  switch (choice) {
    case '1':
      promptAndAddTask();
      break;
    case '2':
      promptAndCompleteTask();
      break;
    case '3':
      promptAndDeleteTask();
      break;
    case '4':
      promptAndShowTask();
      break;
    case '5':
      displayAllTasks();
      break;
    case '6':
      console.log('Leaving your to-do list.');
      process.exit();
      break;
    default:
      console.log('Invalid option. Please select an option from 1 to 9.');
      displayMainMenu();
      break;
  }
}

//////*** ADD TASK ***///////
function promptAndAddTask() {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question('Add new task: ', (task: string) => {
    readLine.close();

    const newTask: Task = todoListInstance.addTask(task); //extracting method .addTask from the Todolist

    todoListInstance.saveTasksToFile(newTask);
    todoListInstance.showAllTasks();

    console.log(`New task added: ${newTask.text}`);

    displayMainMenu();
  });
}


//////*** COMPLETED TASK ***///////
function promptAndCompleteTask() {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

    readLine.question('Enter the ID of the task to complete', (id: string) => {
      readLine.close();

    todoListInstance.completedTask(Number(id));

    todoListInstance.saveTasksToFile;

    console.log('Task completed');

    displayMainMenu();
  });
}


//////*** DELETE TASK ***///////
function promptAndDeleteTask() {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question('Enter the ID of the task to delete:', (id: string) => {
    readLine.close();

    todoListInstance.deleteTask(Number(id));

    todoListInstance.loadTasksFromFile();
    todoListInstance.showAllTasks();
    console.log('Task deleted.');

    displayMainMenu();
  });
}


//////*** DISPLAY A TASK ***///////
function promptAndShowTask() {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question('Enter the ID of the task to display: ', (id: string) => {
    readLine.close();

    todoListInstance.showTask(Number(id));

    displayMainMenu();
  });
}


//////*** DISPLAY ALLL TASKS ***///////
function displayAllTasks() {
  const allTasks = todoListInstance.showAllTasks();

  console.log('All tasks: ', allTasks);

  displayMainMenu();
}

displayMainMenu();
