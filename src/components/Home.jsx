import React, { Component } from "react";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import back from '../videos/city life.mp4';

function Routetoarea()
{
  const dat=document.getElementById('area1').value;
  window.location.href='/info/'+String(dat);  
}

export default function Home() {
    return (
      <div>
        <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
          opacity: "1",
        }}
      >
        <source src={back} type="video/mp4" />
      </video>
        <div style={{textAlign:"center"}}>
                <h1 style={{color:"white",marginTop:"10%",fontSize:"5rem"}}>Smart City Jaipur</h1>
                <Form style={{textAlign:"center"}}>
                    <FormControl type="text" id="area1" placeholder="Your Area" required style={{width:"40%",marginTop:"2rem",marginBottom:"2rem",marginLeft:"29%"}} />
                    <Button variant="success" onClick={ Routetoarea }
                      >Go!</Button>
                </Form>
          </div>
      </div>
    );
}