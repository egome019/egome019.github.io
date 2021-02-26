import React from "react";
import PortCard from "../components/card";
import { Container, CardGroup } from "react-bootstrap";
import { projects } from "../components/projects";

export default function Portfolio() {
	const postRowOne = [...projects].slice(0, 3);
	const postRowTwo = [...projects].slice(3, 6);
	return (
		<Container className="bg-dark mt-3" style={{ overflow: "auto" }}>
			<CardGroup>
				{postRowOne.map((data, index) => (
					<PortCard
						key={index}
						vid={data.vid}
						title={data.title}
						text={data.text}
					/>
				))}
			</CardGroup>
			<CardGroup>
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
	);
}
