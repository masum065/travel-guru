import React from 'react';
import Header from '../Header/Header';
import homeBackground from '../../Image/homeBackground.jpg';
import './HeroArea.css';
import { Container, Row } from 'react-bootstrap';
import logoWhite from '../../Image/logo-white.png';
import SearchBar from '../Header/SearchBar/SearchBar';

const Home = (props) => {
  return (
    <section
      id='heroArea'
      style={{
        background: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Container>
        <Row>
          <Header src={logoWhite} className='menu' userClass='user-name'>
            <SearchBar />
          </Header>
          <span style={{ height: '170px' }} />
        </Row>
      </Container>
      {props.children}
    </section>
  );
};

export default Home;
