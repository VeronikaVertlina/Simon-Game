
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  alert(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).click(function(){

  //-------Step 3 - Show the Sequence to the User with Animations and Sounds
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  // Hint 1. Remember that to select ids with jQuery you need the "#" symbol.
  // https://api.jquery.com/id-selector/
  // Hint 2. https://www.google.co.uk/search?q=animate+flash+jQuery
  // Hint 3. https://www.google.co.uk/search?q=play+sound+javascript


    var audio = new Audio ('sounds/' + randomChosenColour + '.mp3');
    audio.play();
  });
}

nextSequence();

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
