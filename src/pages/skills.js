import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaNode,
	FaGithub,
	FaGitAlt,
	FaReact,
} from "react-icons/fa";
import { DiMongodb, DiHeroku } from "react-icons/di";
import "./skillsPage.css";

export default function SkillsPage() {
	return (
		<div id="skills">
			<IconContext.Provider
				value={{ style: { fontSize: "100px", color: "rgb(255, 235, 205)" } }}
			>
				<Container className="bg-dark mt-3 skillsContainer">
					<div className="skillsHeader">
						<h1>Skills</h1>
					</div>
					<Row>
						<Col sm>
							<Row>
								<Card>
									<Card.Body>
										<Card.Title>Languages</Card.Title>
										<Card.Text>
											<FaHtml5 />
											<FaCss3Alt />
											<FaJsSquare />
											<FaReact />
										</Card.Text>
									</Card.Body>
								</Card>
							</Row>
						</Col>
						<Col sm>
							<Row>
								<Card>
									<Card.Body>
										<Card.Title>Back End</Card.Title>
										<Card.Text>
											<FaNode />
										</Card.Text>
									</Card.Body>
								</Card>
							</Row>
							<Row>
								<Card>
									<Card.Body>
										<Card.Title>Database</Card.Title>
										<Card.Text>
											<DiMongodb />
										</Card.Text>
									</Card.Body>
								</Card>
							</Row>
						</Col>
						<Col sm>
							<Row>
								<Card>
									<Card.Body>
										<Card.Title>Hosting Platforms</Card.Title>
										<Card.Text>
											<DiHeroku />
											<FaGithub />
										</Card.Text>
									</Card.Body>
								</Card>
							</Row>
							<Row>
								<Card>
									<Card.Body>
										<Card.Title>Version Control</Card.Title>
										<Card.Text>
											<FaGitAlt />
										</Card.Text>
									</Card.Body>
								</Card>
							</Row>
						</Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
