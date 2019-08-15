var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newBars = ["foo", array[1]];
  return newBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newChoco = array;
  newChoco.push(element);
  return newChoco;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
   return array[index]
 }

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array
 }

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}