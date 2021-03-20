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
import { DiMongodb, DiHeroku, DiMysql } from "react-icons/di";
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
						<Col sm>
							<Card className="m-3">
								<Card.Body>
									<Card.Title>Languages</Card.Title>
									<Card.Text className="logo-content">
										<FaHtml5 className="iconSize" /> HTML 5
									</Card.Text>
									<Card.Text className="logo-content">
										<FaCss3Alt className="iconSize" /> CSS 3
									</Card.Text>
									<Card.Text className="logo-content">
										<FaJsSquare className="iconSize" /> JavaScript
									</Card.Text>
									<Card.Text className="logo-content">
										<FaReact className="iconSize" /> React JS
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col sm>
							<Card className="m-3">
								<Card.Body>
									<Card.Title>Back End</Card.Title>
									<Card.Text className="logo-content">
										<FaNode className="iconSize" /> NodeJS
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className="m-3">
								<Card.Body>
									<Card.Title>Database</Card.Title>
									<Card.Text className="logo-content">
										<DiMongodb className="iconSize" /> Mongo DB
									</Card.Text>
									<Card.Text className="logo-content">
										<DiMysql className="iconSize" /> MySQL
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col sm>
							<Card className="m-3">
								<Card.Body>
									<Card.Title>Hosting Platforms</Card.Title>
									<Card.Text className="logo-content">
										<DiHeroku className="iconSize" /> Heroku
									</Card.Text>
									<Card.Text className="logo-content">
										<FaGithub className="iconSize" /> Github
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className="m-3">
								<Card.Body>
									<Card.Title>Version Control</Card.Title>
									<Card.Text className="logo-content">
										<FaGitAlt className="iconSize" /> Git
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
