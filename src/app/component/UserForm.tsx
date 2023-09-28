"use client";
import { Button, Grid, TextField } from "@mui/material";

export default function UserForm() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = new FormData(event.currentTarget);
		const formData = Object.fromEntries(form.entries());

		console.log(formData);

		const res = await fetch("api/users/create", {
			body: JSON.stringify(formData),
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
			<Grid container direction={"row"} spacing={2}>
				<Grid
					spacing={2}
					direction={{ md: "row", xs: "column" }}
					container
					item
				>
					<Grid item>
						<TextField label="Name" type="text" name="name" />
					</Grid>
					<Grid item>
						<TextField label="Email" type="email" name="email" />
					</Grid>
					<Grid item>
						<TextField
							label="Password"
							type="password"
							name="password"
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" type="submit">
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
