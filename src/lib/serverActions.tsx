"use server";

import { Entity, EntityId } from "redis-om";
import { createListItem, getAllListItems, deleteListItem } from "./redis";
import { revalidatePath } from "next/cache";

export async function handleSubmit(formData: FormData): Promise<void> {
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

	return await getAllListItems(userId);
}

export async function deleteItem(
	itemId: string,
	userId: string
): Promise<void> {
	await deleteListItem(itemId, userId);

	revalidatePath("/");
}
