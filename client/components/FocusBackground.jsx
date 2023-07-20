import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../routes/dataStore.js';

const FocusBackground = () => {
  const { setFocusPieceFilterIndex } = useContext(StoreContext);

  const exitFocus = () => {
    console.log('Clicking background');
    setFocusPieceFilterIndex();
  };

  return <div className="blur" onClick={exitFocus} />;
};

export default FocusBackground;
