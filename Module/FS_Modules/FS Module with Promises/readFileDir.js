const fs=require('fs');
const path=require('path');
// const fileName=('Updatedtext.txt');
// const filePath=path.join(__dirname,fileName);


const fileName=__dirname;


fs.promises.readdir(fileName)
.then((data)=>console.log(data))
.catch((err)=>console.error(err));