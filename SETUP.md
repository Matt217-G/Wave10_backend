# Starting your backend server

## STEPS (starting from an empty folder)

1. Create a new empty folder name it [app_name]_backend. (name it whatever you want)
2. Initialize your project
    2.1: Run ``` npm init -y```. This will create your package.json file for your application. This holds some information about your project, as well as a list of your libraries/packages that you'll download. (key term: dependencies)
    2.2: (OPTIONAL) changes in your package.json
        - change the ``` "type": "commonjs" => "type": "module" ``` lets you do import/exports like we've been doing in react.
        - add in a new 'script' to "scripts". ``` "dev": "node --watch src/server.js" ``` This lets you run "npm run dev" in the terminal to start your backend sever. Just like we have in the frontend.
3. Setting Up Your Backend
    - let's start by downloading some of our libraries we'll need to start initially. Make sure your terminal is in the correct folder (your backend project) before we begin.
    1. ``` npm i express dotenv``` (our backend framework, env variable loader). These get download as part of our main build.
    2. ``` npm i --save-dev typescript tsx ``` (typescript stuff). These are downloads for us while developing the app, stuff that helps us as developers to catch errors and bugs. They don't get added to our final build.
        - Setting up Typescript
            - run ``` npx tsc --init ``` in your terminal (this will create a tsconfig.json file in your file tree)
            - this has all the settings you can update for typescript. Replace everything in there with this setup. Grab everything from [line 19 to 31]
            ```
                {
                    "compilerOptions": {
                        "target": "ES2020",
                        "module": "ESNext",
                        "moduleResolution": "Bundler",
                        "rootDir": "./src",
                        "outDir": "./dist",
                        "strict": true,
                        "esModuleInterop": true,
                        "skipLibCheck": true,
                        "forceConsistentCasingInFileNames": true
                    }
                }
            ```
    3. Okay, we're going to go back now to package.json and update our "dev" script, that we made earlier. Now that we have typescript installed we need a different command to watch for our server. we're going to change our dev script now to ``` tsx watch src/server.js ```
4. Structuring the backend
    - We're going to create a src folder and then inside, we're going to make one file: server.js
        [file tree]
        - node_modules
        - [src]
            - server.js
        - package-lock.json
        - package.json
5. From here we're going to be doing some setup for the sever, to get it actually running.
    ```
        import express from "express";
        const app = express();


        app.listen(3001, () => console.log("Server is running on port: 3001"))
    ```
    - importing express (our backend framework, equivalent to like React on the frontend)
    - creating a variable "app", this holds our entire backend/express application. this is the start of our entire sever.
    - app.listen: this takes in a port number and a callback function as parameters. What it does is
        1. starts the sever to listen for incoming requests (like api requests) and says to listen on port 3001 (on your computer, so this only works locally)
6. Starting your server: run ``` npm run dev ```
    - inside your terminal you should see our console.log that we added to the app.listen. Congratulations you have successfully created a backend server and it's now running.