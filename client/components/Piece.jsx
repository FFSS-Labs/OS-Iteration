import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Piece = ({
  pieceData,
  setFave,
  pieceIndex,
  isFaved,
  setFocusPieceFilterIndex,
}) => {
  const clickHandler = (e) => {
    // console.log('Clicked by ', e.target.id);
    setFave(e.target.id.slice(1), !isFaved);
  };

  const focus = (e) => {
    const focusIndex = e.target.id.slice(3);
    console.log('Setting Focus Index to', focusIndex);
    setFocusPieceFilterIndex(focusIndex);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1, y: 0 }}
      initial={{ opacity: 0, scale: 0.5, y: 200 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.1 }}
      id={'piece' + pieceData._id}
      key={'piece' + pieceData._id}
      className="piece-container"
    >
      <div className="piece-image-container">
        <img
          src={pieceData.image}
          className="piece-image"
          id={'pic' + pieceData._id}
          onClick={focus}
        />
      </div>
      <div className="piece-content">
        <div className="piece-text">
          <p>{pieceData.title}</p>
          <p>{'by ' + pieceData.artist}</p>
          <p>
            {pieceData.forSale ? 'Price: $' + pieceData.price : 'Not for Sale'}
          </p>
          {/* <p>
            {pieceData.forSale
              ? 'For Sale by ' + pieceData.ownerId
              : 'List by ' + pieceData.ownerId}
          </p> */}
        </div>
        <div className="piece-buttons">
          {isFaved ? (
            <button
              className="content-btn"
              onClick={clickHandler}
              id={'l' + pieceIndex}
            >
              <i
                className="bi bi-heart-fill"
                onClick={clickHandler}
                id={'m' + pieceIndex}
              ></i>
            </button>
          ) : (
            <button
              className="content-btn"
              onClick={clickHandler}
              id={'u' + pieceIndex}
            >
              <i
                className="bi bi-heart"
                id={'v' + pieceIndex}
                onClick={clickHandler}
              ></i>
            </button>
          )}
          {pieceData.isOwner ? (
            <button
              className="content-btn"
              onClick={clickHandler}
              id={'e' + pieceData._id}
            >
              <i className="bi bi-pencil-square" id={'f' + pieceData._id}></i>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Piece;
