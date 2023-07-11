import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./KeyBoard.css"

export default function Keyboard ({ guessedLetters, handleGuess, GameWon, GameLost })  {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="keyboard">
      {alphabet.split('').map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || GameWon || GameLost}
          className="btn btn-dark m-1"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};


