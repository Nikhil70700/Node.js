const os=require('os');

const osRelease=os.release();
console.log(osRelease);

console.log("OS Platform:", os.platform()); // "win32", "linux", "darwin"
