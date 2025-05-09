import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Display from "./Display.jsx";

export default function App() {
	const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@example.com",
		phoneNumber: "123-456-789",
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quibusdam.",
	});

	const [education, setEducation] = useState([
		{
      key: 0,
			school: "Lorem University",
			title: "Bachelor's in Lorem",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus ullam distinctio. Ipsam, eum temporibus vitae dolorum praesentium necessitatibus officiis",
			startDate: "",
			endDate: "",
		},
	]);

	const [experience, setExperience] = useState([
		{
			company: "Lorem Company",
			title: "Lorem Assistant",
			startDate: "",
			endDate: "",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus quam, sed voluptatibus debitis nisi blanditiis qui beatae ipsum libero.",
		},
	]);

	const [skills, setSkills] = useState([
		{ id: 0, value: "HTML" },
		{ id: 1, value: "CSS" },
		{ id: 2, value: "JavaScript" },
	]);

	return (
		<>
			<div className="input-wrapper">
				<Personal person={person} setPerson={setPerson} />
				<Education education={education} setEducation={setEducation} />
				<Experience
					experience={experience}
					setExperience={setExperience}
				/>
				<Skills skills={skills} setSkills={setSkills} />
			</div>
			<Display
				person={person}
				education={education}
				experience={experience}
				skills={skills}
			/>
		</>
	);
}
