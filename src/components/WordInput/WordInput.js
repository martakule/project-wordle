import React from "react";

function WordInput({ addGuess }) {
  const [word, setWord] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("guess:", word);
    addGuess(word);
    setWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        maxLength={5}
      />
    </form>
  );
}

export default WordInput;
