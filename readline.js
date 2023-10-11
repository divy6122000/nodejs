// Import the 'readline' module
const readline = require("readline");

// Create a 'readline' interface for reading from and writing to the console
const rl = readline.createInterface({
  input: process.stdin, // Set the input to read from the standard input (keyboard)
  output: process.stdout, // Set the output to write to the standard output (console)
});

// Ask the user to enter their name
rl.question("Please enter your name: ", (name) => {
  // Callback function that gets executed when the user enters their name
  console.log("You entered:", name); // Display the user's input
  rl.close(); // Close the readline interface
});

// Listen for the 'close' event on the readline interface
rl.on("close", () => {
  console.log("Interface closed"); // Display a message when the interface is closed
  process.exit(0); // Exit the Node.js process with a status code of 0 (indicating success)
});
