//!Old! Using Promises
// const fs=require('fs/promises');
// const path=require('path');

// const fileName="asyncFile.txt";
// const filePath=path.join(__dirname,fileName);
// const filePath1=__dirname;

// fs.readdir(filePath1)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));
//*=============================================

const fs=require('fs/promises');
const path=require('path');
const fileName="asyncFile.txt";
const filePath=path.join(__dirname,fileName);
const filePath1=__dirname;

const readFolder=async()=>{ //CallBack function
    try{
      const res= await fs.readdir(filePath1);
      console.log(res)
    }catch(error){
        console.error(error);
    }
;
}


readFolder();