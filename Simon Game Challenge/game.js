var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];
var gameIsActive = false;
var level = 0

function nextSequence() {
  $("h1").text("Level " + level.toString());

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  
  gamePattern.push(randomChosenColor);
  showSequence();

  level++;
}

function showSequence() {
  for (var i = 0; i < gamePattern.length; i++) {
    setTimeout(function(tileName) {
      animateTile(tileName);
    }, 1000 * (i + 1), gamePattern[i]);
  }
}

function flashTile(tileName) {
  $("." + tileName).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(tileName) {
  $("." + tileName).addClass("pressed");
  setTimeout(function() {
    $("." + tileName).removeClass("pressed");
  }, 100, tileName);
}

function animateTile(tileName) {
  flashTile(tileName);
  playSound(tileName);
  animatePress(tileName);
}

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animateTile(userChosenColor);
});

$(document).keypress(function() {
  if (gameIsActive === false) {
    nextSequence();
    gameIsActive = true;
  }
});