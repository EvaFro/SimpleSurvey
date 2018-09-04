import React from "react";
import Question from "./Question";


class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSave : this.onSave.bind(this)
    };
  }


  onSave(){
    let newQuestions = this.props.questions;
    for(let i=0; i < newQuestions.length; i++) {
      let question = newQuestions[i];
      let x = document.querySelector(`input[name = question${question.num}]:checked`).value;
      if(x === 'true'){
        newQuestions[i].trueCount++
      } else if(x === 'false'){
        newQuestions[i].falseCount++
      }
    }

    let data = {
      name: 'Results',
      questions:newQuestions
    }

    this.props.switchComponent(data)
  }


  render() {
    return (
      <div>
        <h1>Please answer the following questions:</h1>
        <p>* You must answer all questions to submit *</p>
        {this.props.questions.map((question,i) => {
          return <Question key={i} question={question} />
        })}
        <div>
          <button onClick={this.state.onSave} >Submit</button>
        </div>
      </div>
    );
  }
}

export default Survey;