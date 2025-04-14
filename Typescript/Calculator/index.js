// Define an enum for the supported operations
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
// Function to perform calculation
function calculate(num1, num2, operator) {
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
var a = 10;
var b = 5;
console.log("Addition: ".concat(calculate(a, b, Operator.Add))); // 15
console.log("Subtraction: ".concat(calculate(a, b, Operator.Subtract))); // 5
console.log("Multiplication: ".concat(calculate(a, b, Operator.Multiply))); // 50
console.log("Division: ".concat(calculate(a, b, Operator.Divide))); // 2
