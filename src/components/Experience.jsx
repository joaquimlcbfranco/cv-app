import "../styles/experience.css";

export default function Experience({ experience, setExperience }) {
	const handleChange = (e, id) => {
		if (id === "company") {
			setExperience({ ...experience, company: e.target.value });
		} else if (id === "title") {
			setExperience({ ...experience, title: e.target.value });
		} else if (id === "startDate") {
			setExperience({ ...experience, startDate: e.target.value });
		} else if (id === "endDate") {
			setExperience({ ...experience, endDate: e.target.value });
		} else if (id === "description") {
			setExperience({ ...experience, description: e.target.value });
		}
	};

	return (
		<>
			<section className="experience">
				<div className="experience-inputs">
					<h2>Experience</h2>
					{experience.map((obj) => {
						return (
							<>
								<Input
									label="Company"
									type="text"
									id="company"
									value={obj.company}
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
									type=""
									id="description"
									value={obj.description}
									onType={handleChange}
								></Input>
							</>
						);
					})}
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
