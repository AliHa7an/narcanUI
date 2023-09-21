import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NarcanIcon from '../components/icons/NarcanIcon';
import EmergentIcon from '../components/icons/EmergentIcon';
import MapOfCandaIcon from '../components/icons/MapOfCandaIcon';
import EmergentLogo from '../components/icons/emergent-logo-white.png'

const TopBar = () => {
  return (
    <div
      style={{
        width: '100%', // Set your desired width
        height: '83px', // Set your desired height
        top: '0',
        left: '0',
        background: '#fff', // Set background color to #fff
        position: 'absolute',
        transformOrigin: 'top left', 
      }}
    >
      {/* Your top bar content goes here */}
    </div>
  );
};

const MiddleIcon = () => {
  return (
    <div
      style={{
        width: '240px',
        height: '120px',
        top: '83px',
        left: '600px',
        background: '#FFFFFF',
        position: 'absolute',
      }}
    >
      {/* Your middle icon content goes here */}
    </div>
  );
};

const AboveFooter = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        bottom: '320px',
        background: 'white',
        position: 'absolute',
      }}
    >
       <NarcanIcon />
    </div>
  );
};

const Footer = () => {
    return (
      <div
        style={{
          width: '100%',
          height: '320px', // Set your desired footer height
          bottom: '0', // Position it at the bottom of the page
          background: '#232324',
          position: 'fixed', // Use 'fixed' position to make it sticky
          backgroundColor: 'black',
        }}
      >
       {/* <NarcanIcon /> */}
<div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
     <div className='footer-left-content'> 
      <div className='first-footer-line'>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Terms and Conditions of Sale</div>
      <br />
      <img src={EmergentLogo} style={{ height: 150, width: 300, marginBottom: 10 }} alt="Icon Description" className="icon mb-5" />
      <div className='other-footer-text mt-5 mb-5'>Distributed by Emergent BioSolutions Canada Inc. Mississauga, ON L5N 6M1</div>
     <div className='superscript' style={{ marginTop: 10 }}> © 2023 Emergent BioSolutions Canada Inc., a wholly owned subsidiary of Emergent BioSolutions Inc.<br/>
NARCAN®  is a registered trademark of Emergent Operations Ireland Limited, which is a subsidiary of Emergent BioSolutions Inc.
Emergent® and any and all Emergent BioSolutions Inc. brands, products, services and feature names, logos and slogans are trademarks <br /> or registered trademarks of Emergent BioSolutions Inc. or its subsidiaries in the United States or other countries.
    </div>  
    </div>
  <div className='footer-right-content' >
    <div className='footer-emergent-logo'>EMERGENT</div>
   <div className='first-footer-line'>PP-NAR4-CA-00164_08-2023 EN</div>
  </div>
  </div>
    </div>

    );
  };
  

const Content = () => {
    return (
      <div
       className='my-content'
      >
        {/* Your content goes here */}
      </div>
    );
  };

const WelcomePage = () => {
  return (
    <Container className='my-content' fluid style={{ overflowX: "hidden" }} >
      <Row>
        <Col>
          <TopBar />
          {/* <MiddleIcon /> */}
          {/* <Content /> */}
          <NarcanIcon />
          <EmergentIcon />
          <MapOfCandaIcon />
          <AboveFooter />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
