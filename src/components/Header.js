import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar style={{background:'#2BC5B4' , color:'white'}} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"  style={{color:'white'}} >Translator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"  style={{color:'white'}} ></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;