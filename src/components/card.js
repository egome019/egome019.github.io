import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.css";

export default function PortCard(props) {
	return (
		<Card className="bg-dark border card-border m-3" index={props.index}>
			<Card.Img variant="top" src={props.vid} />
			<Card.Header>{props.title}</Card.Header>
			<Card.Body>
				<Card.Text className="card">{props.text}</Card.Text>
				<Card.Subtitle className="m-1">Task</Card.Subtitle>
				<Card.Text className="card">{props.task}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button href={props.live} target="_blank" variant="outline-*">
					Live
				</Button>
				<Button href={props.repo} target="_blank" variant="outline-*">
					Repo
				</Button>
			</Card.Footer>
		</Card>
	);
}
