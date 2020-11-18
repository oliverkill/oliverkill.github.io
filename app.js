var prompt = require('prompt-sync')();
const randomWords = require('random-english-words');

// Seame mängu jaoks vajalikud globaalsed muutujad
const word = "test";
let elud = 4;
let pakutud = [];
let guess = [];
let arrayWord = [];
let input = "";

// Muudame otsitava sõna array-ks, et formaat oleks ühtlane
function wordToArray() {
  for (let i = 0; i < word.length; i++) {
    arrayWord.push(word.charAt(i));
  }
}

// Loome mänguvälja, mis näitab, mitu tähte on otsitavas sõnas
function setPlayingField() {
  for (let i = 0; i < word.length; i++) {
    guess.push("_");
  }
  console.log(guess);
}

// Lisame pakutud tähed muutujasse, et kasutaja teaks, mis tähti ja sõnu on pakutud
function addPakutud(input) {
  if (!pakutud.includes(input)) {
    pakutud.push(input);
  }
  console.log("Pakutud tähed: " + pakutud);
}

// Kontrollime, kas kasutaja sisend tähendab tema jaoks mängu võitu
function checkWin(input) {
  if (input == word) {
    console.log("Õige vastus. Sõna oli: " + input);
    elud = 0;
    return true;
  } else if (!guess.includes("_")) {
    console.log("Arvasid sõna ära, oled võitnud");
    elud = 0;
    return true;
  } else {
    return false;
  }
}

// Kontrollime ja märgime ära mängulaua vastavalt kasutaja sisendile
function checkInput(input) {
  if (word.includes(input)) {
    for (let i = 0; i < arrayWord.length; i++) {
      if (arrayWord[i] == input) {
        guess[i] = input;
      }
    }
    addPakutud(input);
    console.log(guess);
    checkWin(input);
    return true;
  } else {
    if (elud > 1) {
      console.log("-1 elu, järel on " + elud + " elu");
      addPakutud(input);
    } else {
      console.log("Kaotasid mängu, sest elud said otsa");
      console.log("Sõna oli " + word);
      elud = 0;
    }
    return false;
  }
}

// Funktsioon, mis järjekorrastab programmi tegevuse kogu mänguks
function startGame(elud) {
  wordToArray();
  setPlayingField();
  while (elud > 0) {
    if (!checkWin(input) && elud > 0) {
      input = prompt('Paku täht: ');
      if(!checkInput(input)) {
        elud -= 1;
      }
    } else {
      break;
    }
  }
}

// Alustab mängu
startGame(elud);
