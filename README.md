# Hangman React App

This is a simple Hangman game built with React. Guess the word by selecting letters, but you only have a limited number of incorrect guesses before the game is over!

## Installation

To install and run this Hangman React app on your computer, please follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine. This app requires Node.js to be able to run.

Open a terminal or command prompt and navigate to the project directory:
### cd hangman-react

Install the required dependencies by running the following command:
### npm install

Once the installation is complete, you can start the development server by running the following command:
### npm start

Your default web browser should automatically open and load the Hangman app. If it doesn't, you can access it by opening a web browser and navigating to http://localhost:3000.

How to Play
1. When the Hangman app is loaded, you will see a blank space representing the hidden word and a set of alphabet buttons and a restart button.

2. First click on the restart button to initialize the game

3. Click on the alphabet buttons to guess the letters of the word. If the selected letter is part of the word, it will be revealed in the corresponding blank space. Otherwise, your incorrect guess count will increase. This will be displayed as errors:0 on the left side of the page.

3. The game continues until you either guess all the letters of the word correctly or reach the maximum number of incorrect guesses. If you guess the word correctly, you win the game. If you run out of incorrect guesses, you lose.

4. After each game, you have the option to start a new game by clicking the "Restart" button, which is below the alphabet buttons.
