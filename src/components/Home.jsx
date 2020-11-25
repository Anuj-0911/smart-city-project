import React, { Component } from "react";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import back from '../videos/city life.mp4';
export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
    }
  }
  
  componentDidMount()
  {
    fetch('https://smart-city-project-155f4.firebaseio.com/jaipur.json').then(res => res.json())
    .then(json=>{
        this.setState({
            items : json.data,
        })
    });
  
  }

  render() {
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
                    <FormControl type="text" placeholder="Your Area" style={{width:"40%",marginTop:"2rem",marginBottom:"2rem",marginLeft:"29%"}} />
                    <Button variant="success">Go!</Button>
                </Form>
          </div>
      </div>
    );
  }
}