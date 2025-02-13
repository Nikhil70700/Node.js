//* The unlink() method removes the specified file asynchronously.

//! Syntax:- fs.promises.unlink(path).then().catch():

//? path: Path to the file to be removed.

const fs=require('fs');
const path=require('path');
const fileName="fsPromise.txt";
const filePath=path.join(__dirname,fileName);

fs.promises.unlink(filePath)
.then(console.log('Removed SuccessFully!'))
.catch((err)=>console.error(err));

