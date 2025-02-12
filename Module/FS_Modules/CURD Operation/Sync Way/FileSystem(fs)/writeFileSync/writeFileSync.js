// const fs=require('fs');
// const path = require('path');

//!Syntax:-> fs.writeFileSync(filename, data[, options])

// const fileName="text.txt";
// const filePath=path.join(__dirname,fileName);


// const writeFile=fs.writeFileSync(filePath,"This Is Initial Data","utf-8");
// console.log(writeFile);



// console.log(__dirname)

 //*=============================
//!readFileSync:===>
 //*=============================   


   

//fs.readFileSync():
//fs.readFileSync() reads the entire file into memory. It is synchronous, meaning it blocks the execution
//Reads a file's content and returns it aas a  string or buffer.

//! syntax:
//? const data = fs.readFileSync(Filepath, options);
//? options:- Optional .Ending ('utf8') to get sata as a string

//!NOTE: Kis file ko read krna chahte ho and kis format me read krna chahte ho

// const fs=require('fs');
// const path=require('path');

// const fileName="text.txt"
// const filePath=path.join(__dirname,fileName);

// const readFile=fs.readFileSync(filePath,'utf-8');
// console.log(readFile);


//! Use  .toString() if working with binary data (Buffer): for example ,If you need both the raw binary  data and its string representation.


//*======================================================================
//* fs.appendFileSync():Append data to a file . If the file does not exist ,it creates the file 
//*=======================================================================

//!Syntax: fs.appendFileSync(filePath,data,Options)

//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Ending ('utf8') to get data as a string.



// const fs=require('fs');
// const path=require('path');

// const fileName="text.txt"
// const filePath=path.join(__dirname,fileName);
// const appendData=fs.appendFileSync(filePath,"\nHello Nikhil!");
// console.log(appendData);



//*===================================
//*Delete : fs.unlikeSync(filePath);
//*===================================
//! Syntax: fs.unlinkSync(filePath)
//? filePath:The path of file to delete

// const fs=require('fs');
// const path=require('path');
// const fileName="text.txt"
// const filePath=path.join(__dirname,fileName);


// const fileDelete=fs.unlinkSync(filePath);
// console.log(fileDelete);

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