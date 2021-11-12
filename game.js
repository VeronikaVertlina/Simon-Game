//--------------STEP 1

var buttonCollours  = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonCollours[nextSequence()];

alert(randomChosenColour);



//---------------STEP 2
function nextSequence() {
  var randomNumber = Math.floor((Math.random() * buttonCollours.length));
  return randomNumber;
}
