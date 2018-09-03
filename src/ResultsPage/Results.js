import React from "react";
import ResultsByQuestion from "./ResultsByQuestion";


const Results = (props) => (
  <div>
    <h1>Current Count Results of the Survey</h1>
    {props.questionsResults.map((questionResults,i) => {
      return <ResultsByQuestion key={i} questionResults={questionResults}/>
    })}
    <button onClick={()=>{props.onClick({name:'Welcome'})}} >Back to the Survey</button>
  </div>
);

export default Results;