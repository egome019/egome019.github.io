import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";

export default function SkillsPage() {
	return (
		<div id="skills">
			<IconContext.Provider
				value={{ style: { fontSize: "75px", color: "rgb(255, 235, 205)" } }}
			>
				<Container>
					<Row>
						<Col></Col>
					</Row>
				</Container>
			</IconContext.Provider>
		</div>
	);
}
