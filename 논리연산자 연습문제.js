// 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
let a = true;
let b = false;

// `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
console.log("a AND b:", a && b); // false

// `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
console.log("a OR b:", a || b); // true

// `a`의 논리 NOT 연산 결과를 출력하세요.
console.log("NOT a:", !a); // false

// 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
let x = 12;
let y = 4;
let z = 8;

// `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
let condition1 = x > 10 && y < 5;
console.log("x > 10 AND y < 5:", condition1); // true

// `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
let condition2 = x > 10 || z > 3;
console.log("x > 10 OR z > 3:", condition2); // true

// `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
let condition3 = y !== 0;
console.log("y is not 0:", condition3); // true

// 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
let isLoggedIn = true;
let isAdmin = false;

// 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
let loginMessage = isLoggedIn ? "Welcome" : "Please log in";
console.log(loginMessage); // "Welcome"

// 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
let adminMessage = isAdmin ? "Admin access granted" : "Admin access denied";
console.log(adminMessage); // "Admin access denied"

// 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
let accessMessage =
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access";
console.log(accessMessage); // "Restricted access"

// 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
let value1 = 0;
let value2 = "Hello";

// 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
let exists = value1 || value2 ? true : false;
console.log("Either value1 or value2 exists:", exists); // true

// 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
let bothExist = !value1 && !value2;
console.log("Both value1 and value2 do not exist:", bothExist); // false

// 변수 `num`에 임의의 숫자를 할당하세요.
let num = 50;

// `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
let inRange = num >= 0 && num <= 100;
console.log("num is between 0 and 100:", inRange); // true

// `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
let outOfRange = num < 0 || num > 100;
console.log("num is less than 0 or greater than 100:", outOfRange); // false
