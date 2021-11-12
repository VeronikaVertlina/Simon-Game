//3. At the top of the game.js file, create a new array called buttonColours
var buttonCollours  = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3,
  //and store it in a variable called randomNumber
  var randomNumber = Math.floor((Math.random() * 4));

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2
  //to select a random colour from the buttonColours array.
  var randomChosenColour = buttonCollours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  // alert(randomChosenColour);
  selectBtn(randomChosenColour);

}


//-------Step 3 - Show the Sequence to the User with Animations and Sounds
//1. Use jQuery to select the button with the same id as the randomChosenColour
//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
function selectBtn(randomChosenColour) {
  if(randomChosenColour === "yellow"){
    $("#yellow").fadeOut(100).fadeIn(100);
  }
  else if (randomChosenColour === "green"){
    $("#green").fadeOut(100).fadeIn(100);
  }
  else if (randomChosenColour === "red"){
    $("#red").fadeOut(100).fadeIn(100);
  }
  else {
    $("#blue").fadeOut(100).fadeIn(100);
  }
}

nextSequence();
