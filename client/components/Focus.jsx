import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Gallery from './Gallery.jsx';
import { StoreContext } from '../routes/dataStore.js';

const Focus = () => {
  const { focusPieceFilterIndex, filteredPieceList } = useContext(StoreContext);
  const pieceData = filteredPieceList.find(el=>el._id===focusPieceFilterIndex);
  console.log(pieceData);

  return (
    <>
      <FocusContainer className="focusContainer">
        <img className="focusImg" src={pieceData.image} />
      </FocusContainer>
      <FocusTag className="pieceInfoContainer">
        <div className="pieceInfo">
          <h3>{pieceData.name}</h3>
          <h4>{pieceData.artist}</h4>
          <h4>{pieceData.description}</h4>
          <h4>
            {pieceData.forSale ? 'Price: $' + pieceData.price : 'Not for Sale'}
          </h4>
        </div>
      </FocusTag>
    </>
  );
  // return (
  //   <>
  //     <FocusContainer className="focusContainer">
  //       <img
  //         className="focusImg"
  //         src={
  //           'https://res.cloudinary.com/dbinuhocd/image/upload/v1689871423/t25zikqfngz71rxixfxu.png'
  //         }
  //       />
  //     </FocusContainer>
  //     <FocusTag className='pieceInfoContainer'>
  //       <div className="pieceInfo">
  //         <h3>Piece Title</h3>
  //         <h4>Atrist Name</h4>
  //         <h4>Piece Description</h4>
  //         <h4>Sale Price</h4>
  //       </div>
  //     </FocusTag>
  //   </>
  // );
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
  width: 100%;
  heigth: 100%;
  position: fixed;
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
  z-index: 10;
`;

export default Focus;
