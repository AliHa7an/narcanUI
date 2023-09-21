import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import Header from '../components/header/Header';
import narcanIcon from '../components/icons/Narcan_Icon_RGB.png'
import MapOfCandaIcon from '../components/icons/MapOfCandaIcon';
import boxImage from '../components/icons/Narcan-Box-Image.png'
import Form from 'react-bootstrap/Form';

const OrderDetails = ({nextStep}:any)=>{
    return(
        <div>


            <Header/>
        <Container style={{marginTop:50,color:'white'}}>
            <Row style={{marginTop:'10vw', display:'flex',justifyContent:'center'}} >
                <Col xs={3} >
            <img src={narcanIcon} alt='icon' height={200}/>
                </Col>

            
            </Row>
            <Stepper
            steps={[{ label: 'Order details' }, { label: 'Shipping details' }, { label: 'Summary' }, { label: 'Payment' }]}
            activeStep={0}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />
          <Row style={{display:'flex',justifyContent:'center'}}>

         <MapOfCandaIcon height='350'/>
          </Row>
          <p style={{textAlign:'center', color:'white'}}>{`Residents of <<insert name of selected province>>`}</p>
           <p style={{textAlign:'center', color:'white'}}>are eligible to order individual boxes of NARCAN® (naloxone HCI) Nasal Spray 4 mg</p>
        <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
             
         <Col xs={4}>
            <img src={boxImage} style={{margin:'4vw',height:'20vw'}} alt='box'/>
            </Col>
            <Col xs={8}>
                <p style={{ color:'white'}}>
                    {"Price per box (contains two single-dose nasal sprayers [4 mg/0.1 mL]): <<show price for province>>"}
                </p>
                <hr/>
                    <p>Enter your Details:</p>
                <Row style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div>

                    <p>Number of boxes:</p>
                    <Form.Control style={{height:'20px', borderRadius:'5px',width:'15vw'}} />
                    <br/>

                    <sub>(Minimun order: 12 boxes)</sub>
                    </div>
                    <div>
                        <p>Subtotal:</p>
                        <p>$XX.XX</p>

                  </div>


                </Row>

            </Col>


        </div>
        <Row style={{display:'flex',justifyContent:'start',margin:'1vw'}}>
            <div>

            <p>Requred:</p>
            <Form.Check 
            type='checkbox'
            id='checkbox1'
            label={
                <span>
                    I agree to the
                    <a href='#' target="_blank" rel="noopener noreferrer" style={{color:'white',paddingLeft:'4px'}}>
                       Privacy Policy.
                    </a>
                </span>
            }
          />
           <Form.Check 
            type='checkbox'
            id='checkbox2'
            label={
                
                <span>
                     I acknowledge that I have read, understood and agree to the
                    <a href='#' target="_blank" rel="noopener noreferrer" style={{color:'white',paddingLeft:'4px'}}>
                    General Terms and Conditions of Sale.
                    </a>
                </span>
            }
          />
           <Form.Check 
            type='checkbox'
            id='checkbox1'
            label={
                <span>
                   I confirm that I am over 18 years of age and the product is intended for Canada.
                </span>
            }
          />
            </div>
        </Row>
        <Row style={{display:'flex',justifyContent:'start',margin:'1vw'}}>
            <div>

            <p>Optional:</p>
            <Form.Check 
            type='checkbox'
            id='checkbox1'
            label={
                <span>
                   I would like to receive NARCAN® Nasal Spray update emails from Emergent, and I understand that I can unsubscribe at any time.
                </span>
            }
          />
          
            </div>
        </Row>
        <div style={{display:'flex',justifyContent:'end',marginRight:'3vw'}}>

        <Button style={{background:'#CE0058',borderRadius:'15px',color:'white',padding:'8px', border:'none'}} onClick={nextStep}>Proceed to Billing and Shippind details</Button>
        </div>

           
        
      
        </Container>
        </div>
    )

}
export default OrderDetails