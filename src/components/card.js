import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";

// imported gifs of projects
import README from "../assets/READMEvid.gif";
import empTracker from "../assets/employeeTrackerNode.gif";
import daBurger from "../assets/daburger.gif";
import budgetTracker from "../assets/budgetTracker.gif";
import workoutTracker from "../assets/workoutTracker.gif";
import empReact from "../assets/employeeReact.gif";

export default function PortCard() {
	return (
		<>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={README} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={empTracker} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={daBurger} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={budgetTracker} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={workoutTracker} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
			<Card className="bg-dark border border-white cardSize">
				<Card.Img variant="top" src={empReact} />
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
