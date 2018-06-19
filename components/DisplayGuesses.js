import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

class DisplayGuesses extends PureComponent {
  render() {
    const guessesArr = Array.from(this.props.guessedLetters);
    const joinedGuesses = guessesArr.join('');
    return (
      <View>
        <Text>Guesses</Text>
        <Text>{joinedGuesses}</Text>
      </View>
    );
  }
}

export default DisplayGuesses;
