import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./aboutPage.css";

export default function AboutPage() {
	return (
		<Container className="bg-dark content">
			<Col>
				<Jumbotron fluid className="bg-dark mt-3">
					<h1>Hello World!</h1>
					<p>
						My name is Erik Gomez and I am a budding web developer. I am
						currently in Los Angeles, California where I was born and raised. I
						got my Bachelors from the University of California, Riverside and
						received the Full Stack Web Development Certification from the
						University of California, Los Angeles. If you have any inquires feel
						free to message me at any of my socials.
					</p>
				</Jumbotron>
			</Col>
		</Container>
	);
}
