function sumAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(10, 20, 30));

function calculate(operation, num1, num2) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}
console.log(calculate("add", 5, 3));
console.log(calculate("subtract", 5, 3));
console.log(calculate("multiply", 5, 3));
console.log(calculate("divide", 6, 3));

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(7));
console.log(isEven(4));

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));

function triangleArea(base, height) {
  return (base * height) / 2;
}
console.log(triangleArea(10, 5));

function compressString(input) {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      compressed += input[i] + count;
      count = 1;
    }
  }
  return compressed;
}
const i = "aaabbbccc";
const o = compressString(i);
const i2 = "aabbaa";
const o2 = compressString(i2);
const i3 = "abbbffd";
const o3 = compressString(i3);
console.log(o);
console.log(o2);
console.log(o3);

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
