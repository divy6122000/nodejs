// Import the 'fs' (file system) module for file operations
const fs = require('fs');

try {
  // Read the contents of the "input.txt" file synchronously using UTF-8 encoding
  const readFile = fs.readFileSync("./files/input.txt", "utf-8");

  // Log the content read from the file to the console
  console.log("Contents of input.txt:", readFile);

  // Create a string that combines the content read from the file and the current date
  const content = `Data read from input.txt: ${readFile}.\ncreatedAt ${new Date()}`;

  // Write the combined content to the "output.txt" file
  fs.writeFileSync("./files/output.txt", content);

  // Log a message indicating that the operation was successful
  console.log("Data written to output.txt successfully.");
} catch (error) {
  // Handle any errors that occur during file operations
  console.error("An error occurred:", error.message);
}
