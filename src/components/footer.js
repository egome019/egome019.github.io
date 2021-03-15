import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";

export default function Footer() {
	return (
		<>
			<Navbar
				className="mt-3"
				bg="dark"
				variant="dark"
				fixed="sticky"
				collapseOnSelect
				expand="lg"
			>
				<Navbar.Text className="footerStyle">Erik Gomez</Navbar.Text>
			</Navbar>
		</>
	);
}
