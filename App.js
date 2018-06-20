import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DisplayGuesses from './components/DisplayGuesses';
import DisplayHangman from './components/DisplayHangman';
import DisplayWord from './components/DisplayWord';
import GuessForm from './containers/GuessForm';
import styled from 'styled-components';
import { StyledView } from './styledComponents';

const MainAppView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 30px;
`;

const TitleText = styled.Text`
  font-size: 48px;
`;

const WORDS = [
  'ox',
  'empowering',
  'optimistic',
  'passionate',
  'enjoyable',
  'opportunity',
  'inspirational',
  'enthusiastic',
  'affirmation',
  'gratitude',
  'courageous',
  'persistant',
  'mindfulness',
  'exuberance',
  'motivational',
  'adventurous',
  'confidence',
  'accomplishment',
  'achiever',
  'fullfilled',
  'vivacious',
  'ebullient',
  'cheerful',
  'effervescent',
  'upbeat'
];

const DEFAULT_STATE = {
  numWrongGuesses: 4,
  guessedLetters: () => new Set(),
  word: '',
  winStatus: 0
};

const guessedLettersSet = (() => new Set())();

export default class App extends Component {
  state = {
    numWrongGuesses: 0,
    guessedLetters: guessedLettersSet,
    word: WORDS[0],
    winStatus: 0,
    gameState: 'Please enter a guess'
  };

  // componentDidMount() {
  //   console.log('in componentDidMount');
  //   this.setState({ ...DEFAULT_STATE });
  // }

  processGuess = guess => {
    if (this.state.guessedLetters.has(guess)) {
      this.setState({ gameState: 'That letter has already been guessed' });
    }
    if (!this.state.word.includes(guess)) {
      this.setState(prevState => {
        let winStatus = prevState.numWrongGuesses >= 6 ? 2 : 0;
        return { numWrongGuesses: prevState.numWrongGuesses + 1, winStatus };
      });
    }
    this.setState(prevState => {
      const newGuessedLetters = new Set(prevState.guessedLetters);
      newGuessedLetters.add(guess);
      let winStatus = word.split('').every(letter => {
        return guessedLetters.has(letter);
      })
        ? 1
        : 0;
      return { guessedLetters: newGuessedLetters, winStatus };
    });
  };

  resetGame = () => {};

  render() {
    console.log('this.state.winStatus: ', this.state.winStatus);
    debugger;
    let displayWin;
    switch (this.state.winStatus) {
      case 0:
        displayWin = 'Please Make A Guess';
        break;
      case 1:
        displayWin = 'Congrats! You win!';
        break;
      case 2:
        displayWin = 'Sorry. You lose.';
        break;
    }

    const guessesLeft = 6 - this.state.numWrongGuesses;
    return (
      <MainAppView>
        <TitleText>Hangman</TitleText>
        <Text>{displayWin}</Text>
        <Text>Guesses Left: {guessesLeft}</Text>
        <DisplayHangman numWrongGuesses={this.state.numWrongGuesses} />
        <StyledView>
          <DisplayWord
            word={this.state.word}
            guessedLetters={this.state.guessedLetters}
          />
          <DisplayGuesses guessedLetters={this.state.guessedLetters} />
        </StyledView>
        <GuessForm processGuess={this.processGuess} />
      </MainAppView>
    );
  }
}
