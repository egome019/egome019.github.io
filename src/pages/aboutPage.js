import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
					<br />
					<Button
						href="https://docs.google.com/document/d/1ztf9-M20HF-9xEMjs0bmzlAFcJc5sCZ6_JJAzPtPKf4/edit?usp=sharing"
						target="_blank"
						variant="outline-dark"
						className="m-3 customBtn"
					>
						Resume
					</Button>
				</Col>
			</Container>
		</div>
	);
}
