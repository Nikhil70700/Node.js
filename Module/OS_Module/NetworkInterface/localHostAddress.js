//!Find Your Localhost (Loopback) Address

const localHostAddress = os.networkInterfaces();
let loopback = "Not found";

Object.keys(localHostAddress).forEach((iface) => {
    localHostAddress[iface].forEach((info) => {
    if (info.internal && info.family === "IPv4") {
      loopback = info.address;
    }
  });
});

console.log(`🏠 Your Localhost (Loopback) IP: ${loopback}`);