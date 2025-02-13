const fs=require('fs');
const path=require('path');

const fileName="fsAsync.txt";
const filePath=path.join(__dirname,fileName);

const renameFile=fs.rename(filePath,"UpdateAsync.txt",(err)=>{
    if(err){
        console.error(err);

    }else{
        console.log("File Renamed SuccessFully 🎉🎉");
    }

})