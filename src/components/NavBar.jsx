//import Navbar from './components/Navbar.jsx';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Help Finding Public WiFi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">WiFi Finder</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
