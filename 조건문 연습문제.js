let score = 85; // 임의의 점수를 할당하세요
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let num = 7; // 임의의 숫자를 할당하세요
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let isLoggedIn = true; // 로그인 여부
let isAdmin = false; // 관리자 권한 여부
if (!isLoggedIn) {
  console.log("Please log in");
} else if (!isAdmin) {
  console.log("Access denied");
} else {
  console.log("Welcome, admin!");
}

let a = 10; // 임의의 숫자를 할당하세요
let b = 20; // 임의의 숫자를 할당하세요
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

let month = 3; // 1에서 12 사이의 숫자를 할당하세요
if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Fall");
} else {
  console.log("Invalid month");
}
