/**
* Author: Christian Decareau & Justin Juang
* Date: 11/6/2021
*
**/


$(document).ready(function(){
  //creates a button at the end of the div Challenge
  $("#challenge").append('<button type="button" class="challengeButton" >Click here!</button>');
});



//adds an event handler for the challengeButton
$("#elevenScrawl").on("click", ".challengeButton", function(){
//removes problems button class from the p tag
  $("p").removeClass("problemsButton");
//removes problems button class from the h1 tag
  $("h1").removeClass("problemsButton");

//removes results button class from the p tag
  $("p").removeClass("resultsButton");
//removes results button class from the h1 tag
  $("h1").removeClass("resultsButton");

//toggles challenge button class on the p tag
  $("p").toggleClass("challengeButton");
//toggles challenge button class on the h1 tag
  $("h1").toggleClass("challengeButton");

  return console.log("The current class toggled is the challengeButton class");
});

$(document).ready(function(){
  //creates a button at the end of the div problems
  $("#problems").append('<button type ="button" class = "problemsButton" >Click here!</button>');


});




//adds an event handler for the problemsButton
$("#elevenScrawl").on("click", ".problemsButton", function(){
//removes challenge button class from the p tag
  $("p").removeClass("challengeButton");
//removes challenge button class from the h1 tag
  $("h1").removeClass("challengeButton");

//removes results button class from the p tag
  $("p").removeClass("resultsButton");
//removes results button class from the h1 tag
  $("h1").removeClass("resultsButton");

//toggles problem button class on the p tag
  $("p").toggleClass("problemsButton");
//toggles problem button class on the h1 tag
  $("h1").toggleClass("problemsButton");

  return console.log("the current class toggled is the problemsButton class");
});



$(document).ready(function(){
  //creates a button at the end of the div results
  $("#results").append('<button type ="button" class = "resultsButton" >Click here!</button>');

});



$("#elevenScrawl").on("click", ".resultsButton", function(){
//removes the challenge button class from the p tag
  $("p").removeClass("challengeButton");
//removes the challenge button class from the h1 tag
  $("h1").removeClass("challengeButton");

//removes the problem button class from the p tag
  $("p").removeClass("problemsButton");
//removes the problem button class from the h1 tag
  $("h1").removeClass("problemsButton");

//toggles the results button class for the p tag
  $("p").toggleClass("resultsButton");
//toggles the results button class for the h1 tag
  $("h1").toggleClass("resultsButton");

  return console.log("The current class toggled is the resultsButton class");
});
