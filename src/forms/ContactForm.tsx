// https://github.com/parthprajapati32/reacthookform/blob/84f1e1ce0210044313d8cd5123c7dc798724d140/src/components/BootstrapForm/index.js
import * as React from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col
  // InputGroup,
  // FormControl
} from "react-bootstrap";
import { Stepper } from 'react-form-stepper';
import narcanIcon from '../components/icons/Narcan_Icon_RGB.png'

import { useForm } from "react-hook-form";
import Header from "../components/header/Header";

const ContactForm = ({nextStep}:any) => {
  const initState = {
    name:'',
    businessName:'',
    streetAddress:'',
    city:'',
    phone:'',
    email: "",
    confirmEmail:'',
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
    province:'',
    postalCode:''

  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values:any) => {
    console.log("Values:::", values);
    nextStep()
  };

  const onError = (error:any) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues
  });


  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(">>", value, name, type);
      // {1: '1', 2: '9'} '2' 'change'
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>

       <Header/>
    <Container className="form-container" >
            <Row style={{marginTop:'1vw', display:'flex',justifyContent:'center'}}>
              <Col className="d-flex justify-content-center">
            <img src={narcanIcon} alt='icon' height={200}/>
              </Col>

            
            </Row>
      <Stepper
            steps={[{ label: 'Order details' }, { label: 'Shipping details' }, { label: 'Summary' }, { label: 'Payment' }]}
            activeStep={1}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />
          <Row className="justify-content-between">
            <Col xs={6}>
            <h3>Enter your contact information:</h3>
          
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label style={{margin:4}}>Phone number:</Form.Label>
              <Form.Control
              className="form-input"
              
                type="phone"
                placeholder="1-(xxx)-xxx-xxx"
                {...register("phone", { required: "Phone Number is required" })}
              />
              {errors.phone && (
                <Form.Text className="text-danger">
                  {errors.phone.message}
                </Form.Text>
              )}
            </Form.Group>
            <Row>
                <Col>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
              className="form-input"
                type="email"
                placeholder="loremipsum@mail.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
                <Col>
            <Form.Group className="form-group" controlId="formBasicConfirmEmail">
              <Form.Label>Confirm email address:</Form.Label>
              <Form.Control
              className="form-input"
                type="email"
                placeholder="loremipsum@mail.com"
                {...register("confirmEmail", { required: "Email confirmation is required" })}
              />
              {errors.confirmEmail && (
                <Form.Text className="text-danger">
                  {errors.confirmEmail.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
            </Row>

            <Row>
              <h3>Enter your billing address:</h3>

    
            <Form.Group className="form-group" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("name", {
                  required: "Name is required"
                })}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="form-group" controlId="businessName">
              <Form.Label>Business name:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("businessName", {
                  required: "Business name is required"
                })}
              />
              {errors.businessName && (
                <Form.Text className="text-danger">
                  {errors.businessName.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Form.Group className="form-group" controlId="streetAddress">
              <Form.Label>Street address:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("streetAddress", {
                  required: "Street address is required"
                })}
              />
              {errors.streetAddress && (
                <Form.Text className="text-danger">
                  {errors.streetAddress.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Row >
              <Row >

                <Col>
                <Form.Group className="form-group" controlId="unit">
              <Form.Label>Unit, Suite etc. (optional):</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                
              />
             
            </Form.Group>
                </Col>
                <Col>
                <Form.Group className="form-group" controlId="city">
              <Form.Label>City:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("city", {
                  required: "City is required"
                })}
              />
              {errors.city && (
                <Form.Text className="text-danger">
                  {errors.city.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="form-group" controlId="province">
              <Form.Label>Province:</Form.Label>
             
                <Form.Select className="form-input" aria-label="Default select example" placeholder="Select Province" 
                {...register("province", {
                  required: "Province is required"
                })}>
                      <option selected value="alberta">Alberta</option>
                      <option value="alberta">Alberta</option>
                      <option value="alberta">Alberta</option>
                </Form.Select>

              {errors.province && (
                <Form.Text className="text-danger">
                  {errors.province.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
                <Col>
                <Form.Group className="form-group" controlId="postalCode">
              <Form.Label>Postal code:</Form.Label>
              <Form.Control
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

            <Form.Group className="form-group" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Same as blling address"
               
              />
             
            </Form.Group>
    

    
            <Form.Group className="form-group" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("name", {
                  required: "Name is required"
                })}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="form-group" controlId="businessName">
              <Form.Label>Business name:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("businessName", {
                  required: "Business name is required"
                })}
              />
              {errors.businessName && (
                <Form.Text className="text-danger">
                  {errors.businessName.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Form.Group className="form-group" controlId="streetAddress">
              <Form.Label>Street address:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("streetAddress", {
                  required: "Street address is required"
                })}
              />
              {errors.streetAddress && (
                <Form.Text className="text-danger">
                  {errors.streetAddress.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Row>
              <Row>

                <Col>
                <Form.Group className="form-group" controlId="unit">
              <Form.Label>Unit, Suite etc. (optional):</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                
              />
             
            </Form.Group>
                </Col>
                <Col>
                <Form.Group className="form-group" controlId="city">
              <Form.Label>City:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="Lorem Ipsum"
                {...register("city", {
                  required: "City is required"
                })}
              />
              {errors.city && (
                <Form.Text className="text-danger">
                  {errors.city.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="form-group" controlId="province">
              <Form.Label>Province:</Form.Label>
             
                <Form.Select className="form-input" aria-label="Default select example" placeholder="Select Province" 
                {...register("province", {
                  required: "Province is required"
                })}>
                      <option selected value="alberta">Alberta</option>
                      <option value="alberta">Alberta</option>
                      <option value="alberta">Alberta</option>
                </Form.Select>
                 
              {errors.province && (
                <Form.Text className="text-danger">
                  {errors.province.message}
                </Form.Text>
              )}
            </Form.Group>
                </Col>
                <Col>
                <Form.Group className="form-group" controlId="postalCode">
              <Form.Label>Postal code:</Form.Label>
              <Form.Control
              className="form-input"
                type="text"
                placeholder="X9X9X9"
                
              />
             
            </Form.Group>
                </Col>
              </Row>
            </Row>
    

            <Button style={{background:'#CE0058',borderRadius:'20px',color:'white',padding:'10px',border:'none'}} type="submit">
              Review Details
            </Button>
            </Row>
    
          </Form>

            </Col>
            <Col xs={4} className="d-flex justify-content-end"  style={{height:'fit-content'}}>
            <div style={{background:'white', borderRadius:4}}>
              <Row style={{margin:8, borderRadius:4}}>
              <Row style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
                <Col>
              <h4 style={{color:'black'}}>Order Details</h4>
                </Col>
                <Col className="d-flex justify-content-end">
                <span style={{color:'GrayText'}}>Edit</span>
                </Col>
              </Row>
              <Row style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
                <Col>
              <p className="gray-text">Number of boxes:</p>
                </Col>
                <Col className="d-flex justify-content-end">
                <span style={{color:'GrayText'}}>X,XXX</span>
                </Col>
              </Row>
              <Row>
                <p className="gray-text">
                  (Each box contains two single-dose nasal sprays [4mg/0.1 mL])
                </p>
              </Row>
              <Row style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
                <Col>
                <p className="gray-text">
                  Subtotal:
                </p>
                </Col>
                <Col className="d-flex justify-content-center">
                <p className="gray-text">
                  $XX.XX
                </p>
                </Col>
              </Row>
                
              </Row>
             

            </div>
            </Col>
            

          
            

          </Row>
       
    </Container>
    </div>
  );
};

export default ContactForm;
