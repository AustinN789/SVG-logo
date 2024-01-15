// Shape class
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

// Circle class with inheritence
class Circle extends Shape {
  render() {
    // console.log(this.color);
    return `<circle r="80" cx="150" cy="115" fill="${this.color}" />`;
  }
}

// Triangle class wiht inheritence
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class with inheritence
class Square extends Shape {
  render() {
    return `<rect x="55" y="25" height="190" width="190" fill="${this.color}" />`;
  }
}

// Export modules
module.exports = { Circle, Triangle, Square, Shape };
