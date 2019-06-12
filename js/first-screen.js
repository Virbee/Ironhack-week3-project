const titleIntroduction = "November 24th, 1982";
const firstSen =
  "The communist country of Arstotzka has ended a 6-year war with neighboring Kolechia and reclaimed its rightful half of the border town, Grestin.";
const secondSen =
  "Among the throngs of immigrants, visitors and people looking for work are hidden smugglers, spies and terrorists.";
const thirdSen =
  "You heard from a kolechian informant that terrorist would try to cross the border.";
const fourthSen = "You have to unmask them before they commit an attack.";
const fifthSen = "Someone who knows him has agreed to answer 3 questions.";
const sixthSen = "Not a single more.";

///////////////////////////////////////
//////////FIRST SCREEN/////////////////
///////////////////////////////////////

function displayIntro() {
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
  }, 80);
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
  }, 80);
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
  }, 80);
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
      displayFifthSen();
    }
  }, 80);
}

function displayFifthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < fifthSen.length) {
      document.querySelector("#bandeau p").textContent += fifthSen[c];
      c++;
    } else {
      clearInterval(interval);
      displaySixthSen();
    }
  }, 80);
}

function displaySixthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  const interval = setInterval(() => {
    if (c < sixthSen.length) {
      document.querySelector("#bandeau p").textContent += sixthSen[c];
      c++;
    }
  }, 80);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(displayIntro, 2000);
});
