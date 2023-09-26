import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/Header';
import StepperForm from '../components/stepper-form/index';
import Footer from '../components/layout/Footer';

const OrderDetailsPage = () => (
  <div className="main-container ">
    <Row>
      <Col>
        <Header />
        <StepperForm />
        <Footer />
      </Col>
    </Row>
  </div>
);

export default OrderDetailsPage;
