const os=require("os");
// console.log('Free Memory:',os.freemem());


//Memory In byte:-

const freeMemBytes=os.freemem();
console.log('FreeMemInByte;',freeMemBytes);

//Free Memory in MB:-
const freeMemInMB=freeMemBytes/(1024*1024);
// console.log('Free Mem In MB:',freeMemInMB);
console.log(`Free Memory:${freeMemInMB.toFixed()} MB`);

//Free Memory In GB:-
const freeMemInGB=freeMemInMB/1024;
// console.log('Free Mem In GB:',freeMemInGB);
console.log(`Free Memory ${freeMemInGB.toFixed()} GB`);



