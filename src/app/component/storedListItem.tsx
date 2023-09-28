"use client";
import {
	Box,
	Checkbox,
	Stack,
	IconButton,
	Button,
	Paper,
	Menu,
	MenuItem,
	MenuList,
	ListItemIcon,
	Typography,
	ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { MouseEvent, useState } from "react";

export default function StoredListItem(listItem: any) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const id = open ? "menu-popper" : undefined;

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		console.log("hello delete");
	};
	const handleEdit = () => {
		console.log("hello edit");
	};
	return (
		<Box
			sx={{ border: "1px solid black", width: "50%", minHeight: "85px" }}
		>
			{listItem.listItem[0]}
			<Stack
				sx={{
					float: "right",
				}}
			>
				<>
					<Button
						variant="contained"
						aria-describedby={id}
						type="button"
						onClick={handleClick}
					>
						...
					</Button>
					<Menu
						id={id}
						open={open}
						onClose={handleClose}
						anchorEl={anchorEl}
					>
						<MenuItem onClick={handleEdit}>
							<ListItemIcon>
								<EditIcon />
							</ListItemIcon>
							<ListItemText>Edit</ListItemText>
						</MenuItem>
						<MenuItem onClick={handleDelete}>
							<ListItemIcon>
								<DeleteIcon />
							</ListItemIcon>
							<ListItemText>Delete</ListItemText>
						</MenuItem>
					</Menu>
				</>
				<Box>
					<Checkbox />
				</Box>
			</Stack>
		</Box>
	);
}
