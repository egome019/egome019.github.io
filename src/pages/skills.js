import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import "./skillsPage.css";

export default function SkillsPage() {
	return (
		<div id="skills">
			<IconContext.Provider
				value={{ style: { fontSize: "75px", color: "rgb(255, 235, 205)" } }}
			>
				<Container className="bg-dark mt-3 skillsContainer">
					<div className="skillsHeader">
						<h1>Skills</h1>
					</div>
					<Row>
						<Col></Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
