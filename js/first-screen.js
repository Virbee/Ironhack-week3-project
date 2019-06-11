const titleIntroduction = "November 24th, 1982";
const firstSen =
  "The communist country of Arstotzka has ended a 6-year war with neighboring Kolechia and reclaimed its rightful half of the border town, Grestin.";
const secondSen =
  "Among the throngs of immigrants, visitors and people looking for work are hidden smugglers, spies and terrorists.";
const thirdSen =
  "Yesterday an indicator informed you that a kolechian terrorist would try to pass the border.";
const fourthSen = "You have to demask him/her before he/she commits an attack.";
const fifthSen =
  "Someone who wants to stay anonymous saw him/her in person ; you can ask him 3 questions.";
const sixthSen = "No more.";

///////////////////////////////////////
//////////FIRST SCREEN/////////////////
///////////////////////////////////////

function displayIntro() {
  let c = 0;
  setInterval(() => {
    if (c < titleIntroduction.length) {
      document.querySelector("#bandeau h2").textContent += titleIntroduction[c];
      c++;
      console.log(titleIntroduction[c]);
    }
  }, 100);
}

function displayFirstSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < firstSen.length) {
      document.querySelector("#bandeau p").textContent += firstSen[c];
      c++;
    }
  }, 70);
}

function displaySecondSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < secondSen.length) {
      document.querySelector("#bandeau p").textContent += secondSen[c];
      c++;
    }
  }, 70);
}

function displayThirdSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < thirdSen.length) {
      document.querySelector("#bandeau p").textContent += thirdSen[c];
      c++;
    }
  }, 70);
}

function displayFourthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < fourthSen.length) {
      document.querySelector("#bandeau p").textContent += fourthSen[c];
      c++;
    }
  }, 70);
}

function displayFifthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < fifthSen.length) {
      document.querySelector("#bandeau p").textContent += fifthSen[c];
      c++;
    }
  }, 70);
}

function displaySixthSen() {
  document.querySelector("#bandeau p").textContent = "";
  let c = 0;
  setInterval(() => {
    if (c < sixthSen.length) {
      document.querySelector("#bandeau p").textContent += sixthSen[c];
      c++;
    }
  }, 70);
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(displayIntro, 2000);
  setTimeout(displayFirstSen, 5000);
  setTimeout(displaySecondSen, 16000);
  setTimeout(displayThirdSen, 30000);
  setTimeout(displayFourthSen, 41000);
  setTimeout(displayFifthSen, 50000);
  setTimeout(displaySixthSen, 60000);
});
