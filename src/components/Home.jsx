import React, { Component } from "react";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
export default class Home extends Component {
  render() {
    return (
      <div className="aboutPage">
            <header className="App-header">
                <h1>Smart Utils Jaipur</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Your Area" className="mr-sm-2" />
                    <Button variant="outline-success">Go!</Button>
                </Form>
            </header>
      </div>
    );
  }
}