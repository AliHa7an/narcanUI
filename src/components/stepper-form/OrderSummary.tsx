import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import Form from 'react-bootstrap/Form';
import Header from '../layout/Header';
import narcanIcon from '../assets/images/narcan_icon.png';
import MapOfCandaIcon from '../assets/icons/MapOfCandaIcon';
import boxImage from '../assets/images/narcan-box-mage.png';

const OrderSummary = ({ nextStep }: any) => {
  return (
    <div>
      <Container
        style={{ color: 'white', marginTop: '170px', marginBottom: '2vw' }}
      >
        <Row
          style={{
            marginTop: '1vw',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
        <Stepper
          steps={[
            { label: 'Order details' },
            { label: 'Shipping details' },
            { label: 'Summary' },
            { label: 'Payment' },
          ]}
          activeStep={2}
          className="stepper"
          stepClassName="stepper__step"
        />
        <Row style={{ margin: '4vw' }}>
          <Row
            className="mb-2"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Col>
              <h3 style={{ color: 'white' }}>Order summary:</h3>
            </Col>
            <Col className="d-flex justify-content-end">
              <p className="gray-text">Edit</p>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={3}>
              <img src={boxImage} style={{ height: '15vw' }} alt="box" />
            </Col>
            <Col className="ml-3">
              <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Col xs={4}>
                  <p>Number of boxes:</p>
                  <p>XX,XXX</p>
                </Col>
                <Col xa={4}>
                  <p>Subtotal:</p>
                  <p>$XX.XXX</p>
                </Col>
                <Col>
                  <p>Shipping:</p>
                  <p>included</p>
                </Col>
                <Col style={{ color: '#E83A78' }}>
                  <p>Shipping:</p>
                  <p>included</p>
                </Col>
              </Row>
              <hr className="px-4" />
              <p>
                (each box contains two single-dose nasal sprayers [4 mg/0.1 mL])
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <h4>Billing address:</h4>
                    <p className="gray-text">Edit</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Name:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Business name:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Street address:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Units, suits etc. (optional):</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>City:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Province:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Postal address:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col className="ml-3">
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <h4>Shipping address:</h4>
                    <p className="gray-text">Edit</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Name:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Business name:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Street address:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Units, suits etc. (optional):</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>City:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Province:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <p>Postal address:</p>
                    <p>{'<<Display previous entry>>'}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col>
                <h4>Contact information:</h4>
              </Col>
              <Col className="d-flex justify-content-end">
                <p className="gray-text">Edit</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex">
                  <p>Phone number:</p>
                  <p>{'<<Display previous entry>>'}</p>
                </div>
              </Col>
              <Col className="ml-3">
                <div className="d-flex">
                  <p>Email address:</p>
                  <p>{'<<Display previous entry>>'}</p>
                </div>
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-end">
            <Button
              style={{
                background: '#CE0058',
                borderRadius: '15px',
                color: 'white',
                padding: '5px 20px 5px 20px',
                border: 'none',
                width: 'auto',
                marginTop: '20px',
              }}
              onClick={nextStep}
            >
              Confirm details and enter payment information
            </Button>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
export default OrderSummary;
