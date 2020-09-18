import { ArrowRightIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SinglePlace from './SinglePlace/SinglePlace';
import Slider from 'react-slick';
import TravelData from '../../TravelData/TravelData';
import { Link } from 'react-router-dom';
import PlaceDescription from '../PlaceDescription/PlaceDescription';

const PlaceCarousel = () => {
  const travelData = TravelData;
  const [travels, setTravle] = useState(travelData);

  const [lodedLocations, setLodedLocation] = useState({});

  const handleClick = (location) => {
    const selectedLocation = travels.find(
      (travel) => location.key === travel.key
    );
    setLodedLocation(selectedLocation);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: false,
    navText: false,
  };
  return (
    <>
      <Col md={4}>
        <div
          style={{
            marginLeft: '47px',
            marginTop: '0',
          }}
        >
          <PlaceDescription
            title={
              lodedLocations.key ? lodedLocations.placeName : 'Sajek Valley'
            }
            shortDescp={
              lodedLocations.key
                ? lodedLocations.shortDescp
                : 'The name of Sajek Valley came from the Sajek River that originates from Karnafuli river...'
            }
          >
            <Link
              to={
                lodedLocations.key
                  ? `booking/${lodedLocations.key}`
                  : `booking/SJKS001`
              }
            >
              <PrimaryBtn>
                Booking <ArrowRightIcon size={24} />{' '}
              </PrimaryBtn>{' '}
            </Link>{' '}
          </PlaceDescription>{' '}
        </div>{' '}
      </Col>{' '}
      <Col className='left-50' md={8}>
        <Slider {...settings}>
          {' '}
          {travels.map((travel) => (
            <SinglePlace
              activeClass={
                lodedLocations.key === travel.key
                  ? 'single-palce active'
                  : 'single-palce'
              }
              handleClick={handleClick}
              travel={travel}
              key={travel.key}
            />
          ))}{' '}
        </Slider>{' '}
      </Col>{' '}
    </>
  );
};

export default PlaceCarousel;
