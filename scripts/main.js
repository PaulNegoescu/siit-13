'use strict';

const person = {
  fName: 'Paul',
  lName: 'Negoescu',
  age: 36,
  height: 1.85,
  weight: 85,
  'phone-numbers': ['0723000001', '0368400401'],
  getFullName: function () {
    return this.fName + ' ' + this.lName;
  },
  calculateBmi: function () {
    return (this.weight / this.height ** 2).toFixed(2);
  },
};

console.log('Full Name: ', person.calculateBmi());

class Person {
  constructor(config) {
    this.fName = config.fName;
    this.lName = config.lName;
    this.age = config.age;
    this.height = config.height;
    this.weight = config.weight;
    this['phone-numbers'] = config['phone-numbers'];
  }

  getFullName() {
    return this.fName + ' ' + this.lName;
  }

  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  }
}

const person1 = new Person({
  fName: 'Paul',
  lName: 'Negoescu',
  age: 36,
  height: 1.85,
  weight: 85,
  'phone-numbers': ['0723000001', '0368400401'],
});

const person2 = new Person({
  fName: 'Alina',
  lName: 'Popescu',
  age: 29,
  height: 1.65,
  weight: 50,
  'phone-numbers': ['0723000001', '0368400401'],
});

console.log(person2);
