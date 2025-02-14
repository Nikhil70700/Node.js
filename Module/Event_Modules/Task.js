////? Challenge: "Event Maestro: Handle it All"

//!Objective:
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user   events( e.g. user-login,user-logout,user-purchase,profile-update).

//! Requirement:

//? Create at least four custom events(e.g. user-login,user-logout,user-purchase,profile-update).

//? Emit these events multiple times with different data.

//? Track and store the count of each event type.

//? Define a summary event that logs a detailed report of how ma y times each event was triggered.


// First, we import the required modules
import EventEmitter from 'events';     // This imports the EventEmitter class to handle events
import fs from 'fs';                   // This imports the file system module to read/write files

// Define where we'll store our counts
const COUNTS_FILE = 'eventCounts.json';  // This is the name of our file that will store the counts

// This try-catch block attempts to load existing counts from the file
let eventCounts;
try {
    // Try to read the file and parse its contents
    const data = fs.readFileSync(COUNTS_FILE, 'utf8');  // Read the file contents
    eventCounts = JSON.parse(data);                     // Convert JSON string to JavaScript object
} catch (error) {
    // If the file doesn't exist or there's an error, create new counts
    eventCounts = {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "profile-update": 0
    };
}

// Create a new event emitter object
const emitter = new EventEmitter();

// Now we set up our event listeners
// This one handles when a user logs in
emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;                    // Increase the login count
    console.log(`User ${username} logged in !`);    // Print a message
    saveCountsToFile();                            // Save the updated counts
});

// This handles when a user makes a purchase
emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;                             // Increase purchase count
    console.log(`User ${username} purchased ${item} !`);        // Print a message
    saveCountsToFile();                                        // Save the updated counts
});

// This handles when a user updates their profile
emitter.on("profile-update", (username, field) => {
    eventCounts["profile-update"]++;                           // Increase profile update count
    console.log(`User ${username} updated their ${field} !`);  // Print a message
    saveCountsToFile();                                       // Save the updated counts
});

// This handles when a user logs out
emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;                    // Increase logout count
    console.log(`User ${username} logged out !`);    // Print a message
    saveCountsToFile();                             // Save the updated counts
});

// This handles showing the summary of all counts
emitter.on("summary", () => {
    console.log("Current event counts:");
    console.log(eventCounts);
});

// This function saves our counts to the file
function saveCountsToFile() {
    // Convert the counts object to a JSON string and write it to the file
    fs.writeFileSync(COUNTS_FILE, JSON.stringify(eventCounts, null, 2));
}

// Here we trigger (emit) our events
emitter.emit("user-login", "Nikhil");                  // Trigger login event
emitter.emit("user-purchase", "Nikhil", "Laptop");     // Trigger purchase event
emitter.emit("profile-update", "Nikhil", "email");     // Trigger profile update event
emitter.emit("user-logout", "Nikhil");                 // Trigger logout event

// Finally, show the summary
emitter.emit("summary");