import "../styles/skills.css";

export default function Skills({ skills, setSkills }) {
	const handleChange = (e, id) => {
		const newArray = skills.map((skill) => {
			return skill.id === id
				? { ...skill, value: e.target.value }
				: skill;
		});
		setSkills(newArray);
	};

  const handleNewSection = () => {
    setSkills([...skills, ""]);
  }

	return (
		<>
			<section className="skills">
				<div className="skills-inputs">
					<h2>Skills</h2>
					{skills.map((skill) => (
						<Input
							key={skill.id}
							id={skill.id}
							type="text"
							value={skill.value}
							onType={handleChange}
						></Input>
					))}
          <button onClick={handleNewSection}>Add Skill</button>
				</div>
			</section>
		</>
	);
}

function Input({ type, id, value, onType }) {
	return (
		<input
			type={type}
			value={value}
			id={id}
			onChange={(e) => onType(e, id)}
		></input>
	);
}
