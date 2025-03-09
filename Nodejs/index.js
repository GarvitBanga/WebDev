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