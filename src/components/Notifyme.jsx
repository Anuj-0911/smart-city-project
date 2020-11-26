import React, { Component } from "react";
import {Carousel, Container,Card,Row,Col,Form,Button,FormControl} from 'react-bootstrap';
import axios from 'axios';


function Routetoarea()
{
  var https=require('https');
  const phone=document.getElementById('area2').value;
  const loc=document.getElementById('area1').value;
  const res1 = https.get(
    `https://hackshetra-smart-city.el.r.appspot.com/message/${phone}/place/${loc}`
  );
   
}

export default class Notifyme extends Component {
  render() {
    return (
      <div>
        <h1>Enter your details and we will send you notifications....</h1>
        <div style={{textAlign:"center"}}>
                <h1>Personal Details</h1>
                <Form style={{textAlign:"center"}}>
                    <FormControl type="number" id="area2" placeholder="Your number" required style={{width:"40%",marginTop:"2rem",marginBottom:"2rem",marginLeft:"29%"}} />
                    <FormControl type="text" id="area1" placeholder="Your Area" required style={{width:"40%",marginTop:"2rem",marginBottom:"2rem",marginLeft:"29%"}} />
                    <Button variant="success" onClick={ Routetoarea }
                      >Go!</Button>
                </Form>
          </div>
      </div>
    );
  }
}