import React from 'react';
import './Home.css';
import { Row } from 'react-bootstrap';
import PlaceCarousel from '../PlaceCarousel/PlaceCarousel';
import HeroArea from '../HeroArea/HeroArea';
const Home = () => {
  return (
    <HeroArea>
      <div style={{ overflow: 'hidden', marginLeft: '80px' }}>
        <Row>
          <PlaceCarousel />
        </Row>
      </div>
    </HeroArea>
  );
};

export default Home;
