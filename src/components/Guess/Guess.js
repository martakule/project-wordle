import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  const cells = word ? word.split("") : range(5).map(() => "");
  return (
    <p className="guess">
      {cells.map((letter, index) => (
        <span key={index} className="cell">
          {letter || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
