import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import "./contactPage.css";

export default function ContactPage() {
	return (
		<div id="contact">
			<IconContext.Provider
				value={{ style: { fontSize: "75px", color: "rgb(255, 235, 205)" } }}
			>
				<Container className="bg-dark mt-3 contactPage">
					<Row>
						<h1 className="contact-header">Contact</h1>
					</Row>
					<Row>
						<Col sm>
							<a
								href="https://www.linkedin.com/in/erik-gomez-61ba22b0/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedinIn className="icons-query" />
							</a>
						</Col>
						<Col sm>
							<a
								href="https://github.com/egome019"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub className="icons-query" />
							</a>
						</Col>
						<Col sm>
							<a
								href="mailto:egomezfax19@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<FaEnvelope className="icons-query" />
							</a>
						</Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
