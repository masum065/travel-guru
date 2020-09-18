import React from 'react';

import './SinglePlace.css';

const SinglePlace = (props) => {
  const { placeName, image, key } = props.travel;
  return (
    <div
      onClick={() => props.handleClick(props.travel)}
      className={props.activeClass}
    >
      <img src={image} alt='' />
      <h3>
        <span>{placeName}</span>
      </h3>
    </div>
  );
};

export default SinglePlace;
