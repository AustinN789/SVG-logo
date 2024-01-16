// Importing required modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

/**
 * Creates SVG content based on the provided parameters.
 * @param {string} shapeType - The type of shape (e.g., Circle, Triangle, Square).
 * @param {string} shapeColor - The color of the shape.
 * @param {string} textColor - The color of the text.
 * @param {string} logoText - The text to display in the logo.
 * @returns {string} The SVG content string.
 */
function createSvgContent(shapeType, shapeColor, textColor, logoText) {
  // Dynamically create an instance of the shape class based on shapeType
  const shape = new {
    Circle,
    Triangle,
    Square
  }[shapeType](shapeColor);

  // Construct and return the SVG content
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render(shapeColor)}
            <text x="150" y="130" text-anchor="middle" font-size="60" fill="${textColor}">${logoText}</text>
          </svg>`;
}

/**
 * Writes the SVG content to a file.
 * @param {string} fileName - The name of the file to write to.
 * @param {string} svgContent - The SVG content to write.
 */
function writeSvgToFile(fileName, svgContent) {
  fs.writeFile(fileName, svgContent, err => {
    if (err) {
      console.error(err); // Log an error if the file write fails
      return;
    }
    console.log("Generated logo.svg"); // Log success message
  });
}

/**
 * Prompts the user for input and processes the responses.
 */
function promptUserInput() {
  inquirer.prompt([
    {
      type: "input",
      name: "logoText",
      message: "Enter Text for the logo (Up to 3 characters):",
      validate: input => input.length <= 3 || "Maximum 3 characters allowed!" // Validates the input length
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (Color keyword or hexadecimal number):",
      validate: input => !!input || "A color is required!" // Ensures a color is entered
    },
    {
      type: "list",
      name: "logoShape",
      message: "Choose a shape for the logo:",
      choices: ["Circle", "Triangle", "Square"] // Offers a choice of shapes
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (Color keyword or hexadecimal number):",
      validate: input => !!input || "A color is required!" // Ensures a color is entered
    }
  ]).then(answers => {
    // Create SVG content from user responses
    const svgContent = createSvgContent(answers.logoShape, answers.shapeColor, answers.textColor, answers.logoText);
    // Write the SVG content to a file
    writeSvgToFile("logo.svg", svgContent);
  });
}

// Initialize the application
promptUserInput();