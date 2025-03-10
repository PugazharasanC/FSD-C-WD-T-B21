// let arr = []

// [] or {}

// ? [] => Array

// ? {} => Object

//* Array

let num = 10;

num = 20;

console.log(num);

//! 1. Stroing multiple values in a single variable

//! 1.1 why?

//! 1. we can easily process the data without much effort.

const arr = [];

// const arr = [5, 3, 6, 8, 1, 7, 9, 2, 4, 5];

// index => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let index in arr) {

//   // will provide index or key one by one from array or object respectively

//   console.log(index);

//   // we can access the value using index

//   console.log(arr[index]);

// }

// for (let value of arr) {

//   // it will directly provide the array values one by one

//   // we cannot get to know the index of the value

//   console.log(value);

// }

// for (let ind = 0; ind < arr.length; ind += 2) {

//   // most flexible way to access or iterate over the array elements

//   console.log(ind);

//   console.log(arr[ind]);

// }

// for (let ind = 0; ind < arr.length; ind += 3) {

//   console.log(ind);

//   console.log(arr[ind]);

// }

// let num1 = 10;

// let num2 = 20;

// let x = num1 + num2;

// console.log(x);

// // Array Methods

// // forEach => Method

// // forEach method is used for iterating over the array...

// // forEach method does not return anything...

// //! forEach method does not change the original array...

// let z;

// arr.forEach((val) => {

//   console.log(val);

//   console.log(val * 2);

// });

// let y = arr.forEach((val, ind, array) => {

//   console.log(array);

//   console.log(val * 2);

// });

// console.log(arr);

// console.log(y);

// console.log(z);

// Array Methods

//? 1. Push - Adds or Insert values at the end of the array, and returns the updated array size/length

console.log(arr);

let returnedValueFromPush = arr.push(10);

// Push method returns 1, because after updating the array the new array size is 1

console.log(returnedValueFromPush);

console.log(arr);

let returnedValueFromPush1 = arr.push(11, 12, 13, 14, 15);

console.log(returnedValueFromPush1);

console.log(arr);

console.log(arr[0]);

console.log(arr[1]);

//? 2. indexOf - Returns the index of the first occurrence of the specified value in the array, or -1 if not found

const newArray = [
  88, 90, 30, 31, 68, 15, 94, 36, 7, 51, 24, 66, 53, 5, 60, 12, 29, 99, 29, 94,

  61, 41, 45, 44, 32, 73, 83, 80, 88, 23, 2, 66, 21, 36, 47, 45, 2, 20, 59, 45,

  42, 8, 71, 91, 4, 6, 14, 62, 35, 34, 98, 27, 67, 10, 59, 87, 29, 20, 2, 72,

  67, 69, 82, 72, 96, 36, 6, 9, 10, 97, 74, 49, 77, 46, 84, 0, 19, 2, 12, 96,

  74, 66, 41, 48, 62, 10, 70, 49, 99, 43, 44, 57, 89, 94, 91, 24, 3, 40, 97, 80,
];

console.log(newArray.indexOf(67)); // Looking for the indexof 67

console.log(newArray.indexOf(67, 53)); // looking for the indexof 67 starting from index 53

console.log(newArray.indexOf(11));

//? 3. pop - Removes and returns the last element of the array

console.log(arr);

let returnedValueFromPop = arr.pop();

console.log(arr);

console.log(returnedValueFromPop);

//? 4. unshift - Adds one or more elements to the beginning of the array and returns the new length of the array

console.log(arr);

let returnedValueFromUnshift = arr.unshift(6, 7, 8, 9);

console.log(returnedValueFromUnshift);

console.log(arr);

//? 5. shift - Removes and returns the first element of the array

console.log(arr);

// console.log(arr.shift())

console.log(arr);

//? 6. Slice - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(arr);

const copiedPortion = arr.slice(2, 6); // arr.slice(startingIndex, endingIndex)

console.log(copiedPortion);

console.log(arr);

//? 7. Splice - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

console.log(arr);

//! Example of removing

const removedElements = arr.splice(2, 3); // arr.splice(startingIndex, numberOfElementsToRemove)

console.log(arr); // array after the removal

console.log(removedElements); // elements that are removed

//! Example of replacing

console.log(arr);

const replacedElements = arr.splice(2, 3, 110, 120, 130, 140, 150, 160); // arr.splice(startigIndex, noOfElemToRemove, ...newElements)

console.log(replacedElements);

console.log(arr);

//! Example of adding

console.log(arr);

const anyValueReturned = arr.splice(2, 0, "Jan", "Feb", "Mar"); // arr.splice(startingIndex, noOfElementsToRemove, ...newElementsForAdding)

console.log(anyValueReturned);

console.log(arr);


//* MRF - Methods
//? MRF => Map Reduce Filter

//? 1. Map - Creates a new array with the results of calling a provided function on every element in the calling array.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = arr1.map((value) => {
  return value * value;
});

const oddOrEven = arr1.map((value) => {
  if (value % 2 === 0) {
    return value + " is Even";
  }
  return value + " is Odd";
});
console.log(arr1);
console.log(res);
console.log(oddOrEven);

//? 2. Filter - Creates a new array with all elements that pass the test implemented by the provided function.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenValues = arr2.filter((value) => {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
const oddValues = arr2.filter((value) => {
  if (value % 2 != 0) {
    return true;
  } else {
    return false;
  }
});
console.log(arr2);
// Got values which are returned true from the function
console.log(evenValues);
console.log(oddValues);

const result = arr2.filter((value) => {
  // for all the values i am returning false, so result has nothing in it
  return false;
});
console.log(result);
const result1 = arr2.filter((value) => {
  // for all the values i am returning true, so the resule will have all the values from arr2
  return true;
});
console.log(result1);

//? 3. Reduce - Applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // => Accumulated as only one value

const sum = arr3.reduce((accumulator, value) => {
  return accumulator + value;
});

console.log(arr3);
console.log(sum);

const max = arr3.reduce((accum, val) => {
  if (accum > val) return accum;
  else return val;
});
console.log(max);
const min = arr3.reduce((accum, val) => {
  if (accum < val) return accum;
  else return val;
});
console.log(min);
