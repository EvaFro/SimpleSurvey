import React from "react";
import { render } from "react-dom";
import Welcome from "./Welcome"
// import Survey from "../SurveyPage/Survey"
// import Results from '../ResultsPage/Results'

import questions from '../data'
import "../styles.scss";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSave : this.onSave.bind(this),
      answers:{}
    };
  }

  onSave(event) {

  }

  render() {
    const { onSave } = this.state;
    return (
      <div>
        <Welcome/>
      </div>
    );
  }
}


render(<App />, document.getElementById("app"));
