import React from 'react';
import { Link } from 'react-router-dom';
import notfound404 from '../../Image/2488754.png';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${notfound404})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '5%',
        }}
      >
        <Link to='/home'>
          <PrimaryBtn>Go Back</PrimaryBtn>
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
