import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

class DisplayWord extends PureComponent {
  render() {
    debugger;
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
      return <Text key={index}>{val}</Text>;
    });
    debugger;
    return (
      <View>
        <Text>Happy Days</Text>
        <View>{display}</View>
      </View>
    );
  }
}

export default DisplayWord;
