import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./aboutPage.css";

export default function AboutPage() {
	return (
		<div id="about">
			<Container className="bg-dark mt-3 content">
				<Col>
					<h1>Hello World!</h1>
					<p>
						My name is Erik Gomez and I am a budding web developer. I am
						currently in Los Angeles, California where I was born and raised. I
						got my Bachelors from the University of California, Riverside and
						received the Full Stack Web Development Certification from the
						University of California, Los Angeles. If you have any inquires feel
						free to message me at any of my socials.
					</p>
				</Col>
			</Container>
		</div>
	);
}
