import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactPage.css";

export default function ContactPage() {
	return (
		<div id="contact">
			<Container className="bg-dark mt-3 contactPage">
				<Row>
					<h1>Contact</h1>
				</Row>
				<Row>
					<Col sm>sm=true></Col>
					<Col sm>sm=true></Col>
					<Col sm>sm=true></Col>
				</Row>
			</Container>
		</div>
	);
}
