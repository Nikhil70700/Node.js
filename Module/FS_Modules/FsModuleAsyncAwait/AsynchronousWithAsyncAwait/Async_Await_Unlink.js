const fs=require('fs/promises');
const path=require('path');
const fileName="asyncFile.txt"
const filePath=path.join(__dirname,fileName);


//!Syntax:-fs.promise.unlink(path)

const unlinkFileEx=async()=>{
    try{
        await fs.unlink(filePath)
        console.log("File deleted");

    }catch(err){
     console.error(err)
    }
}
unlinkFileEx();


//!If Error Occurs then it will be handled by the catch block and the file will not be deleted.
// const unlinkFileEx=async()=>{
//     try{
//         await fs.unlink(filePaths)
//         console.log("File deleted");

//     }catch(err){
//      console.error("Deleting file",err.message)
//     }
// }
// unlinkFileEx();