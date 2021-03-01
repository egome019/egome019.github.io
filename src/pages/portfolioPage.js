import React from "react";
import PortCard from "../components/card";
import { Container, CardGroup } from "react-bootstrap";
import { projects } from "../components/projects";
import "./portPage.css";

export default function Portfolio() {
	const postRowOne = [...projects].slice(0, 3);
	const postRowTwo = [...projects].slice(3, 6);
	return (
		<div id="portfolio">
			<Container className="bg-dark mt-3 portContainer">
				<div className="header">
					<h1>Portfolio</h1>
				</div>
				<CardGroup className="m-3">
					{postRowOne.map((data, index) => (
						<PortCard
							key={index}
							vid={data.vid}
							title={data.title}
							text={data.text}
						/>
					))}
				</CardGroup>
				<CardGroup className="m-3">
					{postRowTwo.map((data, index) => (
						<PortCard
							key={index}
							vid={data.vid}
							title={data.title}
							text={data.text}
						/>
					))}
				</CardGroup>
			</Container>
		</div>
	);
}
