/**
* Author: Christian Decareau
* Date: 10/29/2021
*
**/

//calls output and assigns it to a variable
var outputEl = document.getElementById("output");


//creates a variable
var new1El = document.createElement("p");
//changes its html output
  new1El.innerHTML = "Why hello there!";
  console.log(new1El);

var new2El = document.createElement("f");
//same for this one as well
  new2El.innerHTML = "General Kenobi!";


//assigns these variables to output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
