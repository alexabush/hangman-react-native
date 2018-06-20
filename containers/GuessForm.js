import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import styled from 'styled-components';
import { SubtitleText } from '../styledComponents';

const StyledTextInput = styled.TextInput`
  font-size: 24px;
`;

class GuessForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = value => {
    this.setState({ value });
  };

  handleSubmit = event => {
    // debugger;
    event.preventDefault();
    console.log('in handleSubmit');
    console.log('value:', this.state.value);
    this.props.processGuess(this.state.value.toLowerCase());
    this.setState({ value: '' });
  };

  render() {
    console.log('in GuessForm');
    console.log('this.props', this.props);
    // debugger;
    return (
      <View>
        <SubtitleText>Enter A Letter:</SubtitleText>
        <StyledTextInput
          onSubmitEditing={this.handleSubmit}
          value={this.state.value}
          onChangeText={this.handleChange}
          placeholder="?"
        />
      </View>
    );
  }
}

export default GuessForm;
