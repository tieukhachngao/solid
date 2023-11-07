// Abstract classes
class Addition {
  addition(a, b) {
    throw new Error("Method not implemented");
  }
}

class Subtraction {
  subtraction(a, b) {
    throw new Error("Method not implemented");
  }
}

class Multiplication {
  multiplication(a, b) {
    throw new Error("Method not implemented");
  }
}

class Division {
  division(a, b) {
    throw new Error("Method not implemented");
  }
}

// Implementations
class AdditionImpl extends Addition {
  addition(a, b) {
    return a + b;
  }
}

class SubtractionImpl extends Subtraction {
  subtraction(a, b) {
    return a - b;
  }
}

class MultiplicationImpl extends Multiplication {
  multiplication(a, b) {
    return a * b;
  }
}

class DivisionImpl extends Division {
  division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }
}

// High level module
class Calculator {
  constructor(adder, subtractor, multiplier, divider) {
    this.adder = adder;
    this.subtractor = subtractor;
    this.multiplier = multiplier;
    this.divider = divider;
  }

  add(a, b) {
    return this.adder.addition(a, b);
  }

  subtract(a, b) {
    return this.subtractor.subtraction(a, b);
  }

  multiply(a, b) {
    return this.multiplier.multiplication(a, b);
  }

  divide(a, b) {
    return this.divider.division(a, b);
  }
}

// Client code
const adder = new AdditionImpl();
const subtractor = new SubtractionImpl();
const multiplier = new MultiplicationImpl();
const divider = new DivisionImpl();

const calculator = new Calculator(adder, subtractor, multiplier, divider);

console.log("Addition:", calculator.add(2, 3));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(2, 4));
console.log("Division:", calculator.divide(10, 2));
