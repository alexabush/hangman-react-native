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

export default class App extends Component {
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
