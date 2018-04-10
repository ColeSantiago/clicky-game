import React, { Component } from 'react';
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div>
        {this.state.characters.map(friend => (
          <GameArea
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
