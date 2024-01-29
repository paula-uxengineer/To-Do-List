import Task from "./template";
import {Todolist} from "./index";

describe(Todolist, () => {
        let todoList: Todolist; 

        beforeEach(() => {
            todoList = new Todolist();
        });
    
        test('addTask should add a new task', () => {
            const newTask: Task = todoList.addTask('study TypeScript');
            expect(newTask.text).toBe('study TypeScript');
            expect(newTask.completed).toBe(false);
        });

        test('completedTask should mark a task as completed', () => {
            const newTask: Task = todoList.addTask('study TypeScript');
            todoList.completedTask(newTask.id);
            expect(newTask.completed).toBe(true);  
        });

        test('deleteTask should delete a task', () => {
            const newTask: Task = todoList.addTask('study TypeScript');
            todoList.deleteTask(newTask.id);
            expect(todoList.listTask).toHaveLength(0);
        });

        test('showTask should return the correct task', () => {
            const newTask: Task = todoList.addTask('study TypeScript');
            const retrievedTask = todoList.showTask(newTask.id);
            expect(retrievedTask).toEqual(newTask);
        });
        
        test('showAllTasks should return all tasks', () => {
            todoList.addTask('Adopt a dog');
            todoList.addTask('Adopt more dogs');
            const allTasks = todoList.showAllTasks();
            expect(allTasks).toHaveLength(2);
        });

        test('deleteAllTask should delete all tasks', () => {
            todoList.addTask('Meet Anders Hejlsberg');
            todoList.addTask('ask him about the use of any');
            todoList.deleteAllTasks();
            expect(todoList.listTask).toHaveLength(0);
        });
});

afterAll(() => {
    console.log('Run test:');
  });
