import React, { Component } from 'react';
import Nav from "./components/Nav";
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
    } else {
      const characters = this.state.characters
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false
      };

      if (this.state.currentScore > this.state.topScore){
        this.setState({ topScore: this.state.currentScore });
      };

      this.setState({ characters });
      this.setState({ navMessage: "You've clicked that already! Game Over!" });
      this.setState({ currentScore: 0});
    };
    
  };

  render() {
    return (
      <div>
        <Nav 
          navMessage={this.state.navMessage}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
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
