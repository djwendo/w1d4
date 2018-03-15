var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callback) {
  var newArray = [];
  array.forEach(function(word) {
    newArray.push(callback(word));
  });
  console.log(newArray);
}




map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]