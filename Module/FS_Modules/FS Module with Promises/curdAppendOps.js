//* Update (Append Content to a File):appendFile()
//*Adds content to the end of a file
//* The appendFile() method adds content without overwriting the existing content.
//! Syntax: fs.promises.appendFile(path,data,options).then().catch()

//? path: Path to the file
//? data: Content to be added
//? Options: Encoding ('utf-8)or no encoding at binary data.

const fs = require('fs');
const path = require('path');

const fileName = "fsPromise.txt";
const filePath = path.join(__dirname, fileName);

fs.promises.appendFile(filePath, "\n Best of Luck", "utf-8")
    .then(() => console.log("This is Our Updated Data")) //  Proper function inside .then()
    .catch((err) => console.error("Error:", err));
