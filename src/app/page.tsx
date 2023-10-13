import UserForm from "@/app/component/UserForm";
import ListContainer from "./component/listContainer";
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

export default function Dashboard() {
  return (
    <>
      <h1>ToDo.io</h1>
      <Box sx={{ marginLeft: "1em" }}>
        <UserForm />
        <ListContainer />
      </Box>
    </>
  );
}
