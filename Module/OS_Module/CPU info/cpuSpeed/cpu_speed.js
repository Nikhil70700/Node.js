const os=require('os');

const cpuSpeed=os.cpus()[0].speed;
console.log(`Your CPU speed Is: ${cpuSpeed} MHz`);