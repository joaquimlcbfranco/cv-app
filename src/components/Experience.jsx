import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
	const [experience, setExperience] = useState({
		company: "Lorem Company",
		title: "Lorem Assistant",
		startDate: "",
		endDate: "",
		location: "Lorem City",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus quam, sed voluptatibus debitis nisi blanditiis qui beatae ipsum libero.",
	});

	const handleChange = (e, id) => {
		if (id === "school") {
			setExperience({ ...experience, company: e.target.value });
		} else if (id === "title") {
			setExperience({ ...experience, title: e.target.value });
		} else if (id === "startDate") {
			setExperience({ ...experience, startDate: e.target.value });
		} else if (id === "endDate") {
			setExperience({ ...experience, endDate: e.target.value });
		} else if (id === "location") {
			setExperience({ ...experience, location: e.target.value });
		} else if (id === "description") {
			setExperience({ ...experience, description: e.target.value });
		}
	};

	return (
		<>
			<section className="experience">
				<div className="experience-inputs">
					<h2>Experience</h2>
					<Input
						label="School"
						type="text"
						id="school"
						value={experience.company}
						onType={handleChange}
					></Input>
					<Input
						label="Title"
						type="text"
						id="title"
						value={experience.title}
						onType={handleChange}
					></Input>
					<Input
						label="Start Date"
						type="date"
						id="startDate"
						value={experience.startDate}
						onType={handleChange}
					></Input>
					<Input
						label="End Date"
						type="date"
						id="endDate"
						value={experience.endDate}
						onType={handleChange}
					></Input>
					<Input
						label="Location"
						type="text"
						id="location"
						value={experience.location}
						onType={handleChange}
					></Input>
					<Input
						label="Description"
						type=""
						id="description"
						value={experience.description}
						onType={handleChange}
					></Input>
				</div>
			</section>
		</>
	);
}

function Input({ label, type, id, value, onType }) {
	if (id === "description") {
		return (
			<label>
				{label}
				<textarea
					type={type}
					value={value}
					onChange={(e) => onType(e, id)}
				></textarea>
			</label>
		);
	}
	return (
		<label>
			{label}
			<input
				type={type}
				value={value}
				onChange={(e) => onType(e, id)}
			></input>
		</label>
	);
}

export { Experience };
