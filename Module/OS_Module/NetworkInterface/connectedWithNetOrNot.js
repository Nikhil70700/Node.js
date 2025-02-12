const dns = require("dns");

dns.resolve("www.google.com", (err) => {
  if (err) {
    console.log("❌ No Internet Connection");
  } else {
    console.log("✅ Internet is Connected");
  }
});



