import React, { Component } from 'react';
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters: characters,
    currentScore: 0,
    topScore: 0,
    navMessage: "Click a Batman to Begin!"
  };

  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  updateState = clicked => {
    // this.setState({ 
    //   characters
    // });
   
    this.Shuffle(characters);
    this.setState({ characters });
    
  };

  render() {
    return (
      <div>
        {this.state.characters.map(character => (
          <GameArea
            updateState={this.updateState}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
          />
        ))}
      </div>
    );
  }
}

export default App;
