// Using inquirer dependency
const inquirer = require("inquirer");

// Using file system dependency
const fs = require("fs");

// Import classes from .lib

const { Triangle, Square, Circle, Shape } = require("./lib/shapes");

//Function to write svg using answers
function writeToFile(fileName, answers) {
  let svg = "";
  svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  //   svg += `${answers.logoShape}`;

  let chosenShape = "";
  if (answers.logoShape === "Circle") {
    chosenShape = new Circle(answers.shapeColor);
    svg += chosenShape.render(answers.shapeColor);
  }
  if (answers.logoShape === "Triangle") {
    chosenShape = new Triangle(answers.shapeColor);
    svg += chosenShape.render(answers.shapeColor);
  }
  if (answers.logoShape === "Square") {
    chosenShape = new Square(answers.shapeColor);
    svg += chosenShape.render(answers.shapeColor);
  }
  svg += `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.logoText}</text> 
  </svg>`;

  fs.writeFile(fileName, svg, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Generated logo.svg");
  });
}

// inquirer
//   - prompt for text: can enter up to 3 characters
//   - text color (color keyword or a hexadecimal number)
//   - prompt a shape from: circle, triangle, square
//   - shape color (color keyword or hexadecimal number)

promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "logoText",
        message:
          "Enter Text that you would like to appear inside logo. (No more than 3 characters!)",
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          } else {
            console.log(" Sorry, please try again! ");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Enter a color you would like the text to be. (Color keyword or hexadecimal number!)",
        validate: (textColor) => {
          if (textColor) {
            return true;
          } else {
            console.log("No color picked, please enter a color!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "logoShape",
        message: "What shape would you like your logo to be (Choose one)",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "what color would you like the shape to be? (Color keyword or hexadecimal number!",
        validate: (shapeColor) => {
          if (shapeColor) {
            return true;
          } else {
            console.log("No color picked, please enter a color!");
          }
        },
      },
    ])
    .then((answers) => {
      writeToFile("logo.svg", answers);
    });
};

// -- when opened (logo.svg) file in browser shown 300*200 pixel image that matches criteria

// Render application
promptUser();
