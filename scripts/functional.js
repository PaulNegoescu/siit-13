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
  return arr.map((element) => Number(element)).reduce((sum, num) => sum + num);
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

const arr = [1, 2, 3, 4];
arr[2]; //3

const obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};

obj[2]; //2;

const obj2 = {
  fName: 'Paul',
  age: 36,
};

obj2.age; //36
obj2['age']; //36

const what = 'fName';
obj2['what'].fName; // undefined.fName // -> error
obj2.what; //undefined
obj2[what]; //obj2['fName'] // -> 'Paul'
