
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var start = false;

//1. Use jQuery to detect when a keyboard key has been pressed,when that happens for the first time, call nextSequence().
$(document).keypress(function(){
  // alert("A key was pressed");
    if(!start){
    //3. The h1 title starts out saying "Press A Key to Start",when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//--> So if the Green button was clicked, userChosenColour will equal its id which is "green".
$('.btn').click(function() {
  var userChosenColour = $(this).attr("id"); // var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);

  animatePress(userChosenColour);
  console.log("User pattern is " + userClickedPattern);
  checkAnswer(level);
});


function nextSequence() {
  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
  console.log("Game pattern is " + gamePattern);


}



//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if(userClickedPattern.every(function(element){
    gamePattern.includes(element);
  })
    console.log("success");)
  //{
  //    currentLevel++;
  //    $("#level-title").text("Level " + currentLevel);
  //     console.log("success");
  //     nextSequence();
  //   }
    // else {
    //   alert("wrong");
    // }
}



//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
  //Take the code we used to play sound in the nextSequence() function and move it to playSound().
  var audio = new Audio ('sounds/' + name + '.mp3');
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour) {
  //2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey
  //3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    var activeButton = $("#" + currentColour);
    activeButton.addClass("pressed");

    //4. use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      activeButton.removeClass("pressed")
    }, 100);
}







// var buttonCollours  = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
//
// function nextSequence() {
//   var randomNumber = Math.floor((Math.random() * 4));
//   var randomChosenColour = buttonCollours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   // alert(randomChosenColour);
//   selectBtn(randomChosenColour);
//
// }
//
//
// //-------Step 3 - Show the Sequence to the User with Animations and Sounds
// //1. Use jQuery to select the button with the same id as the randomChosenColour
// //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
// // Hint 1. Remember that to select ids with jQuery you need the "#" symbol.
// // https://api.jquery.com/id-selector/
// // Hint 2. https://www.google.co.uk/search?q=animate+flash+jQuery
// // Hint 3. https://www.google.co.uk/search?q=play+sound+javascript
//
//   function selectBtn(randomChosenColour) {
//   switch(randomChosenColour){
//     case "yellow":
//     $("#yellow").fadeOut(100).fadeIn(100).click(function() {
//       var yellowAudio = new Audio ('sounds/yellow.mp3');
//       yellowAudio.play();
//     });
//     break;
//
//     case "green":
//     $("#green").fadeOut(100).fadeIn(100).click(function(){
//       var greenAudio = new Audio ('sounds/green.mp3');
//       greenAudio.play();
//     });
//     break;
//
//     case "red":
//     $("#red").fadeOut(100).fadeIn(100).click(function(){
//       var redAudio = new Audio ('sounds/red.mp3');
//       redAudio.play();
//     });
//     break;
//
//     case "blue":
//     $("#blue").fadeOut(100).fadeIn(100).click(function(){
//       var blueAudio = new Audio ('sounds/blue.mp3');
//       blueAudio.play();
//     });
//     break;
//
//     default: console.log(nextSequence());
//   }
// }
//
// nextSequence();
