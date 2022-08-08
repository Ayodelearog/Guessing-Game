function magicGuessMachine() {
  alert("Pick a random positive number in your mind");
  var numToAdd = [
    5, 8, 14, 19, 23, 30, 35, 2, 16, 25, 40, 22, 15, 3, 6, 2, 12, 24, 28, 17,
    11, 21, 27,
  ];
  var num1 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
  setTimeout(() => {
    displayMessage("Add ", num1);
  }, 0);
  var num2 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
  setTimeout(() => {
    displayMessage("Add ", num2);
  }, 5000);
  var num3 = numToAdd[Math.floor(Math.random() * numToAdd.length)];
  setTimeout(() => {
    displayMessage("Add ", num3);
  }, 10000);
  setTimeout(() => {
    displayMessage("Subtract your initial guess.");
  }, 15000);
  var realGuess = num1 + num2 + num3;
  setTimeout(() => {
    displayMessage("your initial guess was ", realGuess);
  }, 20000);
}

const displayMessage = function (message, numberAdd) {
  var messageArea = document.getElementById("messageArea");
  messageArea.innerText = `${message} ${numberAdd ?? ""}`;
};

var button = document.getElementById("button");

button.addEventListener("click", () => {
  magicGuessMachine();
});
