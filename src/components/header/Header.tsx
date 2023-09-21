import React from 'react'
import logo from '../icons/OrderNarcan-logo-final.png'
import { Col, Row } from 'react-bootstrap'

const Header = ()=>{
    return (
        <div style={{backgroundColor:'white',position:'fixed',top:'0',width:'100%'}}>
            <p style={{display:'flex',justifyContent:'center', fontSize:'10px'}}>{"<<Branch 1: Unscheduled provinces (BC, AB, SK, MB)>> <<Page 1.1.1: Order details, acknowledge requirements>>"}</p>
            <div style={{display:'flex', justifyContent:'space-between',padding:8}}>
               
            <img src={logo} alt='logo' style={{height:'25px',margin:10}}></img>
               
            <select className="form-select" aria-label="Default select example" style={{border:'none',width:'50px'}}>
            <option value="1" selected>ENG</option>
            <option value="2">Spanish</option>
            <option value="3">Arabic</option>
            </select>
              
            </div>
 
            

        </div>
    )

}
export default Header