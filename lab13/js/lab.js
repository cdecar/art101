/**
* Author: Christian Decareau & Justin Juang
* Date: 11/19/2021
*
**/


$(function(){
 $(".buttonStart").click(function FizzBuzz(){
   var oneLongString = "";
  for (i= 1; i <= 200; i++){

    if (i%3 == 0 && i%5 == 0 && i%7 == 0){
      oneLongString += i + " FizzBuzzBoom!<br>";
       $("#output").html(oneLongString);
    }
      if (i%3 == 0 && i%5 == 0){
         oneLongString += i + " FizzBuzz!<br>";
          $("#output").html(oneLongString);

      }
       if (i%3 == 0 && i%7 == 0){
           oneLongString += i + " FizzBoom!<br>";
            $("#output").html(oneLongString);

        }
         if (i%5 == 0 && i%7 ==0){
             oneLongString += i + " BuzzBoom!<br>";
             $("#output").html(oneLongString);

          }
            if (i%3 == 0){
               oneLongString += i + " Fizz! <br>";
               $("#output").html(oneLongString);

            }
              if (i%5 == 0){
                 oneLongString += i + " Buzz!<br>";
                 $("#output").html(oneLongString);

              }
                if (i%7 == 0){
                   oneLongString += i + " Boom!<br>";
                   $("#output").html(oneLongString);

                }
                  else{
                     oneLongString += i + "<br>";
                     $("#output").html(oneLongString);

                  }
  }
});
});
