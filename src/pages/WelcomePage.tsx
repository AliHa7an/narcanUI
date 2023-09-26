/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CanadaFullIcon from '../components/assets/icons/CanadaFull.icon';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import OrderDetailsPage from './OrderDetails';
import StepperForm from '../components/stepper-form/index';

const Content = () => {
  return (
    <div className="my-content">
      <div className="welcome-text">
        <span>
          Be Prepared to Help Reverse
          <br />  an Opioid Overdose
        </span>
      </div>
      <span className="below-welcome-text">
        To place an order for NARCAN® Nasal Spray,
        <br />
        click on the province that you or your organization reside in.
      </span>
      <span
        style={{
          width: 729,
          height: 619.76,
          paddingTop: '30px',
        }}
      >
        <CanadaFullIcon />
      </span>
      <hr style={{ width: '40%', color: 'white' }} />
      <div className="content-text">
        NARCAN® (naloxone HCl) Nasal Spray is a pure opioid antagonist
        indicated for emergency use to reverse known or suspected opioid
        overdose,  as manifested by respiratory and/or severe central nervous
        system depression. While NARCAN® Nasal Spray can be administered by a
        non-health care professional, it is not intended to be a substitute for
        professional  medical care. Always call 911 as soon as an opioid
        overdose is suspected, before administering naloxone. Please consult the
        Product Monograph here for contraindications, serious warnings,
        precautions, adverse events and dosing guidelines. The Product Monograph
        is also available by calling 1-844-898-0657. Always read the label and
        follow the directions for use. To learn more about NARCAN® Nasal Spray,
        please visit narcannasalspray.ca.
      </div>
    </div>
  );
};

const WelcomePage = () => {
  return <>
<OrderDetailsPage />
  </>
  // return (
  //   <div className="main-container ">
  //     <Row  >
  //       <Col xs="auto">
  //       <Header />
  //         {/* <TopBar /> */}
  //         {/* <MiddleIcon /> */}
  //         <Content />
  //         <Footer />
  //       </Col>
  //     </Row>
  //   </div>
  // );
};

export default WelcomePage;
