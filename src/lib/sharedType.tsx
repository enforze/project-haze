import { Entity } from "redis-om";

export type listItem = Entity & {
	content: string;
	isDone: boolean;
	priority: number;
	userId: string;
};

export type listItemsProps = {
	data: listItem[];
};
export type storedListItemProps = {
	item: listItem;
	id: string;
};
