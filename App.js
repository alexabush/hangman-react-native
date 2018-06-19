import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DisplayGuesses from './components/DisplayGuesses';
import DisplayHangman from './components/DisplayHangman';
import DisplayWord from './components/DisplayWord';
import styled from 'styled-components';

const MainAppView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const WORDS = [
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
guessedLettersSet.add('a');
guessedLettersSet.add('c');
guessedLettersSet.add('r');
guessedLettersSet.add('i');
// const guessedLettersSet = (() => new Set())();

export default class App extends Component {
  state = {
    numWrongGuesses: 4,
    guessedLetters: guessedLettersSet,
    word: WORDS[17],
    winStatus: 0
  };

  // componentDidMount() {
  //   console.log('in componentDidMount');
  //   this.setState({ ...DEFAULT_STATE });
  // }

  processGuess = () => {};
  checkWin = () => {};
  checkLoss = () => {};
  resetGame = () => {};

  render() {
    return (
      <MainAppView>
        <Text>Hangman</Text>
        <DisplayHangman numWrongGuesses={this.state.numWrongGuesses} />
        <DisplayGuesses />
        <DisplayWord
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />
      </MainAppView>
    );
  }
}
