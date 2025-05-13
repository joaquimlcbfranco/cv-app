import "../styles/education.css";
import { Fragment } from "react";

export default function Education({ education, setEducation }) {
	const handleChange = (e, key, id) => {
		if (id === "school") {
			setEducation(
				education.map((obj) => {
					if (obj.key === key) {
						return { ...obj, school: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "title") {
			setEducation(
				education.map((obj) => {
					if (obj.key === key) {
						return { ...obj, title: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "startDate") {
			setEducation(
				education.map((obj) => {
					if (obj.key === key) {
						return { ...obj, startDate: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "endDate") {
			setEducation(
				education.map((obj) => {
					if (obj.key === key) {
						return { ...obj, endDate: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "description") {
			setEducation(
				education.map((obj) => {
					if (obj.key === key) {
						return { ...obj, description: e.target.value };
					}
					return obj;
				})
			);
		}
	};

	const handleNewSection = () => {
		const newKey = education.reduce((prevObj, biggest) => {
			if (prevObj.key > biggest) return prevObj.key;
			return biggest.key;
		}, 0);
		setEducation([
			...education,
			{
				key: newKey + 1,
				school: "",
				title: "",
				startDate: "",
				endDate: "",
			},
		]);
	};

	const deleteSection = (key) => {
		setEducation(education.filter(obj => obj.key !== key))
	}

	return (
		<>
			<section className="education">
				<div className="education-inputs">
					<h2>Education</h2>
					{education.map((obj) => {
						return (
							<Fragment key={obj.key}>
								<Input
									dataKey={obj.key}
									label="School"
									type="text"
									id="school"
									value={obj.school}
									onType={handleChange}
								></Input>
								<Input
									dataKey={obj.key}
									label="Title"
									type="text"
									id="title"
									value={obj.title}
									onType={handleChange}
								></Input>
								<Input
									dataKey={obj.key}
									label="Start Date"
									type="date"
									id="startDate"
									value={obj.startDate}
									onType={handleChange}
								></Input>
								<Input
									dataKey={obj.key}
									label="End Date"
									type="date"
									id="endDate"
									value={obj.endDate}
									onType={handleChange}
								></Input>
								<Input
									dataKey={obj.key}
									label="Description"
									type="text"
									id="description"
									value={obj.description}
									onType={handleChange}
								></Input>
								<button className="delete-button" onClick={() => deleteSection(obj.key)}>Delete Section</button>
							</Fragment>
						);
					})}
					<button className="add-button" onClick={handleNewSection}>Add Education</button>
					<div className="education-separator"></div>
				</div>
			</section>
		</>
	);
}

function Input({ dataKey, label, type, id, value, onType }) {
	if (id === "description") {
		return (
			<label>
				{label}
				<textarea
					type={type}
					value={value}
					onChange={(e) => onType(e, dataKey, id)}
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
				onChange={(e) => onType(e, dataKey, id)}
			></input>
		</label>
	);
}
