var gamePattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
}

function showSequence() {
  for (var i = 0; i < gamePattern.length; i++) {
    setTimeout(function(tileName) {
      flashTile(tileName);
    }, 1000 * (i + 1), gamePattern[i]);
  }
}

function flashTile(tileName) {
  $("." + tileName).fadeOut(100).fadeIn(100);
}
