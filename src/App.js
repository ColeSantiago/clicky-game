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

  updateState = id => {
    const Batman = this.state.characters.find(character => character.id === id);
    if(Batman.clicked === false) {
      Batman.clicked = true;
      this.Shuffle(characters);
      
      this.setState({ characters });
      this.setState({ navMessage: "Great! Keep Going!" });
      this.setState({ currentScore: this.state.currentScore + 1});
      console.log('keep going');
      console.log(this.state.currentScore);

    } else {
      const characters = this.state.characters
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false
      };

      this.setState({ characters });
      this.setState({ navMessage: "You've clicked that already! Game Over!" });
      this.setState({ currentScore: 0});
      console.log('game over');
      console.log(this.state.currentScore);
    }
    
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
