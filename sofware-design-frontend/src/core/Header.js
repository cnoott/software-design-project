import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    //define isLoggedIn logic here
    //const isLoggedIn = isAuthenticated(); 

    return (
	<div>
	    <Navbar bg="light" expand="lg">
		<Container>
		    <Navbar.Brand href="#home">Software Design Project</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			    <Nav.Link href="/login">Login</Nav.Link>
			    <Nav.Link href="/client-registration">Registration</Nav.Link>           
			    <Nav.Link href="/client-profile-managment">Profile Managment</Nav.Link>
			    <NavDropdown title="Fuel Info" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Fuel Quote</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Fuel Quote History</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
			    </NavDropdown>
			</Nav>
		    </Navbar.Collapse>
		</Container>
	    </Navbar>
	</div>
    );
};

export default Header;
