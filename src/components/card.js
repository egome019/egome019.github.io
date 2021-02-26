import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
// import { projects } from "../components/projects";
// import { Col } from "react-bootstrap";

export default function PortCard(props) {
	return (
		<Card className="bg-dark border border-white" index={props.index}>
			<Card.Img variant="top" src={props.vid} className="card" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
			</Card.Body>
		</Card>
	);
}
