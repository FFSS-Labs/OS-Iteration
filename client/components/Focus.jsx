import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from './Gallery.jsx';
import { StoreContext } from '../routes/dataStore.js';

const Focus = () => {
  // const [ focusedPiece, setFocusedPiece ] = useState(false);

  return (
    <>
      <FocusContainer className="focusContainer">
        <img
          className="focusImg"
          src={
            'https://res.cloudinary.com/dbinuhocd/image/upload/v1689871423/t25zikqfngz71rxixfxu.png'
          }
        />
      </FocusContainer>
      <FocusTag className='pieceInfoContainer'>
        <div className="pieceInfo">
          <h3>Piece Title</h3>
          <h4>Atrist Name</h4>
          <h4>Piece Description</h4>
          <h4>Sale Price</h4>
        </div>
      </FocusTag>
    </>
  );
};

const FocusContainer = styled.div`
  border-radius: 1rem;
  border: 2px solid black;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  height: 10rem;
  position: absolute;
  top: calc(50% - 13.5rem);
  right: calc(50% - 10rem);
  z-index: 10;
`;

const FocusTag = styled.div`
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 10rem;
  position: absolute;
  top: calc(80% - 2rem);
  right: calc(50% - 10rem);
  z-index: 10;
`;

export default Focus;
