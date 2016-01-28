var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var arr3 = [];

// Function will merge two arrays together.
function mergeArray(arr1, arr2) {
  return arr3 = arr1.concat(arr2).sort();
};

// Function will remove any duplicates in an array
function removeDuplicate(e, index) {
  if(e != arr3[index+1]){
    return e;
  }
};

// Calls both functions to merge and remove any duplicates
mergeArray(array1, array2).filter(removeDuplicate);
