// import * as fs from 'fs';
// import * as path from 'path';


// import { Command } from 'commander';
// import Task from '../core/template-task';
// import { Todolist } from '../core/template-todolist';

// const program = new Command();
// const todoListInstance = new Todolist();

// program
//   .version('1.0.0')
//   .description('To-do List');

// program
//   .command('add <task>')
//   .description('Añadir nueva tarea')
//   .action((task: string) => {
//     const newTask: Task = todoListInstance.addTask(task);
//     saveTasksToFile(todoListInstance.showAllTasks());
//     console.log(`Nueva tarea añadida: ${newTask.text}`);
//   });

// program
//   .command('complete <id>')
//   .description('Marcar una tarea como completada')
//   .action((id: string) => {
//     todoListInstance.completedTask(Number(id));
//     saveTasksToFile(todoListInstance.showAllTasks());
//   });

// program
//   .command('delete <id>')
//   .description('Eliminar una tarea')
//   .action((id: string) => {
//     todoListInstance.deleteTask(Number(id));
//     saveTasksToFile(todoListInstance.showAllTasks());
//   });

// program
//   .command('show <id>')
//   .description('Mostrar información de una tarea')
//   .action((id: string) => {
//     todoListInstance.showTask(Number(id));
//   });

// program
//   .command('show-all')
//   .description('Mostrar todas las tareas')
//   .action(() => {
//     const allTasks = todoListInstance.showAllTasks();
//     console.log('Todas las tareas:', allTasks);
//   });

// program
//   .command('load')
//   .description('Cargar tareas desde archivo')
//   .action(() => {
//     loadTasksFromFile();
//   });

// program
//   .command('save')
//   .description('Guardar tareas en archivo')
//   .action(() => {
//     saveTasksToFile(todoListInstance.showAllTasks());
//   });

// program
//   .command('menu')  // Nuevo comando para mostrar el menú principal
//   .description('Mostrar el menú principal')
//   .action(() => {
//     displayMainMenu();
//   });

// program.parse(process.argv);