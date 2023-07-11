import React from 'react';
import "./GuessedWords.css"
import 'bootstrap/dist/css/bootstrap.css';

//Create a variable that will store the list of words
export const listOfWords = ["abactinal",
"abacus",
"abalone",
"abandoned",
"abasement",
"adventure",
"adventurousness",
"autacoid",
"biparous",
"blackness",
"blackthorn",
"attraction",
"attractive",
"attractively",
"Bacillariophyceae",
"bacillary",
"bacilli",
"bacilliform",
"bacillus",
"bacitracin",
"back",
"backache",
"backband",
"clairvoyance",
"clairvoyant",
"clam",
"classic",
"classical",
"classically",
"classicise",
"classicism",
"classicist",
"classicistic",
"claustrophobia",
"claustrophobic",
"drugstore",
"druid",
"drum",
"drumbeat",
"drumfire",
"drumfish",
"drumhead",
"drumlin",
"drummer",
"drumming",
"drumstick"];

export default function GuessedWords ({ word, guessedLetters })  {
  // Create a hidden word string with correctly guessed letters revealed
  const hiddenWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ')

  return(
    <div className="guess">
<p className="lead">{hiddenWord}</p>
    </div>
  )
  
  
};


