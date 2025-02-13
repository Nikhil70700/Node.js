//*================================================

//*Read(Read a file):readFile();

//* The readFile() method reads data from a file.

//* It can return the data as Buffer or string based on the encoding provided.

//! Syntax: fs.promises.readFile(path,options).then(data...).catch(err=>....)

//? Path: Path to the file
//? Options:  Encoding ('utf8') or no encoding for binary data.



const fs=require('fs');
const path=require('path');

const fileName="fsPromise.txt";
const filePath=path.join(__dirname,fileName);


fs.promises.readFile(filePath,"utf-8")
.then((data)=>console.log("Read SuccessFully\n",data))
.catch((err)=>console.error("Something Wend Wrong!",err))
