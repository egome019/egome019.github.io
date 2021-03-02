import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./contactPage.css";

export default function ContactPage() {
	return (
		<div id="contact">
			<IconContext.Provider
				value={{ style: { fontSize: "100px", color: "rgb(255, 235, 205)" } }}
			>
				<Container className="bg-dark mt-3 contactPage">
					<Row>
						<h1>Contact</h1>
					</Row>
					<Row>
						<Col sm>
							<a
								href="https://www.linkedin.com/in/erik-gomez-61ba22b0/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</Col>
						<Col sm>
							<a
								href="https://twitter.com/egomez_8_"
								target="_blank"
								rel="noreferrer"
							>
								<FaTwitter />
							</a>
						</Col>
						<Col sm>
							<a
								href="https://www.instagram.com/gomeze019/"
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
						</Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
