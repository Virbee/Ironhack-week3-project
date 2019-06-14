const titleIntroduction = "November 24th, 1982";
const firstSen =
  "The communist country of Arstotzka has ended a 6-year war with neighboring Kolechia and reclaimed its rightful half of the border town, Grestin.";
const secondSen =
  "Among the throngs of immigrants, visitors and people looking for work are hidden smugglers, spies and terrorists.";
const thirdSen =
  "You heard from a kolechian informant that a terrorist would try to cross the border. You can ask 3 questions to unmask them.";
const fourthSen = "Not a single more.";

///////////////////////////////////////
//////////FIRST SCREEN/////////////////
///////////////////////////////////////
var backgroundSound = new Audio("../sons/machine-a-ecrire.mp3");

function displayIntro() {
  backgroundSound.play();
  let c = 0;
  const interval = setInterval(() => {
    console.log("tick");
    if (c < titleIntroduction.length) {
      document.querySelector("#bandeau h2").textContent += titleIntroduction[c];
      c++;
      console.log(titleIntroduction[c]);
    } else {
      clearInterval(interval);
      displayFirstSen();
    }
  }, 100);
}

function displayFirstSen() {
  backgroundSound.play();
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < firstSen.length) {
      document.querySelector("#bandeau p").textContent += firstSen[c];
      c++;
    } else {
      clearInterval(interval);
      displaySecondSen();
    }
  }, 100);
}

function displaySecondSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < secondSen.length) {
      document.querySelector("#bandeau p").textContent += secondSen[c];
      c++;
    } else {
      clearInterval(interval);
      displayThirdSen();
    }
  }, 100);
}

function displayThirdSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < thirdSen.length) {
      document.querySelector("#bandeau p").textContent += thirdSen[c];
      c++;
    } else {
      clearInterval(interval);
      displayFourthSen();
    }
  }, 100);
}

function displayFourthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < fourthSen.length) {
      document.querySelector("#bandeau p").textContent += fourthSen[c];
      c++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(displayIntro, 2000);
});
