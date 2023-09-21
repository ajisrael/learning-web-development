const image1Class = ".img1";
const image2Class = ".img2";

function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function setDieImage(imageClass, dieNumber) {
  var dieImagePath = "./images/dice" + dieNumber + ".png";
  document.querySelector(imageClass).setAttribute("src", dieImagePath); 
}

function getWinner() {
  var player1Score = document.querySelector(".img1").getAttribute("src");
  var player2Score = document.querySelector(".img2").getAttribute("src");
  
  if (player1Score > player2Score) {
    return "Player 1";
  } else if (player2Score > player1Score) {
    return "Player 2";
  } else {
    return "Draw";
  }
}

function displayWinner() {
  const winner = getWinner();
  var titleElement = document.querySelector("h1");
  
  titleElement.innerText = winner

  if (winner !== "Draw") {
    titleElement.innerText = winner + " Wins!!"
  }
}

function rollDice() {
  setDieImage(".img1", generateRandomNumber());
  setDieImage(".img2", generateRandomNumber());
}

function resetDice() {
  setDieImage(".img1", 6);
  setDieImage(".img2", 6);
}

rollDice();
displayWinner();