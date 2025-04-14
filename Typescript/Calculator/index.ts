// Define an enum for the supported operations
enum Operator {
Add = "+",
Subtract = "-",
Multiply = "*",
Divide = "/"
}

// Function to perform calculation
function calculate(num1: number, num2: number, operator: Operator): number {
switch (operator) {
    case Operator.Add:
    return num1 + num2;
    case Operator.Subtract:
    return num1 - num2;
    case Operator.Multiply:
    return num1 * num2;
    case Operator.Divide:
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
    default:
    throw new Error("Invalid operator");
}
}

// Example usage
const a: number = 10;
const b: number = 5;

console.log(`Addition: ${calculate(a, b, Operator.Add)}`);       // 15
console.log(`Subtraction: ${calculate(a, b, Operator.Subtract)}`); // 5
console.log(`Multiplication: ${calculate(a, b, Operator.Multiply)}`); // 50
console.log(`Division: ${calculate(a, b, Operator.Divide)}`);     // 2
