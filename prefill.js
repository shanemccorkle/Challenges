  var array = [];

// This function will create an array with a given length and filled with a given value.
function prefillArray(length, element) {
  var i = 0;
  while (i < length) {
    array[i] = element;
    i++;
  }
};

// This will also work
// function prefillArray(length, element) {
//   while (length > 0) {
//     array = array.concat(element);
//     length--;
//   }
// };


prefillArray(7, 1);
console.log(array);
