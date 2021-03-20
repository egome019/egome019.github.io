import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.css";

export default function PortCard(props) {
	return (
		<Card className="bg-dark border card-border m-3" index={props.index}>
			<Card.Img variant="top" src={props.vid} />
			<Card.Body>
				<Card.Title className="card">{props.title}</Card.Title>
				<Card.Text className="card">{props.text}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="outline-*">Live</Button>
				<Button variant="outline-*">Repo</Button>
			</Card.Footer>
		</Card>
	);
}
