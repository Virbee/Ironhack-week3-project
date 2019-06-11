const characters = [
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

const questions = [
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
/////////////INITIALIZATION////////////
///////////////////////////////////////

function displayCharacters() {
  let characterDisplayed = "";
  guessWhoGame.characters.forEach(character => {
    characterDisplayed += `<p class="character"`;
    if (character == guessWhoGame.theOne) {
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
  let questionsDisplayed = "";
  questions.forEach(question => {
    questionsDisplayed += `<option value="` + question.value + `">`;
    questionsDisplayed += question.question;
    questionsDisplayed += `</option>`;
  });
  document.querySelector("#questions").innerHTML += questionsDisplayed;
}

function displayHeader() {
  document.querySelector("#message").innerHTML =
    "Sélectionnez une question pour commencer";
  document.querySelector("#nbr_coups").innerHTML = guessWhoGame.questionAsked;
}

////////////////////////////////////////
/////////////UPDATE THE BOARD///////////
////////////////////////////////////////

function updateTheBoard(characteristicToTest, questionNode) {
  displayMessage(characteristicToTest);
  removeCharacters();
  removeUsedQuestion(questionNode);
  if (guessWhoGame.isFinished() && guessWhoGame.isLoose()) {
    // mettre un délai
    document.querySelector("html").innerHTML = "You totally loose";
  } else if (guessWhoGame.isFinished() && guessWhoGame.isWon()) {
    // mettre un délai
    document.querySelector("html").innerHTML = "You totally won";
  }
}

function removeUsedQuestion(b) {
  b.remove();
}

function removeCharacters() {
  let element = document.querySelectorAll(".character");
  guessWhoGame.charactersEliminated.forEach(character => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].textContent === character.name) {
        element[i].setAttribute("class", "character eliminated");
      }
    }
  });
}

function displayMessage(characteristic) {
  var answer = guessWhoGame.giveAnAnswer(characteristic);
  var messageToDisplay = characteristic;
  if (answer) {
    messageToDisplay += `<span>YES !</span>`;
  } else {
    messageToDisplay += `<span>No...</span>`;
  }
  document.querySelector("#message").innerHTML = messageToDisplay;
  document.querySelector("#nbr_coups").innerHTML = guessWhoGame.questionAsked;
}

////////////////////////////////////////
///////////////SET THE GAME ////////////
////////////////////////////////////////

var guessWhoGame = new GuessWhoGame(characters);

document.addEventListener("DOMContentLoaded", function(event) {
  displayCharacters();
  displayQuestions();
  displayHeader();
  const selectBox = document.getElementById("questions");
  selectBox.onchange = function() {
    const characteristic = selectBox.options[selectBox.selectedIndex].value;
    const questionNode = selectBox.options[selectBox.selectedIndex];
    updateTheBoard(characteristic, questionNode);
  };
});

//on choisit une question tant que le jeu n'est pas fini (!isFinished)
