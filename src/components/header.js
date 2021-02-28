import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./header.css";

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
					<Navbar.Brand className="headerStyle" href="#about">
						Erik Gomez
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<Nav.Link className="headerStyle" href="#about">
								About
							</Nav.Link>
							<Nav.Link className="headerStyle" href="#portfolio">
								Portfolio
							</Nav.Link>
							<Nav.Link className="headerStyle" href="#contact">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
