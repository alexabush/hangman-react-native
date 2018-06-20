import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import DisplayGuesses from './components/DisplayGuesses';
import DisplayHangman from './components/DisplayHangman';
import DisplayWord from './components/DisplayWord';
import GuessForm from './containers/GuessForm';
import styled from 'styled-components';
import { StyledView } from './styledComponents';
import { generate } from 'rxjs/observable/generate';

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

// const DEFAULT_STATE = {
//   numWrongGuesses: 0,
//   guessedLetters: (() => new Set())(),
//   word: (() => selectRandomLetter())(),
//   winStatus: 0,
//   gameState: 'Please enter a guess'
// };

function generateNewState() {
  return {
    numWrongGuesses: 0,
    guessedLetters: (() => new Set())(),
    word: (() => selectRandomLetter())(),
    winStatus: 0,
    gameState: 'Please enter a guess'
  };
}

function selectRandomLetter() {
  return WORDS[randomNum(0, WORDS.length)];
}

function randomNum(start, end) {
  const num = Math.floor(Math.random() * end) + start;
  return num;
}

export default class App extends Component {
  state = {
    numWrongGuesses: 0,
    guessedLetters: '',
    word: '',
    winStatus: 0,
    gameState: 'Please enter a guess'
  };

  componentDidMount() {
    console.log('in componentDidMount');
    const newState = generateNewState();
    this.setState(newState);
    // this.setState({ ...DEFAULT_STATE });
  }

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

  resetGame = () => {
    console.log('in componentDidMount');
    const newState = generateNewState();
    this.setState(newState);
  };

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
        <Button title="New Game" onPress={this.resetGame} />
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
