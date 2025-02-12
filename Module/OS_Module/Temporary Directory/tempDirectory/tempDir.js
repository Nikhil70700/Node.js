//!   Get temporary directory
//Returns the operating system's default directory for temporary files

const os=require('os');
const tempDir=os.tmpdir();
console.log(`Temporary Directory Is:${tempDir}`);