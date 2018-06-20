import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { StyledView, StyledLetter } from '../styledComponents';

const HangmanView = styled.View`
  min-height: 30%;
  padding: 10px;
  /* width: 100%; */
`;

const HangmanParts = styled.Text`
  padding: 0px;
  margin: 0px;
  width: 150px;
  font-size: 36px;
  /* background-color: '#F0F3F4'; */
  color: ${({ color }) => color || 'black'};
`;

const HangmanPart = styled.Text`
  padding: 0px;
  margin: 0px;
  /* width: 150px;
  font-size: 36px; */
  /* background-color: '#F0F3F4'; */
  color: ${({ color }) => color || 'black'};
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

const renderBlack = new Set([dash, underscore]);

const GALLOWS = [
  [space, dash, dash, dash, dash, vertical],
  [space, space, vertical, space, space, space, space, space, vertical],
  [space, 'O', space, space, space, space, vertical],
  [space, leftLimb, vertical, rightLimb, space, space, space, vertical],
  [space, space, vertical, space, space, space, space, space, vertical],
  [space, leftLimb, space, rightLimb, space, space, space, vertical],
  [
    space,
    space,
    underscore,
    underscore,
    underscore,
    vertical,
    underscore,
    underscore
  ]
];

class DisplayHangman extends PureComponent {
  render() {
    let gallows = GALLOWS;
    let joinedRows = gallows.map((row, index) => {
      console.log('row: ', row);
      row.map(part => {
        let color = renderBlack.has(part) ? 'black' : 'white';
        return (
          <HangmanPart color="blue" key={index}>
            {row.join('')}
          </HangmanPart>
        );
      });
      // return (
      //   <HangmanParts color="blue" key={index}>
      //     {row.join('')}
      //   </HangmanParts>
      // );
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
