import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition}
        <br />e
        <em>"{props.meaning.example}"</em>
      </p>
    </div>
  );
}