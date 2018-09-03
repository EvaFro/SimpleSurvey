import React from "react";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSave : this.onSave.bind(this),
      inputTitle : ''

    };
  }

  onSave(event) {
  }

  render() {
    const { inputTitle, onChange} = this.state;
    return (
      <div>
          <p>Please fill out the following questions:</p>
      </div>
    );
  }
}

export default Survey;