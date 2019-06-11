class GuessWhoGame {
  constructor(characters) {
    this.characters = [...characters];
    this.theOne = null; // the character selected will be stored here
    this.charactersEliminated = [];
    this.question = [];
    this.questionAsked = 3; // for each question the counter will be decremented
    this.selectACharacter(); //for each instance the function will be executed
    this.shuffleCharacters();
  }

  selectACharacter() {
    // tirer au sort aléatoirement un personnage du board
    let i = 0;
    i = Math.floor(Math.random() * this.characters.length);
    // sa propriété passe à true
    this.theOne = this.characters[i];
  }

  shuffleCharacters() {
    let newCharacters = [];
    while (this.characters.length > 0) {
      let i = Math.floor(Math.random() * this.characters.length);
      newCharacters.push(this.characters[i]);
      this.characters.splice(i, 1);
    }
    this.characters = newCharacters;
  }

  giveAnAnswer(characteristic) {
    const characterToRemove = this.characters.filter(
      character => character[characteristic] !== this.theOne[characteristic]
    );
    this.charactersEliminated = this.charactersEliminated.concat(
      characterToRemove
    );
    this.characters = this.characters.filter(
      character => character[characteristic] === this.theOne[characteristic]
    );
    this.questionAsked -= 1;
    return this.theOne[characteristic];
  }

  isLoose() {
    if (this.questionAsked === 0 && this.characters.length > 1) {
      return true;
    }
  }

  isWon() {
    if (this.characters.length === 1) {
      return true;
    }
  }

  isFinished() {
    if (this.isWon() || this.isLoose()) {
      return true;
    }
  }
}
