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
const maxOfGuess = 11;
let numOfGuess;
let guessedWord = [];
let guessingWord = [];

// regex to match a-z and A-Z
const isAlpha = (char) => /[a-z]/i.test(char);

// press any keys from a-z or A-Z to start
const startGame = (e) => {
  if (isAlpha(e.key) && !pauseGame) {
    console.log(e.key);
  }
};

document.addEventListener('keypress', startGame);
