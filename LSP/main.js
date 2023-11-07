// Arithmetic operations interface
class ArithmeticOperations {
  addition(a, b) {}
  subtraction(a, b) {}
  multiplication(a, b) {}
  division(a, b) {}
}

// Implementation for integers
class IntArithmeticOperations extends ArithmeticOperations {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    return a / b;
  }
}

// Implementation for floats
class FloatArithmeticOperations extends ArithmeticOperations {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    return a / b;
  }
}

let a = 10;
let b = 3;

let intOps = new IntArithmeticOperations();
let floatOps = new FloatArithmeticOperations();

console.log(
  "addition int",
  intOps.addition(a, b),
  "====addition float",
  floatOps.addition(a, b)
);
console.log(
  "subtraction",
  intOps.subtraction(a, b),
  "====subtraction float",
  floatOps.subtraction(a, b)
);
console.log(
  "multiplication int",
  intOps.multiplication(a, b),
  "====multiplication float",
  floatOps.multiplication(a, b)
);
console.log(
  "division int",
  intOps.division(a, b),
  "====division float",
  floatOps.division(a, b)
);
