// Individual interfaces for each operation
const Addition = {
  addition: function (a, b) {
    return a + b;
  },
};

const Subtraction = {
  subtraction: function (a, b) {
    return a - b;
  },
};

const Multiplication = {
  multiplication: function (a, b) {
    return a * b;
  },
};

const Division = {
  division: function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  },
};

// Implementation class Calculator
class Calculator {
  constructor(operations) {
    Object.assign(this, operations);
  }
}

//Only depend on necessary interfaces
const calculator = new Calculator({
  addition: Addition.addition,
  subtraction: Subtraction.subtraction,
});

console.log("Addition:", calculator.addition(2, 3));
console.log("Subtraction:", calculator.subtraction(10, 5));
