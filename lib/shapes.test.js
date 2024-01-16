// Importing shape classes
const { Circle, Triangle, Square } = require("./shapes");

// Tests for Triangle class
describe("Triangle Tests", () => {
  test("Blue Triangle Rendering", () => {
    const blueTriangle = new Triangle();
    blueTriangle.setColor("blue");
    expect(blueTriangle.render()).toBe(
      '<polygon points="150,18 244,182 56,182" fill="blue" />' // Adjusted to match the actual output format
    );
  });
});

// Tests for Circle class
describe("Circle Tests", () => {
  test("Red Circle Rendering", () => {
    const redCircle = new Circle();
    redCircle.setColor("red");
    expect(redCircle.render()).toBe(
      '<circle cx="150" cy="115" r="80" fill="red" />'
    );
  });
});

// Tests for Square class
describe("Square Tests", () => {
  test("Green Square Rendering", () => {
    const greenSquare = new Square();
    greenSquare.setColor("green");
    expect(greenSquare.render()).toBe(
      '<rect x="55" y="25" width="190" height="190" fill="green" />'
    );
  });
});