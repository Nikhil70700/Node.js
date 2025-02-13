const fs=require('fs');
const path=require('path');

const fileName="fsPromise.txt";


const file=__dirname;
const filePath=path.join(__dirname,fileName);
fs.promises.readdir(file)
.then((data)=>console.log(data))
.catch((err)=>console.error(err));