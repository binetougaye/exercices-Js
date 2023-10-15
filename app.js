// Get the first element of the array
function firstElementOfTheArray(tab) {
  let n = tab[0];
  return n;
}
let firstElement = firstElementOfTheArray([14, 12]);
console.log(firstElement);
// Get the last element of the array
function lastElementOfTheArray(tab) {
  let n = tab.length - 1;
  let lastElement = tab[n];
  return lastElement;
}
let theLastElement = lastElementOfTheArray([14, 12]);
console.log(theLastElement);
// Check if it is an array or not
function is_array(tab) {
  let message = "";
  if (Array.isArray(tab)) {
    message = tab + " est un tableau";
  } else {
    message = tab + " n'est pas un tableau";
  }
  return message;
}
let result = is_array([24, 65]);
console.log(result);
