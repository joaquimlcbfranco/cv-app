import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import "../styles/display.css";

export default function Display(personal, education, experience) {
	return (
		<section className="display-wrapper">
			<div className="display-header">
				<h2>John Doe</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Maxime, quibusdam
				</p>
			</div>
			<div className="main-info">
				<div className="left-info">
					<div className="profile-info">
						<h3>Profile</h3>
						<span></span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Maxime, quibusdam.
						</p>
					</div>
					<div className="contact-info">
						<h3>Contacts</h3>
						<span></span>
						<p>123-456-789</p>
						<p>johndoe@example.com</p>
					</div>
				</div>
				<div className="right-info">
					<h3>Education</h3>
					<h3>Experience</h3>
				</div>
			</div>
		</section>
	);
}
