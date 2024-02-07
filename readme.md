# Node express with Typescript

# step1:

# For initialzing project - run the above in the root of the project

-> `mkdir node-projects`
-> `cd node-projects/`
-> `npm init -y`

# install typescript as dev dependenciy

`npm install -D typescript`

Install dotenv package for using enviroment variable in the app
`npm i express dotenv`

# step2:

install types for checking its type while writing code.
`npm i -D typescript @types/express @types/node`

Initialze the Typescript with running the below command:
`npx tsc --init`

tsconfig.json file will be created now open this file and do a miror change.

`target`: Enables the specification of the target JavaScript version that the compiler will output
`module`: Facilitates the utilization of a module manager in the compiled JavaScript code, CommonJS is supported and is a standard in Node.js
`strict`: Toggles strict type-checking protocols
`esModuleInterop`: Enables the compilation of ES6 modules to CommonJS modules
`skipLibCheck`: When set to true, bypasses type-checking of default library declaration files
`forceConsistentCasingInFileNames`: When set to true, enforces case-sensitive file naming

By default, the value of this option is set to the project’s root. Change it to `dist`, as shown below:

    ```Javascript{
    "compilerOptions": {
        ...
        "outDir": "./dist"
        ...
    }
    }`

Now create express server with `.ts` extention

```Javascript // src/index.ts
 import express, { Express, Request, Response } from "express";
 import dotenv from "dotenv";

 dotenv.config();

 const app: Express = express();
 const port = process.env.PORT || 3000;

 app.get("/", (req: Request, res: Response) => {
 res.send("Express + TypeScript Server");
 });

 app.listen(port, () => {
 console.log(`[server]: Server is running at http://localhost:${port}`);
 });
```

<!-- ------------------------------------------------------------- -->

Install nodemon to watch files and changes

`npm i -D nodemon ts-node`

```Javascript
 {
 "scripts": {
     "build": "npx tsc",
     "start": "node dist/index.js",
     "dev": "nodemon src/index.ts"
 }
 }
```
