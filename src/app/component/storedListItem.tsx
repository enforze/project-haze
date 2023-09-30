"use client";
import {
	Box,
	Checkbox,
	Stack,
	Button,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { MouseEvent, useState } from "react";
import { deleteItem } from "@/lib/serverActions";
import { storedListItemProps } from "@/lib/sharedType";

export default function StoredListItem({
	item,
	id,
	...other
}: storedListItemProps) {
	console.log(item, "listItem");

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const menuId = open ? "menu-popper" : undefined;

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		deleteItem(id, item.userId);
	};
	const handleEdit = () => {
		console.log("hello edit");
	};
	return (
		<Box
			sx={{ border: "1px solid black", width: "50%", minHeight: "85px" }}
		>
			{item.content}
			<Stack
				sx={{
					float: "right",
				}}
			>
				<>
					<Button
						variant="contained"
						aria-describedby={menuId}
						type="button"
						onClick={handleClick}
					>
						...
					</Button>
					<Menu
						id={menuId}
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
