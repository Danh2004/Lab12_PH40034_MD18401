// Banner.js
import React from 'react';
import styled from 'styled-components/native';

const BannerImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const Banner = ({ source }) => (
  <BannerImage source={source} />
);

export default Banner;
