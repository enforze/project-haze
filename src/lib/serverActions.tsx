"use server";

import { Entity, EntityId } from "redis-om";
import {
  createListItem,
  getAllListItems,
  deleteListItem,
  updateIsDone,
  updateListItem,
} from "./redis";
import { revalidatePath } from "next/cache";
import { updateListItemPayload } from "./sharedType";

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

export async function editItem(
  formData: FormData,
  itemId: string,
  userId: string
) {
  var formDataFormat = Object.fromEntries(formData.entries());
  const payload = formDataFormat as updateListItemPayload;

  payload.listItemId = itemId;
  payload.isDone = payload.isDone ? true : false;
  payload.priority = Number(payload.priority);

  updateListItem(payload, userId);
  // revalidatePath("/");
}

export async function handleIsDone(
  isDone: boolean,
  itemId: string,
  userId: string
): Promise<void> {
  updateIsDone(itemId, isDone, userId);
  // revalidatePath("/");
}
