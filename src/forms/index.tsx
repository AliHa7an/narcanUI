
import React, { Component ,useState} from 'react';

import ContactForm from './ContactForm';
import OrderDetails from './OrderDetails';
import OrderSummary from './OrderSummary';
import OrderPayment from './OrderPayment';

const Forms=()=>{

const [initState, setInitState] = useState({
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
    step : 1
  })
 const  nextStep = () => {
    const { step } = initState;
    setInitState({
        ...initState,
      step: step + 1
    })
  }

  const prevStep = () => {
    const { step } = initState;
    setInitState({
        ...initState,
      step: step - 1
    })
  }

  
    const {
      step,
      
    } = initState;
    
    switch(step) {
      case 0: 
        return (
          <OrderDetails 
            nextStep={nextStep}
           
        
          />
        )
      case 1:
        return (
          <ContactForm 
            nextStep={nextStep}
          />
        )
        case 2:
            return (
              <OrderSummary 
                nextStep={nextStep}
              />
            )
      case 3:
        return (
          <OrderPayment   nextStep={nextStep}/>
        )
      default: return null
    }
  
}

export default Forms;
