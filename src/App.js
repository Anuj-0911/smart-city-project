import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import Home from "./components/Home";
import About from "./components/About";
import Electricity from "./components/Electricity";
import Water from "./components/Water";
import Garbage from "./components/Garbage";
import Gas from "./components/Gas";
import history from './history.js';
import Info from './components/Info';
import SplashScreen from "./components/SplashScreen";
function App() {
  const [splash, setSplash] = useState(true);
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <SplashScreen />;
  return (
    <div className="App">
      <Router history={history}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Smart Utils</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#link">Overview</Nav.Link> */}
            <NavDropdown title="Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="/electricity">Electricity</NavDropdown.Item>
              <NavDropdown.Item href="/water">Water</NavDropdown.Item>
              <NavDropdown.Item href="/gas">Gas</NavDropdown.Item>
              <NavDropdown.Item href="/garbage">Garbage Collection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/electricity" component={Electricity} />
              <Route exact path="/water" component={Water} />
              <Route exact path="/garbage" component={Garbage} />
              <Route exact path="/gas" component={Gas} />
              <Route exact path="/info/:area" component={Info}/>
            </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
