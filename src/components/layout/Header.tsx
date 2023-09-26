import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../assets/images/ordernarcan-logo-final.png';
import NarcanIconRGB from '../assets/images/narcan_icon.png';
import DropDownButton from '../dropdown';

const MiddleIcon = () => {
  return (
    <div className="centered-container">
      <img
        src={NarcanIconRGB}
        alt="Icon Description"
        className="icon-image mb-5"
      />
    </div>
  );
};

const Header = () => {
  const [selectedValue, setSelectedValue] = useState('Eng');

  return (
    <>
      <Row className="row-with-middle-col">
        <Col xs="auto">
          <img
            src={logo}
            alt="Icon Description"
            className="icon mb-5 col-auto-logo"
          />
        </Col>

        <Col xs="auto" className="col-auto-text">
          <p style={{ fontSize: '10px', color: 'GrayText' }}>
            {
              '<<Branch 1: Unscheduled provinces (BC, AB, SK, MB)>> <<Page 1.1.1: Order details, acknowledge requirements>>'
            }
          </p>
        </Col>

        <Col xs="auto" className="col-auto-dropdown">
          <DropDownButton
            options={['ENG', 'Spanish', 'Arabic']}
            selectedOption={selectedValue}
            onSelect={setSelectedValue}
          />
        </Col>
      </Row>
      <MiddleIcon />
    </>
  );
};
export default Header;
