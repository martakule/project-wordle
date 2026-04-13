import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(null);
  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
    // End game
    if (guess === answer) {
      setStatus("happy");
    }
    if (guesses.length === 5) {
      setStatus("sad");
    }
  };
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <WordInput addGuess={addGuess} disabled={status !== null} />
      {status && (
        <Banner status={status} guesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
