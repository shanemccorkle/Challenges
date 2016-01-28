
var array1 = [58, "", "abcd", true, null, false, 0];

// function that filters through an array for specific values.
function filterArray(arr){
  return arr.filter( function(e) {
    return e != false && e != null && e != 0 && e != "";
    }
  );
}


console.log(filterArray(array1));
