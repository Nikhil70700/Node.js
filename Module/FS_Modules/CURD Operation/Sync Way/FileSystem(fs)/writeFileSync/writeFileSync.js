//!Syntax:-> fs.writeFileSync(filename, data[, options])
const fs=require('fs');
const path = require('path');
const fileName="text.txt";
const filePath=path.join(__dirname,fileName);


const writeFile=fs.writeFileSync(filePath,"This Is Initial Data","utf-8");
console.log(writeFile);



// console.log(__dirname)

 





