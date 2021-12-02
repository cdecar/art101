//Chess Program and Getting an A.
//Breaks down chess and getting an A into easy steps
// @author ChristianDecareau & Justin Juang.
// @since 10.12.2021.

//Getting an A in a class
//Preview before every lecture
  //Participate in every lecture
//Review after every lecture
  //Turn in assignments/projects on time
    //Go to office hours
    //Try to teach other students that are confused in your way of understanding


//Print the board before each turn
  //Generate White pieces
  //Generate Black pieces
      //Players choose colors to play
      //"White" Player goes first
          //Player turn starts
              //Verify if current player is in "Check"
                  //If positive, restrict legal moves
                      //Does the move get the player out of "Check"?
                          //Yes
                              //The player can choose that move
                          //No
                              //The player cannot choose that move
                  //If negative, player is free to choose any legal move
                  //Accept user input for legal move
                    //Is other player in "Checkmate"?
                        //Yes
                            //Game over, current player wins
                        //No
                           //Turn ends
           //Cycle to next Player
