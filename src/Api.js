import React, { Component } from 'react';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote'; 

const testQuote =  {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: "Left",
}; 

class Api extends Component {

  constructor(props) {
    super(props);
    this.state = {
    // on peut mettre notre sampleEmployee par défaut
    // afin d'avoir toujours un employé d'affiché
        quotestate: testQuote   
    };
  }
  
  getQuote() {
    // Récupération de la citation via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
    .then(response => response.json())
    .then(data => {
    // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
      quotestate: data[0], //supprimer 'result'
      });
    });
  }
  
  render() {
    return (
        <div className="App">
            <div>
                <GenerateQuote selectQuote={() => this.getQuote()} />
                <DisplayQuote quotestate={this.state.quotestate} />
            </div>
        </div>
    );
  }
}
  
export default Api;
