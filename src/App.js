import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./Quote";
//import Lamp from "./Lamp";  
//import Work from "./Work";
//import Form from "./components/Form"//   
//import FormControled from "./components/FormControled" 
import Api from './Api';                

class App extends Component {
  state = {
    working: true,  //nom de la state
  }

handleClick = () => {
  this.setState({ working: !this.state.working }); //setState permet de modifier l'état de la state
};

render() { //le rendu
    const working = this.state.working ? 'work' : 'no_work';
    const animation = this.state.working ? 'fast' : 'slow';
    
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className={animation} alt="logo" />
              <h1 className="App-title">Simpsons Quotes</h1>
          </header>
    
        <button 
          onClick={this.handleClick} //{() => alert('Button clicked')} //attribut
          className={working}
        >
        </button>
  
    <Quote 
      quote="I believe the children are the future... Unless we stop them now!"
      character="Homer Simpson"
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" alt=""
    />
    <Quote 
      quote="Me fail English? That's unpossible"
      character="Ralph Wiggum"
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523" alt=""
    />
    {/* <div>
      <Form />
      <FormControled />
    </div> */}
    <div>
      <Api />
    </div>
    </div>
    );
  }
}

export default App;
