/**
* Author: Justin Juang & Christian Decareau
* Date: 11/29/2021
**/

//assigned html to a variable
var ourUrl = "http://numbersapi.com/#42";

//Add a click event to the button
$("#activate").click(callAjax);

//When a user clicks the button, use a jQuery AJAX call to fetch output from your API

//jQuery AJAX is assigned a named function to make the button call simpler
function callAjax(){
  //shows the user that the function was called upon button press
  console.log("click");

  $.ajax({
    //assigns ourUrl as the call in question
    url: ourUrl,
    //a GET request
    type: "GET",
    //data type is left empty since the request is an html


    success: function(data){
      console.log("Success: ", data);
      //
      JSON.stringify(data);
      $("#output").html(data);
    },

      error: function(jqXHR, textStatus, errorThrown){
        console.log("Error:", textStatus, errorThrown);
      }
})
}
