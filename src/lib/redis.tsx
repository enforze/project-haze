import { Schema, Repository, EntityData, Entity } from "redis-om";
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

const listSchema = new Schema(
	"List",
	{
		itemIds: { type: "string[]" },
		userId: { type: "string" },
	},
	{
		dataStructure: "JSON",
	}
);

const itemSchema = new Schema(
	"Item",
	{
		title: { type: "string" },
		description: { type: "text" },
		isDone: { type: "boolean" },
		priority: { type: "number" },
	},
	{
		dataStructure: "JSON",
	}
);

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
