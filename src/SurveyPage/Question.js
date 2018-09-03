import React from "react";

const Question = (props) => (
  <div>
  <form>
      <div>
        <h4>{`${props.question.num}) ${props.question.q}`}</h4>
        <input type="radio"
        id="choice1"
        name={`question${props.question.num}`}
        value={true}/>
        <label > True</label>
        <br/>
        <input type="radio"
        id="choice2"
        name={`question${props.question.num}`}
        value={false}/>
        <label > False</label>
      </div>
  </form>
  </div>
);

export default Question;