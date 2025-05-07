import "../styles/education.css";

export default function Education({ education, setEducation }) {
	const handleChange = (e, id) => {
		if (id === "school") {
			setEducation({ ...education, school: e.target.value });
		} else if (id === "title") {
			setEducation({ ...education, title: e.target.value });
		} else if (id === "startDate") {
			setEducation({ ...education, startDate: e.target.value });
		} else if (id === "endDate") {
			setEducation({ ...education, endDate: e.target.value });
		}
	};

	return (
		<>
			<section className="education">
				<div className="education-inputs">
					<h2>Education</h2>
					<Input
						label="School"
						type="text"
						id="school"
						value={education.school}
						onType={handleChange}
					></Input>
					<Input
						label="Title"
						type="text"
						id="title"
						value={education.title}
						onType={handleChange}
					></Input>
					<Input
						label="Start Date"
						type="date"
						id="startDate"
						value={education.startDate}
						onType={handleChange}
					></Input>
					<Input
						label="End Date"
						type="date"
						id="endDate"
						value={education.endDate}
						onType={handleChange}
					></Input>
					<Input
						label="Description"
						type="text"
						id="description"
						value={education.description}
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
