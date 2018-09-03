import React from "react";

const Question = (props) => (
  <div>
  <form>
      <div>
        <h4>{`${props.question.num}) ${props.question.q}`}</h4>
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