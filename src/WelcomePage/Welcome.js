import React from "react";

const Welcome = (props) => (
  <div>
    <h1>Welcome To the Survey</h1>
    <div>To take this survey please select the button below.</div>
    <button onClick={()=>{props.onClick({name:'Survey'})}} >Survey</button>
  </div>
);

export default Welcome;