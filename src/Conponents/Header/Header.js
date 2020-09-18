import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import Menu from './Menu/Menu';
import './Header.css';

const Header = (props) => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);

  if (logedInUser) {
    if (logedInUser.name === undefined) {
      logedInUser.name = logedInUser.displayName;
    }
  }
  return (
    <>
      <Col className='py-2' md={2}>
        <Link to='/home'>
          <img
            style={{
              maxWidth: '125px',
              margin: '10px 0',
            }}
            src={props.src}
            alt=''
          />
        </Link>
      </Col>
      <Col className='py-2' md={4}>
        {props.children}
      </Col>
      <Col className='py-2' md={6}>
        <div className='d-flex justify-content-between'>
          <Menu className={props.className} />
          <span className='btn-right'>
            {logedInUser.email ? (
              <h3 className={props.userClass}> {logedInUser.name} </h3>
            ) : (
              <Link to='/login'>
                <PrimaryBtn className='text-right'> Login </PrimaryBtn>
              </Link>
            )}
          </span>
        </div>
      </Col>
    </>
  );
};

export default Header;
