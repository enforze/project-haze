"use server";

import { Entity } from "redis-om";
import { createListItem, getAllListItems } from "./redis";
import { revalidatePath } from "next/cache";

export async function handleSubmit(formData: FormData) {
	const formDataFormat = Object.fromEntries(formData.entries());
	const userId = "01HATK6TAXES0Y2K9Q1GFQ7F50";
	// const userId = SearchParams.get("userId");
	// console.log(formDataFormat);
	const { content } = formDataFormat as { content: string };
	await createListItem(content, userId);

	revalidatePath("/");
}

export async function getItems(): Promise<Entity[]> {
	const userId = "01HATK6TAXES0Y2K9Q1GFQ7F50";

	const data = await getAllListItems(userId);

	console.log(data);
	return data;
}
