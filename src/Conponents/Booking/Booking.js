import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import HeroArea from '../HeroArea/HeroArea';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import TravelData from '../../TravelData/TravelData';
import DatePicker from 'react-datepicker';
import './Booking.css';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import { CalendarIcon } from '@primer/octicons-react';

const Booking = () => {
  const { bookingKey } = useParams();
  const [travels, setTravle] = useState(TravelData);

  const getBookingData = travels.find((travel) => travel.key === bookingKey);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <HeroArea>
      <Container>
        <Row>
          <Col md={5}>
            <PlaceDescription
              title={getBookingData.placeName}
              description={getBookingData.description}
            ></PlaceDescription>
          </Col>
          <Col md={7}>
            <div className='booking-form'>
              <form>
                <Row>
                  <Col sm={12}>
                    <label htmlFor='origin'> Origin </label>
                    <input type='text' />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <label htmlFor='destination'>Destination</label>
                    <input
                      type='text'
                      value={getBookingData.placeName}
                      readOnly
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className='dateIcon-wrap'>
                      <label htmlFor='form'> From </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat='d/MM'
                        showDateMonthPicker
                        showFullMonthYearPicker
                        showTwoColumnMonthYearPicker
                      />
                      <CalendarIcon size={18} />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className='dateIcon-wrap'>
                      <label htmlFor='to'> To </label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat='d/MM'
                        showDateMonthPicker
                        showFullMonthYearPicker
                        showTwoColumnMonthYearPicker
                      />
                      <CalendarIcon size={18} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Link to='/find_hotel'>
                    <PrimaryBtn> Start Booking </PrimaryBtn>
                  </Link>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </HeroArea>
  );
};

export default Booking;
