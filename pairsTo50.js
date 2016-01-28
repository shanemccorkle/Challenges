var numbers = [10,20,10,40,50,60,70];
var target = 50;

// loop in a loop to go through the array of numbers checking every time for a pair that adds to 50. Also doesn't repeat any numbers.
for (var i=0; i<numbers.length; i++ ) {
  for (var j=i+1; j<numbers.length; j++) {
    if ((numbers[i] + numbers[j]) === target) {
      console.log((i+1) + ", " + (j+1));
    }
  }
}
