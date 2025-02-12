//! os.uptime():-The os.uptime() method returns the system uptime in seconds, which is the total time your computer has been running since the last reboot.


const os=require("os");


const uptimeInSeconds = os.uptime(); // Returns uptime in seconds
const uptimeInHours=(uptimeInSeconds/3600).toFixed(2); //Converts in hours

console.log(uptimeInSeconds);
console.log(`This system is Running since ${uptimeInHours} hours of Reboot`);