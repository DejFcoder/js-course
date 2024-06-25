// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

//EXAMPLE 1 - SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//EXAMPLE 2 SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "yellow"];
[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors)

//EXAMPLE 3 ASIGN ARRAY ELEMENTS TO VARIABLE
const [firstColor, secondColor, thirdColor,...extraColors] = colors
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//EXAMPLE 4 EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Matko",
    lastName: "Kubini",
    age: 16,
    job: "student",
}

const person2 = {
    firstName: "David",
    lastName: "Trebaticky",
    age: 17,
}

const {firstName, lastName, age, job="Unemployed"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//EXAMPLE 5 DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1)