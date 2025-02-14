//* You can also pass arguments while emitting the event
const EventEmitter=require('events');

//Importing Chalk
// const chalk=require('chalk');
import chalk from 'chalk'; 



const emitter=new EventEmitter();

emitter.on("greet",(username,profession)=>{
//emitter.on(eventName, callbackFunction);
 
    console.log(`hello ${username} Your are a ${profession} right..?`);
})
emitter.emit("greet","Nikhil Pandey","Software Engineer");


//! but it's best idea to take a single as an object






emitter.on("myData", (args) => {
    console.log(`Hello! ${chalk.green(args.name)} You Are a ${args.profession} at ${args.companyName} Right!`);
});

emitter.emit("myData", { name: "Nikhil", profession: "Software Engineer", companyName: "Microsoft" });

