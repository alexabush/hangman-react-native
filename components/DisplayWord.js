import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { StyledView, SubtitleText, StyledLetter } from '../styledComponents';

const WordView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

class DisplayWord extends PureComponent {
  render() {
    console.log('in DisplayWord');
    console.log('this.props', this.props);
    // debugger;
    const wordState = Array.from(
      { length: this.props.word.length },
      val => '_'
    );
    let count = 0;
    for (let letter of this.props.word) {
      if (this.props.guessedLetters.has(letter)) {
        wordState[count] = letter;
      }
      count++;
    }
    const display = wordState.map((val, index) => {
      return <StyledLetter key={index}>{val}</StyledLetter>;
    });
    // debugger;
    return (
      <StyledView>
        <SubtitleText>Word</SubtitleText>
        <WordView>{display}</WordView>
      </StyledView>
    );
  }
}

export default DisplayWord;
