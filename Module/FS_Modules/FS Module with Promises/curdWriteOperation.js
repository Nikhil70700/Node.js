//*===========================================

//*create(write a file):fs.promises.writeFile.

//* Creates or overwrites a file. with specified content.

//* The writefile() method writes data to a file asynchronously.

//* If the file does not exist It is created .

//* If it exists ,its content is replaced.

//*=============================================


//!  Syntax: fs.promises.writeFile(path,data,options).then().catch();

//? Path: path to the file.
//? Data: content to write.
//? OptionsEncoding ('uts8'),flags,etc(Optional).

//!==================================================================================

const fs=require('fs');
const path=require('path');

const fileName="fsPromise.txt";
const filePath=path.join(__dirname,fileName);

fs.promises.writeFile(filePath,"Hi! Nikhil Good Afternoon","utf-8")
.then((data)=>console.log("File Created SuccessFully"))
.catch((err)=>console.error(err));

