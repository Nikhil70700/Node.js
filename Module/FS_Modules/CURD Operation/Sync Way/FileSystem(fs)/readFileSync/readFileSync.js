//*=============================
//!readFileSync:===>
 //*=============================   

//! syntax:
//? const data = fs.readFileSync(Filepath, options);
//? options:- Optional .Ending ('utf8') to get sata as a string

//!NOTE: Kis file ko read krna chahte ho and kis format me read krna chahte ho   

//fs.readFileSync():
//fs.readFileSync() reads the entire file into memory. It is synchronous, meaning it blocks the execution
//Reads a file's content and returns it as a  string or buffer.

//*====================================================================================================

const fs=require('fs');
const path=require('path');

const fileName="text.txt"
const filePath=path.join(__dirname,fileName);

const readFile=fs.readFileSync(filePath,'utf-8');
console.log(readFile);


//! Use  .toString() if working with binary data (Buffer): for example ,If you need both the raw binary  data and its string representation.
