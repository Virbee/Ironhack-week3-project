var characters = [
  {
    name: "Stefan",
    img: "../images/001-boy.svg",
    male: true,
    female: false,
    blondHaired: false,
    brownHaired: false,
    darkHaired: true,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: false,
    longHaired: false,
    shortHaired: true,
    earrings: false,
    glasses: false,
    hat: false,
    necklace: false
  },
  {
    name: "Pablo",
    img: "../images/003-nerd.svg",
    male: true,
    female: false,
    blondHaired: false,
    brownHaired: true,
    darkHaired: false,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: false,
    longHaired: false,
    shortHaired: true,
    earrings: false,
    glasses: true,
    hat: false,
    necklace: false
  },
  {
    name: "Laura",
    img: "../images/021-girl.svg",
    male: false,
    female: true,
    blondHaired: false,
    brownHaired: false,
    darkHaired: true,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: false,
    longHaired: true,
    shortHaired: false,
    earrings: false,
    glasses: false,
    hat: false,
    necklace: false
  },
  {
    name: "Karl",
    img: "../images/028-engineer-1.svg",
    male: true,
    female: false,
    blondHaired: false,
    brownHaired: false,
    darkHaired: true,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: false,
    longHaired: true,
    shortHaired: true,
    earrings: false,
    glasses: false,
    hat: true,
    necklace: false
  },
  {
    name: "Ifemelu",
    img: "../images/030-policewoman.svg",
    male: false,
    female: true,
    blondHaired: false,
    brownHaired: false,
    darkHaired: true,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: false,
    longHaired: true,
    shortHaired: false,
    earrings: false,
    glasses: false,
    hat: true,
    necklace: false
  },
  {
    name: "Naïma",
    img: "../images/026-old-woman.svg",
    male: false,
    female: true,
    blondHaired: false,
    brownHaired: false,
    darkHaired: false,
    pinkHaired: false,
    redHaired: false,
    whiteHaired: true,
    longHaired: false,
    shortHaired: true,
    earrings: false,
    glasses: true,
    hat: false,
    necklace: false
  }
];

var questions = [
  { value: "male", question: "Is the character a man ?" },
  { value: "female", question: "Is the character a woman ?" },
  {
    value: "blondHaired",
    question: "Is the character blond-haired ?"
  },
  {
    value: "brownHaired",
    question: "Is the character brown-haired ?"
  },
  {
    value: "darkHaired",
    question: "Is the character dark-haired ?"
  },
  {
    value: "pinkHaired",
    question: "Is the character pinkHaired ?"
  },
  {
    value: "redHaired",
    question: "Is the character red-haired ?"
  },
  {
    value: "whiteHaired",
    question: "Is the character white-haired ? ?"
  },
  { value: "long-haired", question: "Is the character long-haired ?" },
  { value: "short-haired", question: "Is the character short-haired ?" },
  { value: "earrings", question: "Does the character wear earrings ?" },
  { value: "glasses", question: "Does the character wear glasses ?" },
  { value: "hat", question: "Does the character wear a hat ?" },
  { value: "necklace", question: "Does the character wear a necklace ?" }
];

///////////////////////////////////////
/////////FIRST DISPLAYINGS/////////////
///////////////////////////////////////

function displayCharacters() {
  var characterDisplayed = "";
  guessWhoGame.characters.forEach(function(character) {
    characterDisplayed += `<p class="character"`;
    if (character == guessWhoGame.theOne[0]) {
      characterDisplayed += `id="theOne"`;
    }
    characterDisplayed += `>`;
    characterDisplayed += `<img src="` + character.img + `">`;
    characterDisplayed += `<span>` + character.name + `</span>`;
    characterDisplayed += `</p>`;
  });
  document.querySelector("#my_board").innerHTML = characterDisplayed;
}

function displayQuestions() {
  var questionsDisplayed = "";
  questions.forEach(function(question) {
    questionsDisplayed += `<option value="` + question.value + `">`;
    questionsDisplayed += question.question;
    questionsDisplayed += `</option>`;
  });
  document.querySelector("#questions").innerHTML += questionsDisplayed;
}

////////////////////////////////////////
/////////////UPDATE THE BOARD//////////////
////////////////////////////////////////

function updateTheBoard(a, b) {
  displayMessage(a);
  removeCharacters();
  removeUsedQuestion(b);
}
//supprime les personnages qui ne matchent pas

function removeUsedQuestion(b) {
  b.remove();
}

function removeCharacters() {
  let element = document.querySelectorAll(".character");
  // pour chaque perso du tableau
  //si answer est vrai, flip tous les personnages dont la valeur est fausse
  guessWhoGame.charactersEliminated.forEach(character => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].textContent === character.name) {
        element[i].setAttribute("class", "character eliminated");
      }
    }
  });
}

function displayMessage(a) {
  var answer = guessWhoGame.giveAnAnswer(a);
  console.log(answer);
  var messageToDisplay = "";
  if (answer === true) {
    messageToDisplay = "YES !";
  } else {
    messageToDisplay = "No...";
  }
  document.querySelector("#message").innerHTML = messageToDisplay;
}

////////////////////////////////////////
///////////////SET THE GAME ////////////
////////////////////////////////////////

//instance a new game
var guessWhoGame = new GuessWhoGame(characters);

//the document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  displayCharacters();
  displayQuestions();
  const selectBox = document.getElementById("questions");
  selectBox.onchange = function() {
    let a = selectBox.options[selectBox.selectedIndex].value;
    let b = selectBox.options[selectBox.selectedIndex];
    updateTheBoard(a, b);
  };
});
