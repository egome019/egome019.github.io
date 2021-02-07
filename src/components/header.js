import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header() {
	return (
		<>
			<Navbar
				bg="dark"
				variant="dark"
				fixed="sticky"
				collapseOnSelect
				expand="lg"
			>
				<Container>
					<Navbar.Brand style={{ color: "#ffebcd" }} href="#about">
						Erik Gomez
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<Nav.Link style={{ color: "#ffebcd" }} href="#about">
								About
							</Nav.Link>
							<Nav.Link style={{ color: "#ffebcd" }} href="#portfolio">
								Portfolio
							</Nav.Link>
							<Nav.Link style={{ color: "#ffebcd" }} href="#contact">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
