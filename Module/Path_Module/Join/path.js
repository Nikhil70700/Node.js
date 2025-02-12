//!The path.join() method combines path segments using the platform-specific separator (\ for Windows, / for Linux/Mac). This makes your code more portable across different operating systems.

const path=require('path');

//?Basic Uses

const fullPath=path.join('folder','subfolder','file.txt');
console.log(fullPath);
//* Output:- folder/subfolder/file.txt


//? Using with __dirname (current directory)
const configPath = path.join(__dirname, 'config', 'settings.json');
console.log(configPath);
//* Output: /your/current/directory/config/settings.json

console.log("with __dirname (current directory)");
//? Handling parent directory using ..
const parentPath = path.join(__dirname, '..', 'logs', 'error.log');
console.log(parentPath);