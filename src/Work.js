import React, { Component } from 'react';

class Work extends Component {
    handleClick = () => {
        this.setState({ on: !this.state.on }); //console.log('Button clicked');
    };
    constructor(props) {    //state it is en object
        super(props);       //state it is en object
        this.state = {      //state it is en object
          on: false         //state it is en object
        };                  //state it is en object
    }   
  render() {
    //const light = this.props.on ? 'on' : 'off'; //fonction ternaire
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button 
        onClick={this.handleClick} //{() => alert('Button clicked')} //attribut
        className={light}
        >
        {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Work;