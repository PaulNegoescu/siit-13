'use strict';

const strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

console.log('Typecast: ', typeCastAndAdd(strArr));

function typeCastAndAdd(arr) {
  /* let sum = 0;
  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  for (const element of arr) {
    const num = Number(element);
    sum += num;
  }
  return sum; */
  return arr
    .map((element) => Number(element))
    .reduce((sum, num) => sum + num, 0);
}

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie si returneaza un 
array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
  { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
  { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
  { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
  { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
  { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/
console.log('Find Color: ', findColor(demoArr, 'blue'));

function findColor(arr, color) {
  //   for (const obj of arr) {
  //     if (obj.color === color) {
  //       return obj;
  //     }
  //   }
  return arr.find((obj) => obj.color === color);
}
/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/
console.log('Areas are Bigger: ', areasAreBigger(demoArr, 6));

function areasAreBigger(arr, area) {
  //   let res = true;

  //   arr.forEach((obj) => {
  //     const currentArea = obj.height * obj.width;
  //     if (currentArea < area) {
  //       res = false;
  //     }
  //   });

  //   return res;
  //   for (const obj of arr) {
  //     const currentArea = obj.height * obj.width;
  //     if (currentArea < area) {
  //       res = false;
  //     }
  //   }

  //   return res;

  return arr.every((obj) => obj.height * obj.width >= area);
}

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/
console.log('At Least One: ', atLeastOneIsOfColor(demoArr, 'crimson'));

function atLeastOneIsOfColor(arr, color) {
  return arr.some((elem) => elem.color === color);
  //   for (const elem of arr) {
  //     if (elem.color === color) {
  //       return true;
  //     }
  //   }
  //   return false;
}

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/
console.log('Sum of distances: ', sumOfDistances(demoArr));

function sumOfDistances(arr) {
  //   let sum = 0;

  //   for (const elem of arr) {
  //     sum = sum + elem.distance;
  //   }

  //   return sum;
  return arr.reduce((sum, elem) => sum + elem.distance, 0);
}

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in 
array-ul de obiecte. res = { red: 2, blue: 1 }; res['green'] = 1;
*/
console.log('Number of colors: ', noColors(demoArr));

function noColors(arr) {
  let res = {};

  //   arr.forEach((obj) => {
  // });
  //   for (const obj of arr)
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i]; // { id: 1, color: 'red', height: 15, width: 20, distance: 10 }

    if (res[obj.color] !== undefined) {
      res[obj.color]++;
    } else {
      res[obj.color] = 1;
    }
  }

  return res;

  //   return arr.reduce((res, obj) => {
  //     if (res[obj.color] !== undefined) {
  //       res[obj.color]++;
  //     } else {
  //       res[obj.color] = 1;
  //     }
  //     return res;
  //   }, {});
}

console.log('Pluck: ', pluck(demoArr, 'color')); //['red', 'green', 'turqoize' ...]

function pluck(arr, key) {
  //   const res = [];
  //   for (const elem of arr) {
  //     res.push(elem[key]);
  //   }

  //   return res;
  return arr.map((elem) => elem[key]);
}

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai mica sau egala
     cu 100
*/

console.log('Only Smaller Areas: ', onlySmallerAreas(demoArr));
/*
    [
        { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
        { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
        { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
        { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
    ]
*/

function onlySmallerAreas(arr) {
  /* let res = [];

  for (const elem of arr) {
    if (elem.width * elem.height <= 100) {
      res.push(elem);
    }
  }

  return res; */
  return arr.filter((elem) => elem.width * elem.height <= 100);
}

function addInInterval(a, b) {
  let sum = 0;
  let start = a;
  let end = b;

  if (b < a) {
    // const aux = first;
    // first = last;
    // last = aux;

    // Array destructuring / destructuring assignment
    [start, end] = [end, start]; // [start, end] = [2, 7] // start = 2; end = 7;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  //   while (start <= end) {
  //     sum += start;
  //     start++;
  //   }

  return sum;
}

console.log('Add in interval: ', addInInterval(2, 9));

function minimumOfThree(a, b, c) {
  //   if (a <= b && a <= c) {
  //     return a;
  //   }

  //   if (b <= c && b <= a) {
  //     return b;
  //   }

  //   return c;

  let min = a;
  if (b < min) {
    min = b;
  }

  if (c < min) {
    min = c;
  }

  return min;
}

console.log('Minimum of three: ', minimumOfThree(5, 2, 2));

function minimumOfArray(arr) {
  let min = arr[0];

  // for(let i = 0; i < arr.length; i++) {
  //     const num = arr[i];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(
  'Minimum of array: ',
  minimumOfArray([1, 2, 2, 5, -4, 2, 5, 7, 10, -5, -4, 1])
);
// const arr = [1, 2, 3, 4];
// arr[2]; //3

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// obj[2]; //2;

// const obj2 = {
//   fName: 'Paul',
//   age: 36,
// };

// obj2.age; //36
// obj2['age']; //36

// const what = 'fName';
// obj2['what'].fName; // undefined.fName // -> error
// obj2.what; //undefined
// obj2[what]; //obj2['fName'] // -> 'Paul'

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/
console.log('Unique Colors: ', uniqueColors(demoArr));

function uniqueColors(arr) {}

/*
[
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
]
*/

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

function transformArr(arr) {
  // const res = [];

  // for (const [subject, time, teacher] of arr) {
  //   // const [subject, time, teacher] = elem;
  //   res.push({ subject, time, teacher });
  // }

  // return res;

  return arr.map(([subject, time, teacher]) => ({
    subject,
    time,
    teacher,
  }));
}

// classes.map(([subject, time, teacher]) =>
//   console.log({ subject, time, teacher })
// );

// const [subject, time, teacher] = ['Chemistry', '9AM', 'Mr. Darnick'];
// const [one, two, three] = [1, 2, 3];

console.log('Classes: ', transformArr(classes));

// console.clear();

const result1 = [
  {
    id: 1,
    name: 'Sandra',
    type: 'user',
    username: 'sandra',
    email: 'sandra@gmail.com',
  },
  {
    id: 2,
    name: 'John',
    type: 'admin',
    username: 'johnny2',
    email: 'john@gmail.com',
  },
  {
    id: 3,
    name: 'Peter',
    type: 'user',
    username: 'pete',
    email: 'peter@gmail.com',
  },
  {
    id: 4,
    name: 'Bobby',
    type: 'user',
    username: 'be_bob',
    email: 'bobby@gmail.com',
  },
];

const result2 = [
  { id: 2, name: 'John', email: 'john@gmail.com' },
  {
    id: 4,
    name: 'Bobby',
    type: 'user',
    username: 'be_bob',
    email: 'bobby@gmail.com',
  },
];

const props = ['email', 'name', 'id'];

// intersectia array-urilor unde proprietatile din props sunt aceleasi in ambele obiecte
function arrayIntersection(arr1, arr2, props) {
  const res = [];

  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      let isTheSame = true;

      for (const prop of props) {
        if (obj1[prop] !== obj2[prop]) {
          isTheSame = false;
          break;
        }
      }

      if (isTheSame) {
        res.push(obj1);
      }
    }
  }

  return res;
}

//tot obiectul e la fel, toate proprietatile obiectului sunt identice
function arrayIntersection3(arr1, arr2) {
  const res = [];

  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      let isTheSame = true;

      for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
          isTheSame = false;
          break;
        }
      }

      if (isTheSame) {
        res.push(obj1);
      }
    }
  }

  return res;
}

// intersectia array-urilor unde "name" e acelasi
function arrayIntersection2(arr1, arr2, prop) {
  // const res = [];

  // for (const obj1 of arr1) {
  //   for (const obj2 of arr2) {
  //     if (obj1[prop] === obj2[prop]) {
  //       res.push(obj1);
  //     }
  //   }
  // }

  // return res;

  return arr1.filter((obj1) => arr2.some((obj2) => obj1[prop] === obj2[prop]));
}

console.log(arrayIntersection3(result1, result2));

function displayPattern(width, height) {
  let pattern = '';
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      pattern += ((j + i) % 2) + ' ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}

displayPattern(3, 10);
