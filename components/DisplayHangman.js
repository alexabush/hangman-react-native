import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { StyledView, StyledLetter } from '../styledComponents';

// const bodyParts = {
//   1: 'O',
//   2: '|',
//   3: '/',
//   4: '\',
//   5: '|',
//   6: '/',
//   7: '\'
// }

const HangmanView = styled.View`
  min-height: 30%;
  padding: 50px;
`;

const BODYPARTS = ['O', '|', '/', '\', ' | (', ' / '')];

class DisplayHangman extends PureComponent {
  render() {
    const bodyArr = BODYPARTS.slice(0, this.props.numWrongGuesses);
    const display = bodyArr.map((part, index) => {
      return <StyledLetter key={index}>{part}</StyledLetter>;
    });
    return (
      <HangmanView>
        <View>{display}</View>
      </HangmanView>
    );
  }
}

export default DisplayHangman;
