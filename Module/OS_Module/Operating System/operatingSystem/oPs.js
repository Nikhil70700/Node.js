//! Get Operating System name

//Returns the operating system name as returned by uname(3). For example ,it returns 'Linux' on Linux,'Darwin' on macOS,and 'Windows_NT' on Windows.

const os=require('os');

const operatingSys=os.type();
console.log(operatingSys);


console.log("OS Release:", os.release());
