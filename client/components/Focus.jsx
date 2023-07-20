import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Gallery from './Gallery.jsx';
import { StoreContext } from '../routes/dataStore.js';

const Focus = () => {
  const { focusPieceFilterIndex, filteredPieceList, userList } =
    useContext(StoreContext);
  const pieceData = filteredPieceList.find(
    (el) => el._id === focusPieceFilterIndex
  );
  console.log(pieceData);

  const contactSeller = () => {
    const sellerId = pieceData.ownerId;
    const seller = userList.find((e) => e._id === sellerId);
    window.location.href = `mailto:${seller.email}`;
  };

  return (
    <>
      <FocusContainer className="focusContainer">
        <img className="focusImg" src={pieceData.image} />
      </FocusContainer>
      <FocusTag className="pieceInfoContainer">
        <div className="pieceInfo">
          <div className="pieceInfo-top">
            <h4>{pieceData.title}</h4>
            {pieceData.forSale ? (
              <div className='btn-box'>
              <span className="btn-group">
                <a className="filter" onClick={contactSeller}>
                  Contact Seller
                </a>
              </span>
              </div>
            ) : (
              <span />
            )}
          </div>
          <div className="pieceInfo-bottom">
            <p>{pieceData.artist}</p>
            <p>
              {pieceData.forSale
                ? 'Price: $' + pieceData.price
                : 'Not for Sale'}
            </p>
            <p>{pieceData.description}</p>
          </div>
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
  border-radius: 1rem;
  border: none;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 15;
`;

export default Focus;
