//! Get the Network Interface
//Returns information about the network Interface


const os=require('os');
console.log(os.networkInterfaces());


//* "Wi-Fi" → Represents a network adapter (could also be "Ethernet" or something else)

// address: IP address assigned to the adapter (e.g., "192.168.1.5")
// netmask: Subnet mask
// family: Whether it is "IPv4" or "IPv6"
// mac: MAC (physical) address of the adapter
// internal: false means it's an external network interface, true would indicate a loopback address (e.g., 127.0.0.1)
//internal: true indicates it's for internal use only



  