//* Rename File(fs.renameSync):Renames a file from one name to another
//*===================================
//! Syntax: fs.renameSync(oldPath,newPath)
//? oldPath: The path of the file to rename.
//? newPath: The new path of the file.


const fs=require('fs');
const path=require('path');
const fileName="text.txt"
const filePath=path.join(__dirname,fileName);
const renameFile=fs.renameSync(filePath,"NewFile.txt");
console.log(renameFile);