import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import logoDark from '../../Image/logo-dark.png';
import './FindHotel.css';
import HotelDetails from './HotelDetails/HotelDetails';
import hotelData from '../../TravelData/hotelData';
import Map from '../Map/Map';

const SearchHotel = () => {
  const [hotels, setHotels] = useState(hotelData);

  return (
    <>
      <Container>
        <Row>
          <Header
            src={logoDark}
            className='menu black'
            userClass='user-name dark'
          />
          <div className='hr'></div>
        </Row>

        <Row>
          <Col md={6}>
            <div className='location-meta'>
              <p>252 stays Apr 13-17 3 guests</p>
              <h3>Stay in Cox’s Bazar</h3>
            </div>
            {hotels.map((hotel) => (
              <HotelDetails key={hotel.key} hotel={hotel} />
            ))}
          </Col>
          <Col md={6}>
            <div className='mapStyler'>
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchHotel;
