"use client";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import ListItem from "./listItem";
import StoredListItem from "./storedListItem";

//callback function -> button clicked -> create (storedListItem(info,info,info))
//on new data ->

export default function ListItemContainer() {
	const [list, setList] = useState([] as any);

	// useEffect(() => {
	// 	console.log(list);
	// }, [list]);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log("helloFromContainer");
		const form = new FormData(event.currentTarget);
		const formData = Object.fromEntries(form.entries());
		console.log(formData);
		setList([...list, formData.message]);
		console.log(list);
	}
	//make state for having data, onstate data -> div.append<storedListItem(formData)>
	return (
		<>
			<ListItem mySubmit={handleSubmit} />
			{list.map((listItem: any, key: any) => {
				return <StoredListItem listItem={[listItem, key]} />;
			})}
			<div>helloWorld</div>
		</>
	);
}
