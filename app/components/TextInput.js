// TextInput.js
import React from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput`
  border: 1px solid ${({theme}) => theme.inputBorder};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: ${({theme}) => theme.inputText};
`;

const TextInput = (props) => (
  <StyledTextInput {...props} />
);

export default TextInput;
