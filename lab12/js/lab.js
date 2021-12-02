/**
* Author: Christian Decareau & Justin Juang
* Date: 11/11/2021
*
**/

function sortingHat(str){
  var len = str.length;
  var mod = len % 4;
  //determines house user is sorted into based on name length
    if (mod == 0){
      return "Gryffindor"
    }
    else if (mod == 1){
      return "Ravenclaw"
    }
    else if (mod == 2){
      return "Slytherin"
    }
    else if (mod == 3){
      return "Hufflepuff"
    }
}

//assigns myButton to element with Id of buttonSubmit
var myButton = document.getElementById("buttonSubmit");

//causes an event on user click
myButton.addEventListener("click", function(){
    //assigns user input to a variable
    var name = document.getElementById("input").value;
    //variable calls function using the newly defined name variable
    var house = sortingHat(name);
    //changes the HTML of div output to display the appropriate result as a string
    document.getElementById("output").innerHTML = "<p>The Sorting Hat has sorted you into " + house + "</p>";

})
