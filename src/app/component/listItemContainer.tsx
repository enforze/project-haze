import { getItems } from "@/lib/serverActions";
import ListItem from "./listItem";
import ListItems from "./listItems";

export default async function ListItemContainer() {
	const data = await getItems();

	//make state for having data, onstate data -> div.append<storedListItem(formData)>
	return (
		<>
			<ListItem />
			<ListItems data={data} />
		</>
	);
}
