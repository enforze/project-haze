"use client";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import ListItem from "./listItem";
import StoredListItem from "./storedListItem";
import Box from '@mui/material/Box';

//callback function -> button clicked -> create (storedListItem(info,info,info))
//on new data ->

export default function ListItemContainer() {
	const [list, setList] = useState([] as any);

	// useEffect(() => {
	// 	console.log(list);
	// }, [list]);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const formData = Object.fromEntries(form.entries());
		console.log(formData);
		setList([...list, formData.message]);

	}
	//make state for having data, onstate data -> div.append<storedListItem(formData)>
	return (
		<>
			<ListItem mySubmit={handleSubmit} />
			<Box sx = 
			{{border: "1px solid black",
			marginTop: "2em"
			}}>
			{list.map((listItem: any, key: any) => {
				return <StoredListItem listItem={[listItem, key]} />;
			})}
			</Box>
		</>
	);
}
