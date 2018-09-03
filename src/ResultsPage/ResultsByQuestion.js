import React from "react";

const ResultsByQuestion = (props) => (
  <div>
    <h4>{`${props.questionResults.num}) ${props.questionResults.q}`}</h4>
    <p>{`True: ${props.questionResults.trueCount}`}</p>
    <p>{`False: ${props.questionResults.falseCount}`}</p>
  </div>
);

export default ResultsByQuestion; 