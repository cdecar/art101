score = [3, 84, 62, 11, 25, 9, 1, 99]



//helps create percentages of total scores
function decimalScore(x){
return x / 100.00;
}

console.log("The result of 33 / 100 is: ", decimalScore(33));

console.log("The beginning array: ", score);

//changes array values to decimals
var firstTest = score.map(decimalScore);

console.log("The decimal version of the array: " + firstTest);

//converts array values to percentages
var secondTest = firstTest.map(function(x){
  return x ** 2;
})

console.log("The decimal values to the second power of the array: " + secondTest);
