
var buttonColours = ["red", "blue", "green", "yellow"];
//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
//2. Create a new variable called level and start at level 0.
var started = false;
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).on("keypress", function(){
  if(!started){
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
$(".btn").click(function(){
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  // alert("Was clicked " + userChosenColour);
  playSound(userChosenColour);
  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  animatePress(userChosenColour);
  //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
  //If the user has pressed red, green, red, yellow, the index of the last answer is 3.
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
     if (userClickedPattern.length === gamePattern.length){
       //5. Call nextSequence() after a 1000 millisecond delay.
       setTimeout(function () {
         nextSequence();
       }, 1000);
     }
   }
  else {
    console.log("worth");
    //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
    var wrongSound = new Audio('sounds/wrong.mp3');
    wrongSound.play();
     //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
     //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $('#level-title').text('Game Over, Press Any Key to Restart');
    //2. Call startOver() if the user gets the sequence wrong.
    startOver();
  }
}

//1. Create a new function called startOver().
function startOver(){
  level = 0;
  started = false;
  gamePattern.length-1;
}


//Step 1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;
  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);
  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  // console.log("gamePattern is " + gamePattern);
  playSound(randomChosenColour);
  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
  //3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
  var audio = new Audio ('sounds/' + name + '.mp3');
  audio.play();

}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour){
  //2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
  //3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}






































//
// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var level = 0;
// var start = false;
//
// //1. Use jQuery to detect when a keyboard key has been pressed,when that happens for the first time, call nextSequence().
// $(document).keypress(function(){
//   // alert("A key was pressed");
//     if(!start){
//     //3. The h1 title starts out saying "Press A Key to Start",when the game has started, change this to say "Level 0".
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     start = true;
//   }
// });
//
// //1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// //--> So if the Green button was clicked, userChosenColour will equal its id which is "green".
// $('.btn').click(function() {
//   var userChosenColour = $(this).attr("id"); // var userChosenColour = this.id;
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);
//
//   animatePress(userChosenColour);
//   console.log("User pattern is " + userClickedPattern);
//   checkAnswer(level);
// });
//
//
// function nextSequence() {
//   //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//   level++;
//
//   //5. Inside nextSequence(), update the h1 with this change in the value of level.
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   //1. Use jQuery to select the button with the same id as the randomChosenColour
//   $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//
//   //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//   playSound(randomChosenColour);
//   console.log("Game pattern is " + gamePattern);
//
//
// }
//
//
//
// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {
//   //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//   return userClickedPattern.every(function(element){
//     return gamePattern.includes(element);
//   });
//
//
//
//   //{
//   //    currentLevel++;
//   //    $("#level-title").text("Level " + currentLevel);
//   //     console.log("success");
//   //     nextSequence();
//   //   }
//     // else {
//     //   alert("wrong");
//     // }
// }
//
//
//
// //2. Create a new function called playSound() that takes a single input parameter called name.
// function playSound(name) {
//   //Take the code we used to play sound in the nextSequence() function and move it to playSound().
//   var audio = new Audio ('sounds/' + name + '.mp3');
//   audio.play();
// }
//
// //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// function animatePress(currentColour) {
//   //2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey
//   //3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//     var activeButton = $("#" + currentColour);
//     activeButton.addClass("pressed");
//
//     //4. use Javascript to remove the pressed class after a 100 milliseconds.
//     setTimeout(function () {
//       activeButton.removeClass("pressed")
//     }, 100);
// }
//
//
//
//
//
//
//
// // var buttonCollours  = ["red", "blue", "green", "yellow"];
// //
// // var gamePattern = [];
// //
// // function nextSequence() {
// //   var randomNumber = Math.floor((Math.random() * 4));
// //   var randomChosenColour = buttonCollours[randomNumber];
// //   gamePattern.push(randomChosenColour);
// //
// //   // alert(randomChosenColour);
// //   selectBtn(randomChosenColour);
// //
// // }
// //
// //
// // //-------Step 3 - Show the Sequence to the User with Animations and Sounds
// // //1. Use jQuery to select the button with the same id as the randomChosenColour
// // //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
// // // Hint 1. Remember that to select ids with jQuery you need the "#" symbol.
// // // https://api.jquery.com/id-selector/
// // // Hint 2. https://www.google.co.uk/search?q=animate+flash+jQuery
// // // Hint 3. https://www.google.co.uk/search?q=play+sound+javascript
// //
// //   function selectBtn(randomChosenColour) {
// //   switch(randomChosenColour){
// //     case "yellow":
// //     $("#yellow").fadeOut(100).fadeIn(100).click(function() {
// //       var yellowAudio = new Audio ('sounds/yellow.mp3');
// //       yellowAudio.play();
// //     });
// //     break;
// //
// //     case "green":
// //     $("#green").fadeOut(100).fadeIn(100).click(function(){
// //       var greenAudio = new Audio ('sounds/green.mp3');
// //       greenAudio.play();
// //     });
// //     break;
// //
// //     case "red":
// //     $("#red").fadeOut(100).fadeIn(100).click(function(){
// //       var redAudio = new Audio ('sounds/red.mp3');
// //       redAudio.play();
// //     });
// //     break;
// //
// //     case "blue":
// //     $("#blue").fadeOut(100).fadeIn(100).click(function(){
// //       var blueAudio = new Audio ('sounds/blue.mp3');
// //       blueAudio.play();
// //     });
// //     break;
// //
// //     default: console.log(nextSequence());
// //   }
// // }
// //
// // nextSequence();
