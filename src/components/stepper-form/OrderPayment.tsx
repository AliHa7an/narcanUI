import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import Form from 'react-bootstrap/Form';
import Header from '../layout/Header';
import narcanIcon from '../assets/images/narcan_icon.png';
import boxImage from '../assets/images/narcan-box-mage.png';

const OrderPayment = ({ nextStep }: any) => {
  return (
    <div>
      <Header />
      <Container
        style={{ marginTop: 160, marginBottom: '3vw', color: 'white' }}
      >
        <Row
          style={{
            marginTop: '10vw',
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
          activeStep={3}
          className="stepper"
          stepClassName="stepper__step"
        />
        <Row className="justify-content-between mt-6">
          <Col xs={7}>
            <Row>
              <h4>Enter payment information:</h4>
            </Row>
            <Row>
              <Form.Label>
                Card number (visa, mastercard, American Express)
              </Form.Label>
            </Row>
            <Row>
              <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
            </Row>
            <Row className="align-items-end mt-4">
              <Col className="d-flex">
                <Col style={{ paddingLeft: 0 }}>
                  <Row>
                    <Form.Label>Expiration date:</Form.Label>
                  </Row>
                  <Row>
                    <Form.Control type="text" placeholder="xxx" />
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Form.Label>CVV code:</Form.Label>
                  </Row>
                  <Row>
                    <Form.Control type="text" placeholder="xxx" />
                  </Row>
                </Col>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  style={{
                    background: '#CE0058',
                    borderRadius: '15px',
                    color: 'white',
                    padding: '8px',
                    border: 'none',
                  }}
                >
                  Submit Payment
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <Row>
              <Row>
                <div
                  style={{ background: 'white', borderRadius: 4, padding: 20 }}
                >
                  <Row style={{ margin: 8, borderRadius: 4 }}>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <h4 style={{ color: 'black' }}>Order Details</h4>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span style={{ color: 'GrayText' }}>Edit</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Number of boxes:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span style={{ color: 'GrayText' }}>X,XXX</span>
                      </Col>
                    </Row>
                    <Row>
                      <p className="gray-text">
                        (Each box contains two single-dose nasal sprays [4mg/0.1
                        mL])
                      </p>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Subtotal:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <p className="gray-text">$XX.XX</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">shipping:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <p className="gray-text">included</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        color: '#E83A78',
                        fontWeight: 'bold',
                      }}
                    >
                      <Col>
                        <p>Total:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <p>$XX.XX</p>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </Row>

              <Row className="mt-4">
                <div
                  style={{ background: 'white', borderRadius: 4, padding: 20 }}
                >
                  <Row style={{ margin: 8, borderRadius: 4 }}>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <h4 style={{ color: 'black' }}>Shipping address:</h4>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Name:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Business name:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Street address:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Unit suit, etc.:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">City:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Province:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Postal code:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </Row>

              <Row className="mt-4">
                <div
                  style={{ background: 'white', borderRadius: 4, padding: 20 }}
                >
                  <Row style={{ margin: 8, borderRadius: 4 }}>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <h4 style={{ color: 'black' }}>Contact information:</h4>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Phone number:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Col>
                        <p className="gray-text">Email address:</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          style={{ color: 'GrayText' }}
                        >{`<<Display previous entry>>`}</span>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default OrderPayment;
