import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { StyledView, SubtitleText } from '../styledComponents';

class DisplayGuesses extends PureComponent {
  render() {
    console.log('in DisplayGuesses');
    console.log('this.props', this.props);
    // debugger;
    const guessesArr = Array.from(this.props.guessedLetters);
    const joinedGuesses = guessesArr.join('');
    return (
      <StyledView>
        <SubtitleText>Previous Guesses</SubtitleText>
        <Text>{joinedGuesses}</Text>
      </StyledView>
    );
  }
}

export default DisplayGuesses;
