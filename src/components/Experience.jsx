import "../styles/experience.css";
import { Fragment } from "react";

export default function Experience({ experience, setExperience }) {
	const handleChange = (e, key, id) => {
		if (id === "company") {
			setExperience(
				experience.map((obj) => {
					if (obj.key === key) {
						return { ...obj, company: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "title") {
			setExperience(
				experience.map((obj) => {
					if (obj.key === key) {
						return { ...obj, title: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "startDate") {
			setExperience(
				experience.map((obj) => {
					if (obj.key === key) {
						return { ...obj, startDate: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "endDate") {
			setExperience(
				experience.map((obj) => {
					if (obj.key === key) {
						return { ...obj, endDate: e.target.value };
					}
					return obj;
				})
			);
		} else if (id === "description") {
			setExperience(
				experience.map((obj) => {
					if (obj.key === key) {
						return { ...obj, description: e.target.value };
					}
					return obj;
				})
			);
		}
	};

	const handleNewSection = () => {
		const newKey = experience.reduce((prevObj, biggest) => {
			if (prevObj.key > biggest) return prevObj.key;
			return biggest.key;
		}, 0);
		setExperience([
			...experience,
			{
				key: newKey + 1,
				company: "",
				title: "",
				startDate: "",
				endDate: "",
			},
		]);
	};

	return (
		<>
			<section className="experience">
				<div className="experience-inputs">
					<h2>Experience</h2>
					{experience.map((obj) => {
						return (
							<Fragment key={obj.key}>
								<Input
									dataKey={obj.key}
									label="Company"
									type="text"
									id="company"
									value={obj.company}
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
									type=""
									id="description"
									value={obj.description}
									onType={handleChange}
								></Input>
								<div className="experience-separator"></div>
							</Fragment>
						);
					})}
					<button onClick={handleNewSection}>Add Experience</button>
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

export { Experience };
