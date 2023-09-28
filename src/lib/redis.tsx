import { Schema, Repository, Entity } from "redis-om";
import { createClient } from "redis";

const redisClient = createClient({ url: process.env.REDIS_URL });

async function redisConnect() {
	if (!redisClient.isOpen) {
		await redisClient
			.on("error", (err) => {
				console.error(err);
			})
			.connect();
	}
}

const userDataSchema = new Schema(
	"UserData",
	{
		name: { type: "string" },
		emailId: { type: "string" },
		password: { type: "string" },
	},
	{
		dataStructure: "JSON",
	}
);

const listItemSchema = new Schema(
	"ListItem",
	{
		userId: { type: "string" },
		title: { type: "string" },
		content: { type: "text" },
		isDone: { type: "boolean" },
		priority: { type: "number" },
	},
	{
		dataStructure: "JSON",
	}
);

// User Functions

type userInfo = {
	name: string;
	email: string;
	password: string;
};

export async function createUser(userInfo: userInfo): Promise<Entity> {
	await redisConnect();

	const emailId = await redisClient.sAdd("email", userInfo.email);

	if (emailId === 0) {
		throw new Error("Email already exists");
	}

	const repository = new Repository(userDataSchema, redisClient);

	const userId = await repository.save(userInfo);

	return userId;
}

export async function getUser(userId: string): Promise<Entity | null> {
	await redisConnect();

	const repository = new Repository(userDataSchema, redisClient);

	const user = await repository.fetch(userId);

	return user;
}

export async function getUserIdByEmail(email: string): Promise<Entity | null> {
	await redisConnect();
	const emailId = await redisClient.sAdd("email", email);

	if (emailId === 1) {
		await redisClient.sRem("email", email);
		throw new Error("Email doesnt exists");
	}

	const repository = new Repository(userDataSchema, redisClient);
	await repository.createIndex();

	const user = await repository
		.search()
		.where("email")
		.eq(email)
		.return.first();

	return user;
}

// List Item Functions

export async function createListItem(
	content: string,
	userId: string
): Promise<Entity> {
	await redisConnect();

	const user = getUser(userId);

	if (!user) {
		throw new Error("User not found");
	}

	const repository = new Repository(listItemSchema, redisClient);

	const listItemData = {
		userId: userId,
		title: "List Item",
		content: content,
		isDone: false,
		priority: 1,
	};

	const itemId = await repository.save(listItemData);

	return itemId;
}

export async function getListItem(listItemId: string): Promise<Entity | null> {
	await redisConnect();

	const repository = new Repository(listItemSchema, redisClient);

	const listItem = await repository.fetch(listItemId);

	return listItem;
}

export async function deleteListItem(
	listItemId: string,
	userId: string
): Promise<void> {
	await redisConnect();

	const repository = new Repository(listItemSchema, redisClient);

	const listItem = await repository.fetch(listItemId);

	if (!listItem) {
		throw new Error("List item not found");
	}

	if (listItem.userId !== userId) {
		throw new Error("User not authorized");
	}

	await repository.remove(listItemId);
}

type updateListItemPayload = {
	listItemId: string;
	title: string;
	content: string;
	isDone: boolean;
	priority: number;
};

export async function updateListItem(
	listItemData: updateListItemPayload,
	userId: string
): Promise<Entity> {
	await redisConnect();

	const repository = new Repository(listItemSchema, redisClient);

	const item = await repository.fetch(listItemData.listItemId);

	if (!item) {
		throw new Error("List item not found");
	}

	if (item.userId !== userId) {
		throw new Error("User not authorized");
	}

	item.title = listItemData.title;
	item.content = listItemData.content;
	item.isDone = listItemData.isDone;
	item.priority = listItemData.priority;

	const itemId = await repository.save(item);

	return itemId;
}

export async function getAllListItems(userId: string): Promise<Entity[]> {
	await redisConnect();

	const repository = new Repository(listItemSchema, redisClient);
	await repository.createIndex();

	const listItems = await repository
		.search()
		.where("userId")
		.eq(userId)
		.return.all();

	return listItems;
}
