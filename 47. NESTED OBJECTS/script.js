//nested objects = Objects inside of other Objects.
//Allows you to represent more complex data structures
//Child Object is enclosed by a Parent Object
//Person{Address{}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/* const person = {
  fullName: "Tomas Kubovic",
  age: 17,
  isStudent: true,
  hobbies: ["masturbating", "darkHumor", "blackHumor"],
  address: {
    street: "Mlynska 58/2",
    city: "Bucany",
    country: "Slovakia",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.city);

for (const property in person.address) { 
    console.log(person.address[property]);
} */

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Tomas", 17, "Mlynska 58/2",
                                        "Bucany",
                                        "Slovakia");

const person2 = new Person("Damian", 17,    "Legionarska 41",
                                            "Trencin",
                                            "Slovakia");

const person3 = new Person("Filip", 16,    "Matusku 2178",
                                            "Topolcany",
                                            "Slovakia");


console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);