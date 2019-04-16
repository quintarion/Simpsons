import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" />
      </form>
    );
  }
}

export default Form;


  