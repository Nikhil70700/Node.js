//*====================================================
//?  fs.appendFile():
//? Appends Data to a file .If the file doesn't exist it will be created.
//!syntax: fs.appendFile(path,options,callback);

const fs=require('fs');
const path=require('path');
const fileName="UpdateAsync.txt";
const filePath=path.join(__dirname,fileName);

fs.appendFile(filePath,"\n Have a Nice Day","utf-8",(err)=>{
    if(err) console.log(err);
    else console.log("Data Is Updated");
})