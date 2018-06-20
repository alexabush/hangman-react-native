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
  numWrongGuesses: 0,
  guessedLetters: (() => new Set())(),
  word: WORDS[2],
  winStatus: 0,
  gameState: 'Please enter a guess'
};

const guessedLettersSet = (() => new Set())();

function randomNum(start, end) {
  const num = Math.floor(Math.random() * end) + start;
  return num;
}

export default class App extends Component {
  state = {
    numWrongGuesses: 5,
    guessedLetters: guessedLettersSet,
    word: WORDS[randomNum(0, WORDS.length)],
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
    // console.log('this.state.word', this.state.word);
    // console.log(
    //   'this.state.word.includes(guess)',
    //   this.state.word.includes(guess)
    // );
    debugger;
    if (!this.state.word.includes(guess)) {
      debugger;
      this.setState(prevState => {
        let winStatus = prevState.numWrongGuesses >= 5 ? 2 : 0;
        debugger;
        return { numWrongGuesses: prevState.numWrongGuesses + 1, winStatus };
      });
    }
    debugger;
    this.setState(prevState => {
      debugger;
      const newGuessedLetters = new Set(prevState.guessedLetters);
      newGuessedLetters.add(guess);
      let winStatus = prevState.word.split('').every(letter => {
        return newGuessedLetters.has(letter);
      })
        ? 1
        : 0;
      return { guessedLetters: newGuessedLetters, winStatus };
    });
    debugger;
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
