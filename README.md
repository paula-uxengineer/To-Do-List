# <span style="color: blue;">TO-DO CLI APP</span> 
> A Command Line Interface (CLI) TO-DO application built with TypeScript, following Test Driven Development (TDD).

## :small_blue_diamond:Description

This TO-DO CLI application allows users to manage tasks effectively. Users can create tasks, view tasks by status (pending, in progress, completed), update tasks, and delete tasks. The application is designed with hexagonal architecture and uses Typescript for development.

## :small_blue_diamond:Features

- Add tasks.
- Mark tasks as completed.
- Remove tasks from the list.
- Show a task
- Display all tasks.

## :small_blue_diamond:Prerequisites

- Node.js (version >= 14)
- npm (version >= 6)
- Typescript

## :small_blue_diamond:Installation

1. To get started, you first need to clone the repository:

```bash
git clone [https://github.com/paula-uxengineer/to-do-list.git]
```

2. Next, install the project dependencies:

```bash
npm install
```

## :small_blue_diamond:How To Start

To start the app in development mode, run the following script:

```bash
npm run dev
```

## :small_blue_diamond:Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```bash
npm run jest
```

```dev```: Starts the development app with ts-node-dev and allows debugging

```bash
npm run jest
```

## :small_blue_diamond:Dependencies

- "figlet": "^1.7.0"  

## :small_blue_diamond:Dev Dependencies

- "@types/jest": "^29.5.6",
- "@types/node": "^20.11.10",
- "@typescript-eslint/eslint-plugin": "^6.9.0",
- "eslint": "^8.56.0",
- "eslint-config-prettier": "^9.0.0",
- "eslint-plugin-prettier": "^5.0.1",
- "jest": "^29.7.0",
- "nodemon": "^3.0.1",
- "prettier": "^3.0.3",
- "ts-jest": "^29.1.1",
- "ts-node": "^10.9.2",
- "typescript": "^5.3.3"

## :small_blue_diamond:Folder structure

In this folder structure, the code is organized according to the principles of Hexagonal Architecture. 

```
src/
|
├── cli
│  └── cli-app.ts
|
└── core
   ├── class-data.ts
   ├── class-todolist_from_class-data.ts
   ├── data.json
   ├── index.ts
   └── interface-task.ts
|
└── web
   └── 
|
|
└── tests
   └── app.test.ts

```
## :small_blue_diamond:Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes to your branch.
Submit a pull request targeting the develop branch.
For bug reports and feature requests, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
