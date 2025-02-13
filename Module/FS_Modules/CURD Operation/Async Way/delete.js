//* fs.unlink():Delete a file asynchronously
//! syntax: fs.unlink(path,callback);

const fs=require('fs');
const path=require('path');
const fileName="UpdateAsync.txt";
const filePath=path.join(__dirname,fileName);
fs.unlink(filePath,(err)=>{
    if(err) console.error(err)
    else console.log("File Deleted SuccessFully!");
})