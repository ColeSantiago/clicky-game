import React, { Component } from 'react';
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    notClickedYet: characters,
  };

  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

    updateState = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const batman = this.state.characters.find(character => character.clicked === clicked);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
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
          />
        ))}
      </div>
    );
  }
}

export default App;
