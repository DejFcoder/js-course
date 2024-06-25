// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property

/* class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number!!!");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number!!!");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }else {
            console.error('Invalid first name: ' + newFirstName);
        }
    }

    set lastName(newLastName) {
        if(typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName;
        }else {
            console.error('Invalid last name: ' + newLastName);
        }
    }

    set age(newAge) {
        if(typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        }else {
            console.error('Invalid age: ' + newAge);
        }
    }

    get firstName() {
        return `Firstname: ${this._firstName},`
    }

    get lastName() {
        return `Lastname: ${this._lastName},`
    }
    get fullName() {
        return `Fullname: ${this._firstName} ${this._lastName},`
    }

    get age() {
        return `Age: ${this._age},`
    }
}

const person = new Person("Matko", "Kubini", 16);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);