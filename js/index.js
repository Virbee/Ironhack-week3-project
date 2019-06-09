var characters = [
  { name: "Stefan", img: "../images/001-boy.svg" },
  { name: "Pablo", img: "../images/003-nerd.svg" },
  { name: "Laura", img: "../images/021-girl.svg" },
  { name: "Karl", img: "../images/028-engineer-1.svg" },
  { name: "Ifemelu", img: "../images/030-policewoman.svg" },
  { name: "Naïma", img: "../images/026-old-woman.svg" }
];

//the document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  var characterDisplayed = "";
  characters.forEach(function(character) {
    characterDisplayed += '<p class="character">';
    characterDisplayed += `<img src="` + character.img + `">`;
    characterDisplayed += `<span>` + character.name + `</span>`;
    characterDisplayed += `</p>`;
  });
  document.querySelector("#my_board").innerHTML = characterDisplayed;
});
