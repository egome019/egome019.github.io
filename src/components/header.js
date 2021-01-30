import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home">Erik Gomez</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#portfolio">Portfolio</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
