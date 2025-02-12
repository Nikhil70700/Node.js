//!:-If you want to extract only IPv4 addresses:

let networkInterfaces = os.networkInterfaces();
for (let key in networkInterfaces) {
    networkInterfaces[key].forEach(interface => {
      if (interface.family === "IPv4" && !interface.internal) {
        console.log(`Interface: ${key}, IP Address: ${interface.address}`);
      }
    });
  }