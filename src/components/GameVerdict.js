import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./GameVerdict.css"

export default function GameVerdict  ({word, GameWon, GameLost })  {
  if (GameLost) {
    return <p className="lose">You lost! The word was "{word}".</p>;
  } else if (GameWon) {
    return <p className="win">Congratulations! You won!</p>;
  } else {
    return "";
  }
};


