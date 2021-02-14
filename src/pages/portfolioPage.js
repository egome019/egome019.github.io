import React from "react";
import PortCard from "../components/card";
import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {
	return (
		<Container className="bg-dark mt-3" style={{ height: "500px" }}>
			<Row
				className="d-flex flex-row justify-content-around"
				style={{ height: "50%" }}
			>
				<PortCard />
			</Row>
		</Container>
	);
}
