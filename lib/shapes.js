// Base Shape class definition
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to update the shape's color
  setColor(newColor) {
    this.color = newColor;
  }
}

// Circle class inheriting from Shape
class Circle extends Shape {
  // Method to render a circle shape
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Triangle class inheriting from Shape
class Triangle extends Shape {
  // Method to render a triangle shape
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

// Square class inheriting from Shape
class Square extends Shape {
  // Method to render a square shape
  render() {
    return `<rect x="55" y="25" width="190" height="190" fill="${this.color}" />`;
  }
}

// Exporting the classes for external use
module.exports = { Shape, Circle, Triangle, Square };