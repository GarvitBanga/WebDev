
// const fs=require("fs");
// function readFile(fileName){
//     fs.readFile(fileName,"utf8",function(error,data){
//         let cnt=0;
//         for(let i=0;i<data.length;i++){
//             if(data[i]===" ")cnt++;
//         }
//         console.log(cnt+1);
//     });
// }
// readFile(process.argv[2]);


// console.log(process.argv); //this contains the command line arguments passed to the node process
// console.log(process.argv[2]); this contains the first argument passed to the node process
//this is the output of the above
// [
//     '/Users/garvitbanga/.nvm/versions/node/v22.14.0/bin/node',
//     '/Users/garvitbanga/Downloads/WebDev/WebDev/Nodejs/filetask.js',
//     '/Users/garvitbanga/Downloads/WebDev/WebDev/Nodejs/a.txt'
// ]


// So why do we need commander module if we can pass the file name as an argument to the node process
// process.argv doesn't give you the -h or --help option
// so we need to use external library- commander module

const { Command } = require('commander');
const fs=require("fs");
const program = new Command();

program.name('filetask').description('CLI to do file based tasks').version('0.1.0');
// Description of the program


// Now we can add the commands

program.command('count')
    .description('Count the number of words in a file')
    .argument('<file>', 'File to count words')
    .action((file)=>{
        fs.readFile(file,"utf8",function(error,data){
            if(error){
                console.log("Error:"+error);
                return;
            }
            let cnt=0;
            // for(let i=0;i<data.length;i++){
            //     if(data[i]===" ")cnt++;
            // }
            cnt=data.split(" ").length;
            console.log(`There are ${cnt} words in the file`);    
        });
    });

    program.command('count_sentences')
    .description('Count the number of sentences in a file')
    .argument('<file>', 'File to count sentences')
    .action((file)=>{
        fs.readFile(file,"utf8",function(error,data){
            if(error){
                console.log("Error:"+error);
                return;
            }
            let cnt=0;
            for(let i=0;i<data.length;i++){
                if(data[i]==="\n")cnt++;
            }
            console.log(`There are ${cnt+1} sentences in the file`);    
        });
    });
program.parse();


// node filetask.js -h
// Usage: filetask [options] [command]

// CLI to do file based tasks

// Options:
//   -V, --version           output the version number
//   -h, --help              display help for command

// Commands:
//   count <file>            Count the number of words in a file
//   count_sentences <file>  Count the number of sentences in a file
//   help [command]          display help for command