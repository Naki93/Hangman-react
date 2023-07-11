import React from 'react';
import "./HangmanDrawing.css"
import state1 from "../images/state1.GIF"
import state2 from "../images/state2.GIF"
import state3 from "../images/state3.GIF"
import state4 from "../images/state4.GIF"
import state5 from "../images/state5.GIF"
import state6 from "../images/state6.GIF"
import state7 from "../images/state7.GIF"
import state8 from "../images/state8.GIF"
import state9 from "../images/state9.GIF"
import state10 from "../images/state10.gif"
import state11 from "../images/state11.GIF"
import 'bootstrap/dist/css/bootstrap.css';

export default function HangmanDrawing ({ incorrectGuesses })  {


//Create an array to store all images that will be looped over
  const images = [
   
state1,
state2,
state3,
state4,
state5,
state6,
state7,
state8,
state9,
state10,
state11

  ]
  //images will changes depending on the number of incorrectguesses
  const currentImage = images[incorrectGuesses] || '';
  console.log(currentImage)
  return (
    <div className="hangman-drawing mb-4">
      {currentImage && (
        
        <img
          src={currentImage}
          alt={`Hangman`}
          className="img-fluid"
        />
      )}
    </div>
  );
};


