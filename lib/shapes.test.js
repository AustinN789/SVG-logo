// import shape classes
const { Circle, Triangle, Square } = require("./shapes");

// Testing for blue triangle
describe("Triange test", () => {
  test("Test for Triange with blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Testing for red Circle
describe("Circle test", () => {
  test("Test for Circle with red background", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      `<circle r="80" cx="150" cy="115" fill="red" />`
    );
  });
});

// Testing for green Square
describe("Square test", () => {
  test("Test for Square with green background", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<rect x="55" y="25" height="190" width="190" fill="green" />`
    );
  });
});
