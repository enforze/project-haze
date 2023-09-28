import { Box } from "@mui/material";
import StoredListItem from "./storedListItem";

export default function ListItems(data: any) {
	return (
		<Box sx={{ border: "1px solid black", marginTop: "2em" }}>
			{data?.data?.map((listItem: any, key: any) => {
				return <StoredListItem listItem={[listItem.content, key]} />;
			})}
		</Box>
	);
}
