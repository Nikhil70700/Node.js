//! Return the Free Memory of RAM (random Access memory);

//*for Checking total RAM available in the system

const totalMemOfRAM=os.totalmem();
const totalMemInGB=totalMemOfRAM/(1024*1024*1024);
console.log(`Total Mem Of RAM: ${totalMemInGB.toFixed(1)} GB`);
