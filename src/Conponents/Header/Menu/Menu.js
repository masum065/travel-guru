import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className={props.className}>
      <Link to='/news'> News </Link>{' '}
      <Link to='/destination'> Destination </Link>{' '}
      <Link to='/blog'> Blog </Link> <Link to='/contact'> Contact </Link>{' '}
    </div>
  );
};

export default Menu;
