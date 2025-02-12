const os=require('os');

const numOfCpuCore=os.cpus().length;//Get Number of CPU Cores

console.log(`Number of CPU Cores: ${numOfCpuCore}`);