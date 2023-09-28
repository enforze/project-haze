import { getItems } from "@/lib/serverActions";
import ListItem from "./listItem";
import ListItems from "./listItems";

export default async function ListItemContainer() {
	const data = await getItems();

	return (
		<>
			<ListItem />
			<ListItems data={data} />
		</>
	);
}
