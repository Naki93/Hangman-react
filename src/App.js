
import './App.css';
import React, { useState } from 'react';
import Keyboard from './components/KeyBoard';
import GuessedWords from './components/GuessedWords';
import IncorrectLetters from './components/IncorrectLetters';

import HangmanDrawing from './components/HangmanDrawing';
import {listOfWords} from "./components/GuessedWords"
import GameVerdict from './components/GameVerdict';


const maximumIncorrectLetters = 10;

export default function App () {
  // State variables
  const [word, setWord] = useState(''); // Create state for word to guess
  const [guessedLetters, setGuessedLetters] = useState([]); // Create state for an array of guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Create state for the number of incorrect guesses
  const [showHelp, setShowHelp] = useState(false); // Create state to toggle for help

  // Select a random word from the word list
  const selectRandomWord = () => {
    const randomWord = Math.floor(Math.random() * listOfWords.length);
    return listOfWords[randomWord].toLowerCase();
  };

  // Begin the game state
  const startGame = () => {
    const newWord = selectRandomWord();
    setWord(newWord);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  // Handle user's letter guess
  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) {
      return; // Letter already guessed
    }

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  // Determine if the game is won or lost
  const GameWon = word.split('').every((letter) => guessedLetters.includes(letter));
  const GameLost = incorrectGuesses >= maximumIncorrectLetters;

  // Toggle the visibility of the help section
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <>
      <div className="show">
      <h1 className="hang">Hangman Game</h1>
        <button className="btn btn-info" onClick={toggleHelp}>
          {showHelp ? 'Hide Help' : 'Show Help'}
        </button>
      </div>
      {showHelp ? (
        <div className="card mb-4">
          <div className="card-header">Help</div>
          <div className="card-body">
            <h5 className="card-title">Hangman Game Rules</h5>
            <p className="card-text">
              Hangman game is a word-guessing game. The goal is to guess the secret word
              by inputting letters within a certain number of attempts. For each incorrect guess, a body part of the hanged man is drawn.
              The game ends when the hidden word is guessed correctly or the hanged man is
              completely drawn. To start the game press the restart button.
            </p>
          </div>
        </div>
      ) : null}
      
      
      <GameVerdict word={word} GameWon={GameWon} GameLost={GameLost} />
      <IncorrectLetters incorrectGuesses={incorrectGuesses} />
      <GuessedWords word={word} guessedLetters={guessedLetters} />
      <HangmanDrawing incorrectGuesses={incorrectGuesses} />
      <Keyboard
        guessedLetters={guessedLetters}
        handleGuess={handleGuess}
        GameWon={GameWon}
        GameLost={GameLost}
      />
      <div className ="game">
      <button className="btn btn-dark restart" onClick={startGame}>
        Restart
      </button>
      </div>
    </>
  );
};

