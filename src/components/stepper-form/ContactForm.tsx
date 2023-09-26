import React, { useEffect } from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
  FormText,
  FormSelect,
} from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import { useForm } from 'react-hook-form';
import narcanIcon from '../assets/images/narcan_icon.png';
import Header from '../layout/Header';

interface ContactFormProps {
  nextStep: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ nextStep }) => {
  const initState = {
    name: '',
    businessName: '',
    streetAddress: '',
    city: '',
    phone: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false,
    province: '',
    postalCode: '',
  };

  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values: any) => {
    console.log('Values:::', values);
    nextStep();
  };

  const onError = (error: any) => {
    console.log('ERROR:::', error);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: initialValues,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log('>>', value, name, type);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <Container className="form-container">
        <Row
          style={{
            marginTop: '1vw',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Col className="d-flex justify-content-center">
            <img src={narcanIcon} alt="icon" height={200} />
          </Col> */}
        </Row>
        <Stepper
          steps={[
            { label: 'Order details' },
            { label: 'Shipping details' },
            { label: 'Summary' },
            { label: 'Payment' },
          ]}
          activeStep={1}
          className="stepper"
          stepClassName="stepper__step"
        />
        <Row className="justify-content-between">
          <Col xs={6}>
            <h3>Enter your contact information:</h3>
            <Form
              id="contact-details-form"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <Form.Group className="form-group" controlId="formBasicEmail">
                <FormLabel style={{ margin: 4 }}>Phone number:</FormLabel>
                <FormControl
                  className="form-input"
                  type="phone"
                  placeholder="1-(xxx)-xxx-xxx"
                  {...register('phone', {
                    required: 'Phone Number is required',
                  })}
                />
                {errors.phone && (
                  <FormText className="text-danger">
                    {errors.phone.message}
                  </FormText>
                )}
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="form-group" controlId="formBasicEmail">
                    <FormLabel>Email address:</FormLabel>
                    <FormControl
                      className="form-input"
                      type="email"
                      placeholder="loremipsum@mail.com"
                      {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && (
                      <FormText className="text-danger">
                        {errors.email.message}
                      </FormText>
                    )}
                  </Form.Group>
                </Col>
                <Col className="ml-3">
                  <Form.Group
                    className="form-group"
                    controlId="formBasicConfirmEmail"
                  >
                    <FormLabel>Confirm email address:</FormLabel>
                    <FormControl
                      className="form-input"
                      type="email"
                      placeholder="loremipsum@mail.com"
                      {...register('confirmEmail', {
                        required: 'Email confirmation is required',
                      })}
                    />
                    {errors.confirmEmail && (
                      <FormText className="text-danger">
                        {errors.confirmEmail.message}
                      </FormText>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <h3>Enter your billing address:</h3>
                <Form.Group className="form-group" controlId="name">
                  <FormLabel>Name:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <FormText className="text-danger">
                      {errors.name.message}
                    </FormText>
                  )}
                </Form.Group>
                <Form.Group className="form-group" controlId="businessName">
                  <FormLabel>Business name:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('businessName', {
                      required: 'Business name is required',
                    })}
                  />
                  {errors.businessName && (
                    <FormText className="text-danger">
                      {errors.businessName.message}
                    </FormText>
                  )}
                </Form.Group>
                <Form.Group className="form-group" controlId="streetAddress">
                  <FormLabel>Street address:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('streetAddress', {
                      required: 'Street address is required',
                    })}
                  />
                  {errors.streetAddress && (
                    <FormText className="text-danger">
                      {errors.streetAddress.message}
                    </FormText>
                  )}
                </Form.Group>
                <Row>
                  <Row>
                    <Col>
                      <Form.Group className="form-group" controlId="unit">
                        <FormLabel>Unit, Suite etc. (optional):</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="Lorem Ipsum"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="ml-3 city-margin-top">
                      <Form.Group className="form-group" controlId="city">
                        <FormLabel>City:</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="Lorem Ipsum"
                          {...register('city', {
                            required: 'City is required',
                          })}
                        />
                        {errors.city && (
                          <FormText className="text-danger">
                            {errors.city.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="form-group" controlId="province">
                        <FormLabel>Province:</FormLabel>
                        <FormSelect
                          className="form-input"
                          aria-label="Default select example"
                          placeholder="Select Province"
                          {...register('province', {
                            required: 'Province is required',
                          })}
                        >
                          <option selected value="alberta">
                            Alberta
                          </option>
                          <option value="alberta">Alberta</option>
                          <option value="alberta">Alberta</option>
                        </FormSelect>
                        {errors.province && (
                          <FormText className="text-danger">
                            {errors.province.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col className="ml-3">
                      <Form.Group className="form-group" controlId="postalCode">
                        <FormLabel>Postal code:</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="X9X9X9"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
              </Row>
              <Row>
                <h3>Enter your shipping address</h3>
                <Form.Group
                  className="form-group"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    id="checkbox-same-billing"
                    label="Same as billing address"
                  />
                </Form.Group>
                <Form.Group className="form-group" controlId="name">
                  <FormLabel>Name:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('name', {
                      required: 'Name is required',
                    })}
                  />
                  {errors.name && (
                    <FormText className="text-danger">
                      {errors.name.message}
                    </FormText>
                  )}
                </Form.Group>
                <Form.Group className="form-group" controlId="businessName">
                  <FormLabel>Business name:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('businessName', {
                      required: 'Business name is required',
                    })}
                  />
                  {errors.businessName && (
                    <FormText className="text-danger">
                      {errors.businessName.message}
                    </FormText>
                  )}
                </Form.Group>
                <Form.Group className="form-group" controlId="streetAddress">
                  <FormLabel>Street address:</FormLabel>
                  <FormControl
                    className="form-input"
                    type="text"
                    placeholder="Lorem Ipsum"
                    {...register('streetAddress', {
                      required: 'Street address is required',
                    })}
                  />
                  {errors.streetAddress && (
                    <FormText className="text-danger">
                      {errors.streetAddress.message}
                    </FormText>
                  )}
                </Form.Group>
                <Row>
                  <Row>
                    <Col>
                      <Form.Group className="form-group" controlId="unit">
                        <FormLabel>Unit, Suite etc. (optional):</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="Lorem Ipsum"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="ml-3 city-margin-top">
                      <Form.Group className="form-group" controlId="city">
                        <FormLabel>City:</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="Lorem Ipsum"
                          {...register('city', {
                            required: 'City is required',
                          })}
                        />
                        {errors.city && (
                          <FormText className="text-danger">
                            {errors.city.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="form-group" controlId="province">
                        <FormLabel>Province:</FormLabel>
                        <FormSelect
                          className="form-input"
                          aria-label="Default select example"
                          placeholder="Select Province"
                          {...register('province', {
                            required: 'Province is required',
                          })}
                        >
                          <option selected value="alberta">
                            Alberta
                          </option>
                          <option value="alberta">Alberta</option>
                          <option value="alberta">Alberta</option>
                        </FormSelect>
                        {errors.province && (
                          <FormText className="text-danger">
                            {errors.province.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col className="ml-3">
                      <Form.Group className="form-group" controlId="postalCode">
                        <FormLabel>Postal code:</FormLabel>
                        <FormControl
                          className="form-input"
                          type="text"
                          placeholder="X9X9X9"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
              </Row>
              {/* <Button
                style={{
                  background: '#CE0058',
                  borderRadius: '20px',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  float: 'right',
                }}
                type="submit"
              >
                Review Details
              </Button> */}
            </Form>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-end"
            style={{ height: 'fit-content' }}
          >
            <div style={{ background: 'white', borderRadius: 4, padding: 15 }}>
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
                  <Col className="d-flex justify-content-end ml-3">
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
                  <Col className="d-flex justify-content-center">
                    <p className="gray-text">$XX.XX</p>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <Button
          form="contact-details-form"
          style={{
            background: '#CE0058',
            borderRadius: '20px',
            color: 'white',
            padding: '10px',
            border: 'none',
            float: 'right',
          }}
          type="submit"
        >
          Review Details
        </Button>
      </Container>
    </div>
  );
};

export default ContactForm;
