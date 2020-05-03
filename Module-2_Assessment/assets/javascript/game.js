const possibleWords = [
  {
    name: 'blastoise',
    image: 'blastoise.png',
    audio: 'blastoise.mp3',
  },
  {
    name: 'chansey',
    image: 'chansey.png',
    audio: 'chansey.mp3',
  },
  {
    name: 'charizard',
    image: 'charizard.png',
    audio: 'charizard.mp3',
  },
  {
    name: 'dragonite',
    image: 'dragonite.png',
    audio: 'dragonite.mp3',
  },
  {
    name: 'eevee',
    image: 'eevee.png',
    audio: 'eevee.mp3',
  },
  {
    name: 'mew',
    image: 'mew.png',
    audio: 'mew.mp3',
  },
  {
    name: 'ninetales',
    image: 'ninetales.png',
    audio: 'ninetales.mp3',
  },
  {
    name: 'pikachu',
    image: 'pikachu.png',
    audio: 'pikachu.mp3',
  },
  {
    name: 'psyduck',
    image: 'psyduck.png',
    audio: 'psyduck.mp3',
  },
  {
    name: 'rapidash',
    image: 'rapidash.png',
    audio: 'rapidash.mp3',
  },
  {
    name: 'seadra',
    image: 'seadra.png',
    audio: 'seadra.mp3',
  },
  {
    name: 'slowbro',
    image: 'slowbro.png',
    audio: 'slowbro.mp3',
  },
  {
    name: 'snorlax',
    image: 'snorlax.png',
    audio: 'snorlax.mp3',
  },
];

// setting up variables for the game
let pauseGame = false;
let wins = 0;
const maxOfGuess = 10;
let numOfGuess;
let wordToMatch;
let guessingWord = [];
let guessingLetter = [];

// variables for the doms
const totalWins = document.querySelector('.total-win');
const leftLeft = document.querySelector('.life-left');
const imageContent = document.querySelector('.content__image');
const currentWord = document.querySelector('#current-word');
const guessedLetter = document.querySelector('#guessed-letter');

const getWordObj = () =>
  possibleWords[Math.floor(Math.random() * possibleWords.length)];

// regex to match a-z and A-Z
const isAlpha = (char) => /[a-z]/i.test(char);

// press any keys from a-z or A-Z to start
const startGame = (e) => {
  if (isAlpha(e.key) && !pauseGame) {
    checkCharacter(e.key.toUpperCase());
  }
};

// render UI
const showDisplay = () => {
  totalWins.textContent = wins;
  leftLeft.textContent = numOfGuess;
  currentWord.textContent = guessingWord.join(' ');
  guessedLetter.textContent = guessingLetter.join(' ');
};

// check character exist function
const checkCharacter = (char) => {
  found = false;

  // create three audio for done, correct and incorrect
  const doneSound = document.createElement('audio');
  const correctSound = document.createElement('audio');
  const incorrectSound = document.createElement('audio');

  doneSound.setAttribute('src', `./assets/audios/${wordToMatch.audio}`);
  correctSound.setAttribute('src', './assets/audios/correct.mp3');
  incorrectSound.setAttribute('src', './assets/audios/wrong.mp3');

  for (let i = 0; i < wordToMatch.name.length; i++) {
    console.log(char === wordToMatch.name.toUpperCase());
    if (char === wordToMatch.name[i].toUpperCase()) {
      // if char exist, replace _ with char
      guessingWord[i] = char;
      correctSound.play();
      found = true;
    }
  }

  // check if guessing word matched with the given word

  if (wordToMatch.name.toUpperCase() === guessingWord.join('')) {
    // WINNER
    wins++;
    pauseGame = true;
    doneSound.play();
    imageContent.classList.add('content__image--active');
    showDisplay();

    // restart game
    setTimeout(() => {
      restartGame();
    }, 2500);
  }

  // If words don't exist
  if (!found) {
    incorrectSound.play();

    // check and add letter to the gussed list
    if (!guessingLetter.includes(char)) {
      guessingLetter.push(char);
      numOfGuess--;
    }

    // if no more guesses, user lose
    if (numOfGuess === 0) {
      // LOSE
      guessingWord = wordToMatch.name.toUpperCase();
      imageContent.classList.add('content__image--active');
      pauseGame = true;
      // restart game
      setTimeout(() => {
        restartGame();
      }, 2500);
    }
  }

  // Update content
  showDisplay();
};

// restart function
const restartGame = () => {
  numOfGuess = maxOfGuess;
  pauseGame = false;

  // get a word
  wordToMatch = getWordObj();
  //   console.log(wordToMatch);

  // reset array
  guessingLetter = [];
  guessingWord = [];

  // remove class active from image
  imageContent.classList.remove('content__image--active');

  // reset guessed word with _
  for (let char of wordToMatch.name) {
    guessingWord.push('_');
  }
  // console.log(guessingWord);

  // change image
  imageContent.setAttribute('src', `./assets/images/${wordToMatch.image}`);

  showDisplay();
};

// restart game during initial load
restartGame();

// wait for game to start with a press key of a-z
document.addEventListener('keypress', startGame);
