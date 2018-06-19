import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

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
    const bodyArr = BODYPARTS.slice(0, this.props.numWrongGuesses);
    const display = bodyArr.map((part, index) => {
      return <Text key={index}>{part}</Text>;
    });
    return (
      <View>
        <Text>Hangman</Text>
        <View>{display}</View>
      </View>
    );
  }
}

export default DisplayHangman;
