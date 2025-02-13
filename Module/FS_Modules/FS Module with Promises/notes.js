//?   =>     The fs/promise Module provides a promise based API for interacting with the fileSystem ,allowing asynchronous operations to be handles  using modern Java Script  features like async/await or .then() chains.It is part of the module in Node.js but designed for those who prefer promises over callback-based or synchronous methods.
 

//?Purpose: Simplifies asynchronous file operations by using promises,making the code more readable and modern compared to traditional callback-based approaches


//!Advantages:
// No need for manual callbacks.
// Cleaner and more intuitive asynchronous workflows using async/await.
// Suitable for modern JavaScript applications.


//!Use Cases


// Reading Files asynchronously in a non-blocking way.
// Writing or Appending Data to files without blocking the event loop.
// Performing Multiple File Operations sequentially or concurrently with
// promise chaining.
//Handling Errors Gracefully with .catch() or try...catch blocks.


//! Why .then() and .catch()---?

//?.then():ensures clear chaining of multiple asynchronous operations.

//?.catch: centralizes  error handling ,making it easy to debug and manage failures.


//! Instead of using fs.promises everytime:-
//? You can just import with 
// const fs=require('fs/promises')

//Now you don't need to use fs.promises everytime.
