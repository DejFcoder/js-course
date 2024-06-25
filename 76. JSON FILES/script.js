// JSON = (JavaScript Object Notation) data-interchange format
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

/* const names = ["Mato", "David", "Riso", "Tomas"];
const person = {
    "name": "Mato",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["JellyFishing", "Running", "Working"]
};
const people = [{
    "name": "Mato",
    "age": 30,
    "isEmployed": true
},
{
    "name": "David",
    "age": 17,
    "isEmployed": false
},
{
    "name": "Riso",
    "age": 19,
    "isEmployed": true
},
{
    "name": "Tomas",
    "age": 20,
    "isEmployed": false
}];

const jsonStringNames = JSON.stringify(names);
const jsonStringPerson = JSON.stringify(person);
const jsonStringPeople = JSON.stringify(people);
console.log(names);
console.log(jsonStringNames);
console.log(person);
console.log(jsonStringPerson);
console.log(people);
console.log(jsonStringPeople); */

/* const jsonNames = `["Mato", "David", "Riso", "Tomas"]`;
const jsonPerson = `{
    "name": "Mato",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["JellyFishing", "Running", "Working"]
}`;
const jsonPeople = `[{
    "name": "Mato",
    "age": 30,
    "isEmployed": true
},
{
    "name": "David",
    "age": 17,
    "isEmployed": false
},
{
    "name": "Riso",
    "age": 19,
    "isEmployed": true
},
{
    "name": "Tomas",
    "age": 20,
    "isEmployed": false
}]`;

const parseJsonNames = JSON.parse(jsonNames);
const parseJsonPerson = JSON.parse(jsonPerson);
const parseJsonPeople = JSON.parse(jsonPeople);

console.log(jsonNames)
console.log(parseJsonNames)
console.log(jsonPerson);
console.log(parseJsonPerson);
console.log(jsonPeople);
console.log(parseJsonPeople); */

fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)))
  .catch(err => console.error(err));
