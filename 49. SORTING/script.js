// sort() = method used to sort elements of an array in place.
//Sorts elements as strings in lexicographic order, not alphabetical
//lexicographic = (alphabet + numbers + symbols) as strings

/* let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.sort((a, b) => a - b);
console.log(numbers); */

const people = [
  { name: "David", age: 30, gpa: 3.0 },
  { name: "Tomas", age: 25, gpa: 1.5 },
  { name: "Mato", age: 15, gpa: 2.5 },
  { name: "Riso", age: 8, gpa: 4.0 }
];

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people)
