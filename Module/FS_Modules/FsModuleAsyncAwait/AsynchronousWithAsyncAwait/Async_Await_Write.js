const fs=require('fs/promises');
const path=require('path');
const fileName="asyncFile.txt";
const filePath=path.join(__dirname,fileName);


const writeFileEx = async () => {
    try {
        await fs.writeFile(filePath, "Hi This is Async way using Async_wait", "utf-8");
        console.log("File created");

    } catch (err) {
        console.error(err)
    }

}
writeFileEx();


//fs.promises.writeFile():Writes data to a file asynchronously,If the file exists,it Overwrites the content.

//! syntx!: fs.promises.writeFiles(path,data,options):

//? path:- The file path to write to .
//? Data:-The content to write the file
//? options:-Optional parameter to specify the encoding and mode of the file.

