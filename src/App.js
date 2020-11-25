import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Smart Utils</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#link">Overview</Nav.Link> */}
            <NavDropdown title="Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electricity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Water</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Garbage Collection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">

        <h1>Smart Utils Jaipur
        </h1>
        <Form inline>
          <FormControl type="text" placeholder="Your Area" className="mr-sm-2" />
          <Button variant="outline-success">Go!</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
