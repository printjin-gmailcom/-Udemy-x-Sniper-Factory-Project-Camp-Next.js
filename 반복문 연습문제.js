for (let i = 1; i <= 9; i++) {
  console.log(i);
}

let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    sum += numArr[i];
  }
}
console.log(sum);

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " 짝수");
  } else {
    console.log(i + " 홀수");
  }
}

for (let num = 100; num <= 999; num++) {
  let digits = num.toString().split("").map(Number);
  let sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(digit, 3), 0);

  if (num === sumOfCubes) {
    console.log(num);
  }
}
