import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  // setting all of the needed states
  state = {
    characters: characters,
    currentScore: 0,
    topScore: 0,
    navMessage: "Click a Batman to Begin!",
  };

  // this function will shuffle all the pictures in the array when called
  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // checks if the score is 12, if it is display the won game massage and reset everything
  checkWin = score => {
    if (score === 11) {
      const characters = this.state.characters
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false
      };

      if (this.state.currentScore > this.state.topScore){
        this.setState({ topScore: this.state.currentScore + 1 });
      };
      this.setState({ characters: this.state.characters });
      this.setState({ navMessage: " Great! You clicked them all! Keep clicking to start again!" });
      this.setState({ currentScore: 0});
    }
  };

  // each time a photo is clicked check if clicked is false 
  // if it is, the score is incremented by one, the message is displayed, and clicked it changed to true
  updateState = id => {
    const Batman = this.state.characters.find(character => character.id === id);
    if(Batman.clicked === false) {
      console.log(this.state.currentScore);
      Batman.clicked = true;
      this.Shuffle(characters);

      this.setState({ characters });
      this.setState({ navMessage: "Great! Keep Going!" });
      this.setState({ currentScore: this.state.currentScore + 1});
      this.checkWin(this.state.currentScore);
    } else {
      // if clicked is true, the game is over, change the current score to zero and display the message
      // if the current score is higher the the top score, update the topscore
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

  // render the nav, header, game area, and footer to the page while passing in 
  // everything each component needs
  render() {
    return (
      <div>
        <Nav 
          navMessage={this.state.navMessage}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
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
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
