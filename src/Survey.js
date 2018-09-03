import React from "react";
import Question from "./Question";

const Survey = (props) => (
  <div>
      <h1>Please answer the following questions:</h1>
      {props.questions.map((question) => {
        return <Question question={question} />
      })}
      <div>
        <button onClick={props.onSave} >Submit</button>
      </div>
  </div>
);

export default Survey;