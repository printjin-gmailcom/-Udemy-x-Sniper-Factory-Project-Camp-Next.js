const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

const studentWithHeight185 = students.find((student) => student.height === 185);
console.log(studentWithHeight185);

const studentsAge20OrOlder = students.filter((student) => student.age >= 20);
console.log(studentsAge20OrOlder);

const hasStudentsHeight165OrLess = students.some(
  (student) => student.height <= 165
);
console.log(hasStudentsHeight165OrLess);

const allStudentsAtLeast10 = students.every((student) => student.age >= 10);
console.log(allStudentsAtLeast10);

const averageAge =
  students.reduce((sum, student) => sum + student.age, 0) / students.length;
console.log(averageAge);

const maleStudents = students.filter((student) => student.gender === "male");
const averageAgeMaleStudents =
  maleStudents.reduce((sum, student) => sum + student.age, 0) /
  maleStudents.length;
console.log(averageAgeMaleStudents);

const maleStudentsArray = students.filter(
  (student) => student.gender === "male"
);
console.log(maleStudentsArray);

const youngestFemaleStudent = students
  .filter((student) => student.gender === "female")
  .reduce((youngest, student) =>
    student.age < youngest.age ? student : youngest
  );
console.log(youngestFemaleStudent);
