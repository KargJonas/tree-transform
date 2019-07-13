const transform = require("../index");

function convertFileFunc({
  input,  // Content of the original file
  name    // Filename of the original file
}) {
  const newContent = `This file was converted!\n${input}`;
  const newName = `${name}.converted`;

  return {
    output: newContent, // Content of the new file
    name: newName       // Filename of the new file (optional)
  };
}

transform(
  "input-folder",   // Input folder
  "output-folder",  // Output folder
  convertFileFunc,  // Your converter function
  true              // Convert file content to string (optional - default: true)
);
