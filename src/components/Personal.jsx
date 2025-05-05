import { useState } from "react";
import "../styles/personal.css";

function Personal() {
	const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@example.com",
		phoneNumber: "(+000) 123 456 789",
	});

	const handleChange = (e, id) => {
		if (id === "first") {
			setPerson({ ...person, firstName: e.target.value });
		} else if (id === "last") {
			setPerson({ ...person, lastName: e.target.value });
		} else if (id === "email") {
			setPerson({ ...person, email: e.target.value });
		} else if (id === "tel") {
			setPerson({ ...person, phoneNumber: e.target.value });
		}
	};

	return (
		<>
			<section className="personal">
				<div className="personal-inputs">
					<h2>Personal Information</h2>
					<Input
						label="First name"
						type="text"
						id="first"
						value={person.firstName}
						onType={handleChange}
					></Input>
					<Input
						label="Last name"
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
						label="Phone"
						type="tel"
						id="phone"
						value={person.phoneNumber}
						onType={handleChange}
					></Input>
				</div>
			</section>
		</>
	);
}

function Input({ label, type, id, value, onType }) {
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

export { Personal };
