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
  padding: 10px;
  /* width: 100%; */
`;

const HangmanParts = styled.Text`
  padding: 0px;
  margin: 0px;
  width: 100px;
  /* height: 0px; */
`;

function getASCIIChar(asciiNum) {
  return String.fromCharCode(asciiNum);
}

const dash = getASCIIChar(45);
const underscore = getASCIIChar(95);
const vertical = getASCIIChar(124);
const leftLimb = getASCIIChar(47);
const rightLimb = getASCIIChar(92);
const space = getASCIIChar(32);

const GALLOWS = [
  [space, dash, dash, dash, dash, vertical],
  [space, vertical, space, space, space, space, space, space, vertical],
  [space, 'O', space, space, space, space, vertical],
  [space, leftLimb, vertical, rightLimb, space, space, space, vertical],
  [space, space, vertical, space, space, space, space, space, vertical],
  [space, leftLimb, space, rightLimb, space, space, space, vertical],
  [space, space, underscore, underscore, underscore, vertical, underscore]
];

class DisplayHangman extends PureComponent {
  render() {
    // const bodyArr = BODYPARTS.slice(0, this.props.numWrongGuesses);
    // const display = bodyArr.map((part, index) => {
    //   return <StyledLetter key={index}>{part}</StyledLetter>;
    // });
    let gallows = GALLOWS;
    let joinedRows = gallows.map((row, index) => {
      console.log('row: ', row);
      return (
        <HangmanParts
          style={{ fontSize: 36, width: 150, backgroundColor: 'powderblue' }}
          key={index}
        >
          {row.join('')}
        </HangmanParts>
      );
    });
    let display = joinedRows;
    debugger;
    return (
      <HangmanView>
        <View>{display}</View>
      </HangmanView>
    );
  }
}

export default DisplayHangman;
