import React from 'react';
import styled from 'styled-components';

const FocusBackground = () => {
  return <FocusBehind className='blur'/>;
};
const FocusBehind = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px) brightness(15%);
  opacity: 0.9;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
`;
export default FocusBackground;
