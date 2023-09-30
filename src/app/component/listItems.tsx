import { Box } from "@mui/material";
import { EntityId } from "redis-om";
import StoredListItem from "./storedListItem";
import { listItemsProps } from "@/lib/sharedType";

export default function ListItems({ data, ...other }: listItemsProps) {
	return (
		<Box sx={{ border: "1px solid black", marginTop: "2em" }}>
			{data?.map((item: any, key: any) => {
				return (
					<StoredListItem key={key} item={item} id={item[EntityId]} />
				);
			})}
		</Box>
	);
}
