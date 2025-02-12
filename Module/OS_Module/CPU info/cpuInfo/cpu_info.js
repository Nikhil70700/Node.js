//!Get CPU information
//Returns an array of objects with details about each logical

const os=require('os');
const cpuInfo=(os.cpus()); // Get CPU Information

console.log(cpuInfo);


