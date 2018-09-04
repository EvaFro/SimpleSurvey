import React from "react";
import { render } from "react-dom";
import Welcome from "./Welcome"
import Survey from "../SurveyPage/Survey"
import Results from '../ResultsPage/Results'
import axios from 'axios'

// import questions from '../data/data'
import "../styles.scss";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: 'Welcome',
      questionsData:[]
    };
  }

  componentDidMount(){
    axios.get('/questions')
      .then(res => this.setState({questionsData: res.data}))
      .catch(error => console.error(error))
  }

  switchComponent({name,questions=this.state.questionsData}) {
    this.setState({
      currentComponent: name,
      questionsData: questions
    });
  }

  displayPage() {
    let page = this.state.currentComponent
    switch(page) {
      case 'Welcome':
        return <Welcome onClick={data => this.switchComponent(data)}/>
      case 'Survey':
        return <Survey questions={this.state.questionsData} switchComponent={data => this.switchComponent(data)}/>
      case 'Results':
        return <Results questionsResults={this.state.questionsData} onClick={data => this.switchComponent(data)}/>
    }
  }

  render() {
    return (
      <div>
        {
          this.displayPage()
        }
      </div>
    );
  }
}


render(<App />, document.getElementById("app"));
