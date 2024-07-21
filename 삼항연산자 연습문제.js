// 변수 `num`에 임의의 숫자를 할당하세요.
let num = 5;

// 삼항 연산자를 사용하여 `num`이 0보다 큰지, 0인지, 0보다 작은지 각각 "Positive", "Zero", "Negative"를 출력하세요.
let result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result); // "Positive"

// 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
let a = 15;
let b = 10;
let c = 20;

// 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max); // 20

// 변수 `number`에 임의의 숫자를 할당하세요.
let number = 4;

// 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
let parity = number % 2 === 0 ? "Even" : "Odd";
console.log(parity); // "Even"

// 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
let isLoggedIn = true;

// 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
let loginMessage = isLoggedIn ? "Welcome" : "Please log in";
console.log(loginMessage); // "Welcome"

// 변수 `age`에 임의의 나이를 할당하세요.
let age = 21;

// 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
let ageGroup = age >= 18 ? "Adult" : "Minor";
console.log(ageGroup); // "Adult"
