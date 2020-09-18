import React from 'react';
import './PlaceDescription.css';

const PlaceDescription = (props) => {
  const { title, shortDescp, description } = props;
  return (
    <div className='place-decription'>
      <h2> {title} </h2> <p> {shortDescp} </p> <p> {description} </p>{' '}
      {props.children}{' '}
    </div>
  );
};

export default PlaceDescription;
