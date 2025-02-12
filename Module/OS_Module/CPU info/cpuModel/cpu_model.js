const os=require('os');


const cpuModel=os.cpus()[0].model; // Get CPU Model Only

console.log(cpuModel);