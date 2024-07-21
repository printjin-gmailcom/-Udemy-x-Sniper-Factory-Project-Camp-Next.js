function reverse_to_number(number) {
  let reversedString = number.toString().split("").reverse().join("");
  return Number(reversedString);
}
let a = reverse_to_number(32125);
console.log(a);
let b = reverse_to_number(13251);
console.log(b);

function findLongStr(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
let result = findLongStr("we are the champion");
console.log(result);
let result2 = findLongStr("i'm fine thank you, and you?");
console.log(result2);
