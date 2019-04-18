var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  arr =  array.slice();
  arr.unshift(element);
  return arr;
}