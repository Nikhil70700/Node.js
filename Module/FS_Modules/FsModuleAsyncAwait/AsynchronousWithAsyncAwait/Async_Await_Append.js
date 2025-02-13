const fs=require("fs/promises");
const path=require("path");
// const { exec } = require("child_process");
const fileName="asyncFile.txt";
const filePath=path.join(__dirname,fileName);

//! Syntax:- fsPromise.appendFile(path,data,options);

const appendFileEx=async()=>{
    try{

       await fs.appendFile(filePath,"\n Appending the content","utf-8");
       console.log("Appended Data!")

    }catch(err){
        console.log("Error",err);
    }
}
appendFileEx();