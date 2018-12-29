'use strict';

let mapper = (array, callback) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push( callback(array[i], i));
  }
  return newArray;
};

let filterer = (array, callback) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push( array[i])
    }
  }
  return newArray;
};

let reducer = (array, callback)





const people = ['Kookla', 'Fran', 'Ollie'];

let newPeople = ['Odie', ...people, 'Garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};




