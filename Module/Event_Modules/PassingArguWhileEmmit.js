//* You can also pass arguments while emitting the event
const EventEmitter=require('events');

//Importing Chalk
const chalk=require('chalk');



const emitter=new EventEmitter();

emitter.on("greet",(username,profession)=>{
//emitter.on(eventName, callbackFunction);
 
    console.log(`hello ${username} Your are a ${profession} right..?`);
})
emitter.emit("greet","Nikhil Pandey","Software Engineer");


//! but it's best idea to take a single as an object





