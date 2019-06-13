const characters = [
  {
    name: "Katia",
    img: "../images/female4.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: true,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Laura",
    img: "../images/female1.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: true,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Lelia",
    img: "../images/female5.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: true,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Maria",
    img: "../images/female6.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: true,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Nadia",
    img: "../images/female2.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: true,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: true,
    shortHaired: false,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Naïma",
    img: "../images/female3.png",
    male: false,
    female: true,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: true,
    brownSkinned: false,
    almostBald: false,
    longHaired: true,
    shortHaired: false,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Karl",
    img: "../images/male3.png",
    male: true,
    female: false,
    yellowSkinned: true,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: true,
    longHaired: false,
    shortHaired: false,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Momo",
    img: "../images/male6.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: true,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: true,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Nadir",
    img: "../images/male8.png",
    male: true,
    female: false,
    yellowSkinned: true,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: true,
    hat: false
  },
  {
    name: "Pablo",
    img: "../images/male2.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: true,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: false,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Piotr",
    img: "../images/male4.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: true,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: false,
    mustache: true,
    beard: false,
    glasses: false,
    hat: true
  },
  {
    name: "Sergueï",
    img: "../images/male5.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: true,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: true,
    longHaired: false,
    shortHaired: false,
    mustache: true,
    beard: true,
    glasses: false,
    hat: false
  },
  {
    name: "Stefan",
    img: "../images/male1.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: true,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: false,
    mustache: false,
    beard: false,
    glasses: false,
    hat: true
  },
  {
    name: "Viktor",
    img: "../images/male9.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: true,
    purpleSkinned: false,
    blueSkinned: false,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: true,
    longHaired: false,
    shortHaired: true,
    mustache: true,
    beard: false,
    glasses: false,
    hat: false
  },
  {
    name: "Vladimir",
    img: "../images/male7.png",
    male: true,
    female: false,
    yellowSkinned: false,
    greenSkinned: false,
    purpleSkinned: false,
    blueSkinned: true,
    pinkSkinned: false,
    brownSkinned: false,
    almostBald: false,
    longHaired: false,
    shortHaired: true,
    mustache: true,
    beard: false,
    glasses: true,
    hat: true
  }
];

const questions = [
  { value: "male", question: "Is the character a man ?" },
  { value: "female", question: "Is the character a woman ?" },
  {
    value: "blueSkinned",
    question: "Is the character blue-skinned ?"
  },
  {
    value: "brownSkinned",
    question: "Is the character brown-skinned ?"
  },
  {
    value: "greenSkinned",
    question: "Is the character green-skinned ?"
  },
  {
    value: "pinkSkinned",
    question: "Is the character pink-skinned ?"
  },
  {
    value: "purpleSkinned",
    question: "Is the character purple-skinned ?"
  },
  {
    value: "yellowSkinned",
    question: "Is the character yellow-skinned ? ?"
  },
  { value: "almostBald", question: "Is the character almost bald ?" },
  { value: "longHaired", question: "Is the character long-haired ?" },
  { value: "shortHaired", question: "Is the character short-haired ?" },
  { value: "glasses", question: "Does the character wear glasses ?" },
  { value: "hat", question: "Does the character wear a hat ?" },
  { value: "beard", question: "Does the character have a beard ?" },
  { value: "mustache", question: "Does the character have a mustache?" }
];

const news = [
  {
    title: "ANALYSTS UPBEAT",
    text: "Increased trade and cooperation predicted"
  },
  { title: "CHECKPOINT LOCKDOWN", text: "More guards, more scrutiny" },
  {
    title: "GRESTLIN CHECKPOINT A SUCCESS",
    text: "Entry restrictions to relax"
  },
  {
    title: "KOLECHIAN CLEANS HOUSE",
    text: "Round of disappearance blamed on faulty evidence"
  },
  {
    title: "IMPOR PROTESTS UNBALANCED TRADE RESTRICTIONS",
    text: "Claims Arstotzka unfairly taxes imporian goods"
  }
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
  document.querySelector(
    "#message"
  ).innerHTML = `Pick a question. Remember you only have ${
    guessWhoGame.questionAsked
  } try.`;
}

function displayCounter() {
  var i = 0;
  while (i < guessWhoGame.questionAsked) {
    document.querySelector(
      "#counter"
    ).innerHTML += `<img src="./images/counter-logo.png"/>`;
    i++;
  }
}

function displayNews() {
  let c = 0;
  const interval = setInterval(() => {
    if (c < news.length) {
      document.querySelector("#news").innerHTML =
        `<h1 class="scale-in-center">` +
        news[c].title +
        `</h1>
        <h4 class="scale-in-center">` +
        news[c].text +
        `</h4>`;
      c++;
    } else {
      c = 0;
    }
  }, 5000);
}

////////////////////////////////////////
/////////////UPDATE THE BOARD///////////
////////////////////////////////////////

function updateTheBoard(characteristicToTest, questionNode) {
  updateMessage(characteristicToTest);
  removeCharacters();
  removeUsedQuestion(questionNode);
  if (guessWhoGame.isFinished() && guessWhoGame.isLoose()) {
    document.querySelector("nav").setAttribute("class", "hidden");
    let board = document.querySelector("#my_board");
    board.setAttribute("id", "loose");
    board.innerHTML =
      `<h1>YOU FAILED TO UNMASK THE TERRORIST</h1><img src="` +
      guessWhoGame.theOne.img +
      `"/><p>You'll be sent to education camp.</p><button id="loose-button">PLAY AGAIN</button>`;
    let looseButton = document.querySelector("#loose-button");
    looseButton.onclick = function() {
      location.reload();
    };
  } else if (guessWhoGame.isFinished() && guessWhoGame.isWon()) {
    document.querySelector("nav").setAttribute("class", "hidden");
    let board = document.querySelector("#my_board");
    board.setAttribute("id", "win");
    board.innerHTML =
      `<h1>YOU UNMASK THE TERRORIST</h1><img src="` +
      guessWhoGame.theOne.img +
      `"/><p>Arstotzka is proud of you. Glory to Arstotzka !</p><button id="win-button">PLAY AGAIN</button>`;
    let winButton = document.querySelector("#win-button");
    winButton.onclick = function() {
      location.reload();
    };
  }
  updateCounter();
}

function removeUsedQuestion(b) {
  b.remove();
}

function removeCharacters() {
  let element = document.querySelectorAll(".character");
  guessWhoGame.charactersEliminated.forEach(character => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].textContent === character.name) {
        element[i].setAttribute("class", "character fade-out");
      }
    }
  });
}

function updateMessage(characteristic) {
  var answer = guessWhoGame.giveAnAnswer(characteristic);
  var messageToDisplay = characteristic;
  if (answer) {
    messageToDisplay += `<span>YES !</span>`;
  } else {
    messageToDisplay += `<span>No...</span>`;
  }
  document.querySelector("#message").innerHTML = messageToDisplay;
}

function updateCounter() {
  var counter = document.querySelector("#counter");
  var logo = document.querySelector("#counter img");
  counter.removeChild(logo);
}

////////////////////////////////////////
///////////////SET THE GAME ////////////
////////////////////////////////////////

var guessWhoGame = new GuessWhoGame(characters);
var backgroundSound = new Audio(
  "../sons/Papers, Please - Theme Song-OBQE_TNI7zw.mp3"
);

document.addEventListener("DOMContentLoaded", function() {
  displayCharacters();
  displayQuestions();
  displayHeader();
  displayCounter();
  displayNews();

  const selectBox = document.getElementById("questions");
  selectBox.onchange = function() {
    const characteristic = selectBox.options[selectBox.selectedIndex].value;
    const questionNode = selectBox.options[selectBox.selectedIndex];
    updateTheBoard(characteristic, questionNode);
  };
  const soundButton = document.getElementById("icon");
  soundButton.onclick = function() {
    backgroundSound.play();
  };
});
