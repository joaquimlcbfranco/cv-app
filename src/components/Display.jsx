import { useState } from "react";
import "../styles/display.css";
import { format } from "date-fns";

export default function Display({ person, education, experience, skills }) {
	return (
		<>
			<section className="display-wrapper">
				<div className="display-header">
					<h2>{person.firstName + " " + person.lastName}</h2>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s"
						alt="Plaholder profile picture"
					></img>
				</div>
				<div className="main-info">
					<div className="left-info">
						<div className="profile-info">
							{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s" alt="Plaholder profile picture"></img> */}
							<h3>Profile</h3>
							<div className="separator"></div>
							<p>{person.about}</p>
						</div>
						<div className="contact-info">
							<h3>Contacts</h3>
							<div className="separator"></div>
							<p>{person.phoneNumber}</p>
							<p>{person.email}</p>
						</div>
					</div>
					<div className="right-info">
						<div className="education-info">
							<h3>Education</h3>
							<div className="school-info">
								<h4>{education.school}</h4>-
								<p className="title">{education.title}</p>
							</div>
							<small>
								{education.startDate !== ""
									? format(experience.startDate, "dd/MM/yy")
									: ""}
								-
								{education.endDate !== ""
									? format(experience.endDate, "dd/MM/yy")
									: ""}
							</small>
							<p className="description">
								{education.description}
							</p>
						</div>
						<div className="experience-info">
							<h3>Experience</h3>
							<div className="company-info">
								<h4>{experience.company}</h4>-
								<p className="title">{experience.title}</p>
							</div>
							<small>
								{experience.startDate !== ""
									? format(experience.startDate, "dd/MM/yy")
									: ""}
								-
								{experience.endDate !== ""
									? format(experience.endDate, "dd/MM/yy")
									: ""}
							</small>
							<p className="description">
								{experience.description}
							</p>
						</div>
						<div className="skills-info">
							<h3>Skills</h3>
							<ul>
								{skills.map((skill) => {
									return (
										<li key={skill.id}>{skill.value}</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
