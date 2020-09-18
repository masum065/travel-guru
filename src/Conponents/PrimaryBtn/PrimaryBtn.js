import React from 'react';
import './PrimaryBtn.css';

const PrimaryBtn = (props) => {
  return (
    <>
      <button type={props.type} className='primary-btn' onClick={props.onClick}>
        {' '}
        {props.children}{' '}
      </button>{' '}
    </>
  );
};

export default PrimaryBtn;
