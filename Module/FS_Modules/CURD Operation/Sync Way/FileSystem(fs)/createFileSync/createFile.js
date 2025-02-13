//*======================================================================
//* fs.appendFileSync():Append data to a file . If the file does not exist ,it creates the file 
//*=======================================================================

//!Syntax: fs.appendFileSync(filePath,data,Options)

//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Ending ('utf8') to get data as a string.



const fs=require('fs');
const path=require('path');

const fileName="text.txt"
const filePath=path.join(__dirname,fileName);
const appendData=fs.appendFileSync(filePath,"\nHello Nikhil!");
console.log(appendData);
