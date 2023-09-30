import { getItems } from "@/lib/serverActions";
import ListForm from "./listForm";
import ListItems from "./listItems";

export default async function ListContainer() {
	var data = await getItems();

	return (
		<>
			<ListForm />
			<ListItems data={data} />
		</>
	);
}
