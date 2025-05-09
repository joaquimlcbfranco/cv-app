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

	const handleNewSection = () => {
		const newKey = education.reduce((prevObj, biggest) => {
			if (prevObj.key > biggest) return prevObj.key
			return biggest.key
		}, 0)
		console.log(newKey);
		setEducation([
			...education,
			{ key: newKey + 1, school: "", title: "", startDate: "", endDate: "" },
		]);
	};

	console.log(education);

	return (
		<>
			<section className="education">
				<div className="education-inputs">
					<h2>Education</h2>
					{education.map((obj) => {
						return (
							<>
								<Input
									label="School"
									type="text"
									id="school"
									value={obj.school}
									onType={handleChange}
								></Input>
								<Input
									label="Title"
									type="text"
									id="title"
									value={obj.title}
									onType={handleChange}
								></Input>
								<Input
									label="Start Date"
									type="date"
									id="startDate"
									value={obj.startDate}
									onType={handleChange}
								></Input>
								<Input
									label="End Date"
									type="date"
									id="endDate"
									value={obj.endDate}
									onType={handleChange}
								></Input>
								<Input
									label="Description"
									type="text"
									id="description"
									value={obj.description}
									onType={handleChange}
								></Input>
							</>
						);
					})}
					<button onClick={handleNewSection}>Add section</button>
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
