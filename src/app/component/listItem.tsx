"use client";
import React, { Component } from "react";
import { useState } from "react";
import Fab from "@mui/material/Button";
import { TextField, Stack } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import handleSubmit from "./listItemContainer";
import { create } from "domain";




const TodoItem = {
	width: "auto",
	border: "1px solid black",
	padding: "1em",
	height: "5em",
};
type FormValues = {
	data: string;
};

type listItemProps = {
	mySubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ListItem({ mySubmit }: listItemProps) {
			//state, name
	//const [empty, setEmpty] = useState('');
	const { list, handleSubmit } = useForm();
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		mySubmit(event);
		document.getElementById("multiline")!.value = "";
	};
	const handleChange = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
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
			<form method="post" onSubmit={onSubmit} onChange={handleChange}>
				<TextField
					id="multiline"
					multiline
					type="text"
					name="message"
					placeholder="input item"
					rows={2}
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
