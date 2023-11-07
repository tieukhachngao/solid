class Operation {
  calculate(a, b) {
    return 0;
  }
}

class Addition extends Operation {
  calculate(a, b) {
    return a + b;
  }
}

class Subtraction extends Operation {
  calculate(a, b) {
    return a - b;
  }
}

class Multiplication extends Operation {
  calculate(a, b) {
    return a * b;
  }
}

class Division extends Operation {
  calculate(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }
}
const addition = new Addition();
const subtraction = new Subtraction();
const multiplication = new Multiplication();
const division = new Division();
console.log("addition", addition.calculate(2, 3));
console.log("subtraction", subtraction.calculate(5, 2));
console.log("multiplication", multiplication.calculate(2, 4));
console.log("division", division.calculate(10, 5));
