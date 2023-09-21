import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import Header from '../components/header/Header';
import narcanIcon from '../components/icons/Narcan_Icon_RGB.png'
import MapOfCandaIcon from '../components/icons/MapOfCandaIcon';
import boxImage from '../components/icons/Narcan-Box-Image.png'

const OrderDetails = ()=>{
    return(
        // <div>

        <Container style={{marginTop:50, margin:20}}>
            <Header/>
            <Row style={{marginTop:'10vw', display:'flex',justifyContent:'center'}}>

            <img src={narcanIcon} alt='icon' height={200}/>
            
            </Row>
            <Stepper
            steps={[{ label: 'Order details' }, { label: 'Shipping details' }, { label: 'Summary' }, { label: 'Payment' }]}
            activeStep={0}
            // styleConfig={{
            //   activeBgColor: '#2b7cff',
            //   activeTextColor: '#fff',
            //   inactiveBgColor: '#fff',
            //   inactiveTextColor: '#2b7cff',
            //   completedBgColor: '#fff',
            //   completedTextColor: '#2b7cff',
            //   size: '3em'
            // }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />
          <Row style={{display:'flex',justifyContent:'center'}}>

         <MapOfCandaIcon height='350'/>
          </Row>
          <p style={{textAlign:'center'}}>{`Residents of <<insert name of selected province>>`}</p>
           <p style={{textAlign:'center'}}>are eligible to order individual boxes of NARCAN® (naloxone HCI) Nasal Spray 4 mg</p>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
             
         <Col xl={4}>
            <img src={boxImage} height={200} alt='box'/>
            </Col>
            <Col sm={8}>
                <p>
                    {"Price per box (contains two single-dose nasal sprayers [4 mg/0.1 mL]): <<show price for province>>"}
                </p>
                <hr/>
                    <p>Enter your Details:</p>
                <div>
                    <p>Number of boxes:</p>


                </div>

            </Col>

        </div>
           
        
      
        </Container>
        // </div>
    )

}
export default OrderDetails