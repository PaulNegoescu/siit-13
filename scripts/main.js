'use strict';

function isNotValidParameter(param) {
  //   if (Number.isNaN(param) || param === 0) {
  //     return true;
  //   }
  //   return false;
  return Number.isNaN(param) || param === 0;
}

function calculateBmi() {
  const weight = Number(prompt('Ce greutate ai (in kg)?'));

  if (isNotValidParameter(weight)) {
    alert('Va rugam introduceti o greutate corecta!');
  } else {
    const height = Number(prompt('Ce inaltime ai (in metri)?'));

    if (isNotValidParameter(height)) {
      alert('Va rugam introduceti o inaltime corecta!');
    } else {
      const result = weight / height ** 2; //Math.pow(inaltime, 2);
      let label = 'Obese';
      let color = '#c00';

      if (result < 18.5) {
        label = 'Underweight';
        color = 'cyan';
      } else if (result < 25) {
        label = 'Normal';
        color = '#bada55';
      } else if (result < 30) {
        label = 'Overweight';
        color = 'yellow';
      }

      // console.log('%c' + label, 'color: ' + color, result.toFixed(2));
      console.log(
        '%c%s and your BMI is "%s", congrats!',
        `color: ${color}`,
        label,
        result.toFixed(2)
      );
    }
  }
}

// for (let i = 0; i < 3; i++) {
//   calculateBmi();
// }

// let a = 3;

// a = 'Paul';

// console.log(a);
/* let result = ''; // accumulator

for (let i = 1; i < 21; i++) {
  result += `${i} `;
}

console.log(result); */

/* let result = '';
let i = 1;
while (i < 21) {
  result += `${i} `;
  i++;
}

console.log(result); */

/* let result = '';
let i = 21;
do {
  result += `${i} `;
  i++;
} while (i < 21); 

console.log(result);*/

const person = {
  fName: 'Paul',
  lName: 'Negoescu',
  age: 36,
  weight: 90,
  height: 1.85,
};

// console.log(person['fName']);

const arr = ['Paul', 'Ionut', 'Adina', 'Cristina', 33, 42, true];

//Function declaration
function test() {
  return 'Ionut';
}

// const nume = test();

//Function Expression
const myFunc = function () {
  return 'Yeey this works!';
};

const myFunc2 = () => 'This also works';

const myFunc3 = () => {
  if (false) {
    //nu intra aici
  } else {
    return 'Whatever';
  }
};

// This is very bad! Eval is evil.
const myFunc4 = new Function(
  'console.log("Wow! This also works!"); return 1234;'
);

console.dir(myFunc4());

//Iterrating through an array
const newArr = [];

for (let i = 0; i < 100; i++) {
  newArr.push('p' + i);
}

//Classical iteration
for (let i = 0; i < newArr.length; i++) {
  const elem = newArr[i];
  console.log(elem);
  //console.log(newArr[i]);
}

//New iteration method
for (const elem of newArr) {
  console.log(elem);
}

const newObj = {
  test: 'tezst',
  name: 'Paul',
  age: 36,
};

for (const prop in newObj) {
  console.log(prop);
}

function add(...args) {
  let sum = 0;
  for (const number of args) {
    sum += number;
  }
  return sum;
}

// const add2 = function (a = 0, b = 0, ...args) {
//   const sum = a + b;
//   console.log(args);
//   return sum;
// };

// const add3 = (a = 0, b = 0, ...args) => {
//   console.log(args);
//   return a + b;
// };

const suma = add(3, 5, 66, 100, 45);

console.log('Suma: ', suma);

// var -> function scope
// let/const -> block scope

// global scope <-> window (browser) <-> global (Node JS)
window.globalaMeaExplicita = 'Paul';
let globalaMeaImplicita = 'Negoescu';

// console.log(globalaMeaImplicita);

//hoisting
let c = 'c';
function hoisting() {
  // var hoisted;
  console.log(hoisted, c);
  var hoisted = 'a';

  let notHoisted = 'b';
  // let c = 'd';

  console.log(hoisted, notHoisted);
}

hoisting();

//closures
function parent(p) {
  let a = 1;

  return function (b) {
    return a + b + p;
  };
}

const child = parent(5);
const child2 = parent(7);

console.log(child(2), child2(2));

parent(5)(2);

//IIFE - Immediately Invoked Function Expression
(function (param1) {
  console.log(param1);
})('Paul');

// const expr = function () {
//   console.log('expression');
// }

// (function () {})();

let a = 2,
  b = 6;

// let aux = a;
// a = b;
// b = aux;

//destructuring
const arrr = [1, 2, 3, 4, 5];
[a, b] = [b, a];

console.log({ a, b }, arrr);

function sumOfIntegersInString(s) {
  let arr = s.match(/\d+/g)?.map(Number);
  if (!arr) {
    return null;
  }
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}
console.log(sumOfIntegersInString('Paul are mere!'));

const obj = {
  prop: {
    nume: 'Paul',
  },
  ceva: null,
};

if (obj && obj.ceva) {
  console.log(obj.ceva.nume);
}

console.log(obj?.ceva?.nume);
