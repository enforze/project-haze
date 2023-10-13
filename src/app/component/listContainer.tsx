import { getItems } from "@/lib/serverActions";
import ListForm from "./listForm";
import ListItems from "./listItems";
import {
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Card,
  Grid,
  Box,
} from "@mui/material";
export default async function ListContainer() {
  var data = await getItems();
  console.log(data);
  return (
    <>
      <Box sx={{}}>
        <ListForm />
        <Stack
          sx={{
            maxWidth: "50%",
            border: "1px dotted black",
            marginTop: "1em",
            backgroundColor: "rgb(80, 150, 200)",
          }}
        >
          <ListItems data={data} />
        </Stack>
      </Box>
    </>
  );
}
