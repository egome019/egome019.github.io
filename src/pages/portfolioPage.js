import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import PortCard from "../components/card";
import Container from "react-bootstrap/Container";

export default function Portfolio() {
	return (
		<Container className="bg-dark mt-3" style={{ height: "500px" }}>
			<CardGroup>
				<PortCard />
			</CardGroup>
		</Container>
	);
}
