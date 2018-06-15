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

const words = [
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
  guessedLetters: () => new Set(),
  word: '',
  winStatus: 0
};

export default class App extends Component {
  state = {};

  componentDidMount() {
    console.log('in componentDidMount');
    this.setState(DEFAULT_STATE);
  }

  processGuess = () => {};
  checkWin = () => {};
  checkLoss = () => {};
  resetGame = () => {};

  render() {
    return (
      <MainAppView>
        <Text>Hangman</Text>
        <DisplayHangman />
        <DisplayGuesses />
        <DisplayWord />
      </MainAppView>
    );
  }
}
