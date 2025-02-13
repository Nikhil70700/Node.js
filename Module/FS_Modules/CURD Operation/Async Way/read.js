//* ===========================================
//*fs.readFile():Read the content of a file asynchronously and return the data as a buffer or string

//! Syntax: fs.readFile(path,options,callback);

//? path: File path to read from 
//?options:Optional. An object or String Specifying the Encoding('utf8),or flag ('r) for reading.

//?callBack:A function with parameter (err,data) to be called when the operation is complete.

const fs=require('fs');
const path=require('path');

const fileName="UpdateAsync.txt";
const filePath=path.join(__dirname,fileName);
fs.readFile(filePath,utf-8,(err,data)=>{
    if(err)console.error(err);
    else console.log(data);
    })