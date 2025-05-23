import "../styles/personal.css";

export default function Personal({ person, setPerson }) {
	const handleChange = (e, id) => {
		if (id === "first") {
			setPerson({ ...person, firstName: e.target.value });
		} else if (id === "last") {
			setPerson({ ...person, lastName: e.target.value });
		} else if (id === "email") {
			setPerson({ ...person, email: e.target.value });
		} else if (id === "phone") {
			setPerson({ ...person, phoneNumber: e.target.value });
		} else if (id === "about") {
			setPerson({ ...person, about: e.target.value });
		}
	};

	return (
		<>
			<section className="personal">
				<div className="personal-inputs">
					<h2>Personal</h2>
					<Input
						label="First Name"
						type="text"
						id="first"
						value={person.firstName}
						onType={handleChange}
					></Input>
					<Input
						label="Last Name"
						type="text"
						id="last"
						value={person.lastName}
						onType={handleChange}
					></Input>
					<Input
						label="Email"
						type="email"
						id="email"
						value={person.email}
						onType={handleChange}
					></Input>
					<Input
						label="Phone Number"
						type="tel"
						id="phone"
						value={person.phoneNumber}
						onType={handleChange}
					></Input>
					<Input
						label="About"
						type="text"
						id="about"
						value={person.about}
						onType={handleChange}
					></Input>
				</div>
			</section>
		</>
	);
}

function Input({ label, type, id, value, onType }) {
	if (id === "about") {
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
	else if (id === "phone") {
		return (
			<label>
				{label}
				<br></br>
				<small>Format: 123-456-789</small>
				<input
					type={type}
					value={value}
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
					onChange={(e) => onType(e, id)}
				></input>
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
