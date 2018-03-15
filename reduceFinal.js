var myArray = [1, 2, 3, 4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

var myReduce = function(array, iterate, initialValue) {
  if (arguments.length === 3) {
    var result = initialValue;
    for (var i = 0; i < array.length; i++) {
      result = iterate(result, array[i], i);
    }
  } else {
    result = array[0];
    for (var i = 1; i < array.length; i++) {
      result = iterate(result, array[i], i);
    }
  }
  return result;
};

console.log(myReduce(myArray, reducer));