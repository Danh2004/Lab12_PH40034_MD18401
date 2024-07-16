// Block.js
import React from 'react';
import styled from 'styled-components/native';

const BlockContainer = styled.View`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  background-color: ${({theme}) => theme.blockBackground};
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.primary};
  margin-bottom: 10px;
`;

const Block = ({ title, children }) => (
  <BlockContainer>
    <Title>{title}</Title>
    {children}
  </BlockContainer>
);

export default Block;
