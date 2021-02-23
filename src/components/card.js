import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import { projects } from "../components/projects";
import { Col } from "react-bootstrap";

export default function PortCard() {
	const renderCard = (card, index) => {
		return (
			<Col sm={4} className="card-column">
				<Card className="bg-dark border border-white w-50" index={index}>
					<Card.Img variant="top" src={card.vid} className="card" />
					<Card.Body>
						<Card.Title>{card.title}</Card.Title>
						<Card.Text>{card.text}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	};

	return <>{projects.map(renderCard)}</>;
}
