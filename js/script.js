// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var numberArray = [];
var simonChoices = 5;
var userChoice = [];
var correctChoices = [];

for (var i = 0; i < simonChoices; i++) {
  do {
    var number = randomNumber(1, 100);
  } while (isInArray(number, numberArray));
  numberArray.push(number);
}
console.log(numberArray); // debug

alert("Simon Says:\n" + joinArray(numberArray));

setTimeout(function () {
  for (var i = 1; i <= simonChoices; i++) {
    do {
      var choice = parseInt(prompt("What did Simon say?\nNumber: " + i));
    } while (isNaN(choice) || isInArray(choice, userChoice));
    userChoice.push(choice);
  }

  for (var u = 0; u < userChoice.length; u++) {
    if (isInArray(userChoice[u], numberArray)) {
      correctChoices.push(userChoice[u]);
    }
  }

  setTimeout(function () {
    if (correctChoices.length == 0) {
      alert("Correct numbers: 0!");
    } else {
      alert(
        "Correct numbers: " +
          correctChoices.length +
          "!\nGuessed: " +
          joinArray(correctChoices)
      );
    }
  }, 1000);
}, 30000);

// FUNCTIONS
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function joinArray(array) {
  return array.join(" - ");
}
function isInArray(element, array) {
  return array.indexOf(element) != -1;
}
