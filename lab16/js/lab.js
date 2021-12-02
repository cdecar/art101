/**
* Author: Justin Juang & Christian Decareau
* Date: 12/1/2021
**/

//calls the AJAX function on user click
$("#activate").click(callAjax);

function callAjax(){

  console.log("Start");

      $.ajax({
          //calls to specified url
          url: "https://xkcd.com/614/info.0.json",
          //a GET request
          type: "GET",
          //data type is specified as JSON
          dataType:"json",

            success: function(data){
              //provides user documentation of success
              console.log("Success: ", data);
              //assigns data to a variable for easy manipulation
              var comicObj = data;
              //using a variable to assign data's title tag to
              var titleText = comicObj.title
              //assigns that data to ".textBox" div to displayed in webpage
              $(".textBox").html(titleText);
              //assigns image to variable imgUrl
              var imgUrl = comicObj.img;
              //creates an image tag for said variable to be usable for display
              var imgTag = "<img src=" + imgUrl + ">;";
              //assigns an alt variable
              var imgAlt = comicObj.alt;
              //displays data in console
              console.log(imgUrl, imgTag);
              //assigns photo and alt to appropriate divs
              $("#photoFrame").html(imgTag);
              $("#altText").html(imgAlt);

            },

            error: function(jqXHR, textStatus, errorThrown){
              //prints out an error for view in the console
              console.log("Error:", textStatus, errorThrown);
            }
})

}
