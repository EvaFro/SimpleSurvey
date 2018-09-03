import React from "react";

const Question = (props) => (
  <div>
  <form>
      <div>
        <p>{props.question.q}</p>
        <label for="choice1">True</label>
        <input type="radio"
        id="choice1"
        name={`question${props.question.num}`}
        value={true}/>
        <br/>
        <label for="choice2">False</label>
        <input type="radio"
        id="choice2"
        name={`question${props.question.num}`}
        value={false}/>
      </div>
  </form>
  </div>
);

export default Question;