const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 87, subject: "Math" },
  { name: "David", grade: 65, subject: "History" },
  { name: "Eva", grade: 77, subject: "Science" },
];
//filter above 80 marks
const best_students = students.filter((mov) => mov.grade >= 80);
console.log(best_students);
//names only
const names = students.map((mov) => mov.name);
console.log(names);
//sorting names based on grades
students.sort((a, b) => -a.grade + b.grade);
console.log(students);
//first student to get 70
console.log(students.find((mov) => mov.grade < 70).name);
//every method
let is_all_students_above60 = students.every((mov) => mov.grade > 60);
console.log(is_all_students_above60);
//fail case
let is_any_students_under60 = students.some((mov) => mov.grade < 60);
console.log(is_any_students_under60);
//reduce
let grades_sum = students.reduce((sum, cur) => sum + cur.grade, 0);
console.log(grades_sum);
