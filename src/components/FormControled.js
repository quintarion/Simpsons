import React from 'react';

class FormControled extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "Homer Simpson" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
 
    render() {
      return (
        <div>
          <input type="text" ref={input => this._name = input} />
          <button onClick={this.handleSubmitClick}>Sign up</button>
        </div>
      );
    }
}

export default FormControled