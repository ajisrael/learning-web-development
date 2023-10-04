
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playDrumSound(this.innerHTML);
  })
}

document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
})

function playDrumSound(drumKey) {
  var drumSoundName = getDrumSound(drumKey);
  if (drumSoundName) {
   var audio = new Audio("sounds/" + drumSoundName + ".mp3");
   audio.play();
  }
}

function getDrumSound(drumKey) {
  switch (drumKey) {
    case "w":
      return "tom-1";
    case "a":
      return "tom-2";
    case "s":
      return "tom-3";
    case "d":
      return "tom-4";
    case "j":
      return "snare";
    case "k":
      return "crash";
    case "l":
      return "kick-bass";
    default:
      alert("Invalid drum key: " + drumKey);
      return null;
  }
}