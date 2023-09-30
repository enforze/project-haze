"use client";
import React, { useRef } from "react";
import Fab from "@mui/material/Button";
import { TextField, Stack } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { handleSubmit } from "@/lib/serverActions";

export default function ListForm() {
	const ref = useRef<HTMLFormElement>(null);
	return (
		<Stack
			sx={{
				display: "flex",
				border: "none",
				width: "fit-content",
				marginTop: "1em",
				paddingLeft: "1em",
			}}
			direction="column"
		>
			<h1>I need to:</h1>
			<form
				ref={ref}
				action={async (FormData: FormData) => {
					ref?.current?.reset();
					await handleSubmit(FormData);
				}}
			>
				<TextField
					id="multiline"
					multiline
					type="text"
					name="content"
					placeholder="input item"
					rows={2}
					required
				/>
				<Fab
					color="primary"
					aria-label="add"
					type="submit"
					style={{ marginTop: "1.5em" }}
				>
					<AddCircleOutlineOutlined />
				</Fab>
			</form>
		</Stack>
	);
}
