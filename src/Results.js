import React from "react";
import ResultsByQuestion from "./ResultsByQuestion";


const Results = (props) => (
  <div>
    <h1>Current Count Results of the Survey</h1>
    {props.questionsResults.map((questionResults) => {
      return <ResultsByQuestion questionResults={questionResults}/>
    })}
    <button>Back to the Survey</button>
  </div>
);

export default Results;