console.log("Hello World");
// const chalk=require('chalk');
import chalk from "chalk"; //modern way of importing modules
console.log(chalk);
console.log(chalk.blue('Hello')+chalk.red(' World'));
// console.log(chalk.blue("Hello World"));


// const path=require("path");
// console.log(path);
// console.log(__dirname);

import path from 'path';
const __dirname = path.resolve();
console.log(__dirname);
console.log(path.join(__dirname,"../../index.js"));


    //"dependencies": {
    // "chalk": "^5.4.1" this ^ in json will bring chalk module or any updated version of chalk module but not the 6.x version

    // if multiple people are working on the same project and npm install brings different versions of the same module then it will cause problems
    // so that's why we pin the version of the module in the package-lock.json file
    // this is a good practice to follow