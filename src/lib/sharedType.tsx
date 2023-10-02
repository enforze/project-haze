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

export type editFormProps = listItem & {
	itemId: string;
	isEdit: boolean;
	handleClose: () => void;
};

export type updateListItemPayload = {
	listItemId: string;
	content: string;
	isDone: boolean;
	priority: number;
};
