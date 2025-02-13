const fs = require('fs/promises');
const path = require('path');
const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

//!Syntax: fs.promise.readFile(path,options):


const readFileEx = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log("Reading File", "\n", data)

    } catch (err) {
        console.log(err);
    }
};


readFileEx();