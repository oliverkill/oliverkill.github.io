var prompt = require('prompt-sync')();
const randomWords = require('random-english-words');

// Hangman class
class hangMan {

    // Seame mängu jaoks vajalikud globaalsed muutujad  
    constructor(elud) {
        this.elud = elud;
        this.guess = [];
        this.arrayWord = [];
        this.word = randomWords();
        this.input = "";
    }

    // Muudame otsitava sõna array-ks, et formaat oleks ühtlane
    wordToArray(word) {
        for (let i = 0; i < word.length; i++) {
            this.arrayWord.push(word.charAt(i));
        }
    }

    // Loome mänguvälja, mis näitab, mitu tähte on otsitavas sõnas
    setPlayingField(word, guess) {
        for (let i = 0; i < word.length; i++) {
            guess.push("_");
        }
        console.log(guess);
    }

    // Kontrollime, kas kasutaja sisend tähendab tema jaoks mängu võitu
    checkWin(input, guess, word) {
        if (input == word) {
            console.log("Õige vastus. Sõna oli: " + input);
            return true;
        } else if (!guess.includes("_")) {
            console.log("Arvasid sõna ära, oled võitnud");
            return true;
        } else {
            return false;
        }
    }

    // Kontrollime ja märgime ära mängulaua vastavalt kasutaja sisendile
    checkInput(input, arrayWord, word, pakutud, guess) {
        if (word.includes(input) || pakutud.includes(input)) {
            for (let i = 0; i < arrayWord.length; i++) {
                if (arrayWord[i] == input) {
                    guess[i] = input;
                }
            }
            console.log(guess);
            return true;
        } else {
            elud--;
            if (elud > 0) {
                console.log("-1 elu, järel on " + elud + " elu");
                this.elud--;
            } else {
                console.log("Kaotasid mängu, sest elud said otsa");
                console.log("Sõna oli " + word);
            }
            return false;
        }
    }

    getElud() {
        return this.elud;
    }

    getInput() {
        return this.input;
    }

    getWord() {
        return this.word;
    }

    getArrayword() {
        return this.arrayWord;
    }

    getInput() {
        return this.input;
    }

    getGuess() {
        return this.guess;
    }

    setInput(input) {
        this.input = input;
    }

}

const uusPela = new hangMan(4);
uusPela.wordToArray(uusPela.getWord());
uusPela.setPlayingField(uusPela.getWord(), uusPela.getGuess());
elud = uusPela.getElud();
while (elud > 0) {
    if (!uusPela.checkWin(uusPela.getInput(), uusPela.getGuess(), uusPela.getWord()) && elud > 0) {
        uusPela.setInput(prompt('Paku täht: '));
        if (!uusPela.checkInput(uusPela.getInput(), uusPela.getArrayword(), uusPela.getWord(), uusPela.getPakutud(), uusPela.getGuess())) {
            console.log("Proovi veel")
        }
    } else {
        break;
    }
}
