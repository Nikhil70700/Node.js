//Todo for Asynchronous 



//*=================================================
//*fs.writeFile(): Write Data to the File,replacing the file if it already exists
//*=================================================
//! Syntax: fs.writeFile(path,data,options,callback);

/// path: The path of the file to be written
/// data: The data to be written to the file
/// options: Optional.Specifies encoding ('utf8)mode ,or flag.
/// callback: a function with an err parameter

//*====================================================

const fs=require('fs');
const path=require('path');

const fileName="fsAsync.txt";
const filePath=path.join(__dirname,fileName);
 const writeMyFile=fs.writeFile(filePath,"Good Evening Nikhil Pandey",'utf8',(err)=>{

    if(err){
        console.error(err);
    }else{
        console.log("File Written Successfully");
    }

 })
