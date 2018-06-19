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

const BODYPARTS = ['O', '|', '/', '\', ' | (', ' / '')];

class DisplayHangman extends PureComponent {
  render() {
    console.log('in displayhangman');
    console.log('in props', this.props);
    debugger;
    const bodyArr = BODYPARTS.slice(0, this.props.numWrongGuesses);
    const display = bodyArr.map((part, index) => {
      return <StyledLetter key={index}>{part}</StyledLetter>;
    });
    return (
      <StyledView>
        <View>{display}</View>
      </StyledView>
    );
  }
}

export default DisplayHangman;
