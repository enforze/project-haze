"use client";

export default function UserForm() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = new FormData(event.currentTarget);
		const formData = Object.fromEntries(form.entries());

		console.log(formData);

		const res = await fetch("api/users", {
			body: JSON.stringify(Object.fromEntries(form.entries())),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (!res.ok) {
			return;
		}

		const result = await res.json();
		console.log(result);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" name="name" />
			</label>
			<label>
				Email:
				<input type="email" name="email" />
			</label>
			<label>
				Password:
				<input type="password" name="password" />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
