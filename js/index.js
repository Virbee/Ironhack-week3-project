var characters = [
  { name: "Stefan", img: "../images/001-boy.svg", description: "male" },
  { name: "Pablo", img: "../images/003-nerd.svg", description: "male" },
  { name: "Laura", img: "../images/021-girl.svg", description: "female" },
  { name: "Karl", img: "../images/028-engineer-1.svg", description: "male" },
  {
    name: "Ifemelu",
    img: "../images/030-policewoman.svg",
    description: "female"
  },
  { name: "Naïma", img: "../images/026-old-woman.svg", description: "female" }
];

var questions = [
  {
    value: "cheveux blancs",
    question: "Le personnage a-t-il des cheveux blancs?"
  },
  {
    value: "cheveux bruns",
    question: "Le personnage a-t-il des cheveux bruns ?"
  },
  {
    value: "cheveux chatains",
    question: "Le personnage a-t-il des cheveux chatains ?"
  },
  { value: "lunettes", question: "Le personnage porte-t-il des lunettes ?" },
  { value: "chapeau", question: "Le personnage porte-til un chapeau ?" },
  { value: "male", question: "Is the character a man ?" },
  { value: "female", question: "Is the character a woman ?" }
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
/////////////SET THE BOARD//////////////
////////////////////////////////////////

function setTheBoard(a) {
  displayMessage(a);
}
//supprime les personnages qui ne matchent pas

function removeUsedQuestion() {
  console.log(element);
}

function removeCharacters(a) {}

function displayMessage(a) {
  var answer = guessWhoGame.giveAnAnswer(a);
  var messageToDisplay = "";
  if (answer == true) {
    messageToDisplay = "YES !";
  } else {
    messageToDisplay = "No...";
  }
  document.querySelector("#message").innerHTML = messageToDisplay;
}

////////////////////////////////////////
////////BEGINNING OF THE GAME //////////
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
    setTheBoard(a);
  };
});
