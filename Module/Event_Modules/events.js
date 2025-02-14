// // Import EventEmitter Class
// const EventEmitter=require('events');

// //Create an instance of EventEmitter
// const emitter=new EventEmitter();

// // 1. Define an event listener (addListener)
// emitter.on("greet",()=>{
//     console.log("Hello, Nikhil!");
// })
// // 2. Trigger (emit ) the "greet " event.
// emitter.emit("greet")


// Another Example

const EventEmitter = require('events');  // Import events module
const emitter = new EventEmitter();      // Create an EventEmitter instance

// Register an event listener for "message" event
emitter.on("message", (text) => {
    console.log(`Received message: ${text}`);
});

// Emit the "message" event with a value
emitter.emit("message", "Hello, EventEmitter!");
