// Button.js
import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.primary};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.buttonText};
  font-size: 16px;
`;

const Button = ({ title, onPress }) => (
  <StyledButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
);

export default Button;
