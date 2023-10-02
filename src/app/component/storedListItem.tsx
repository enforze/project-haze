"use client";
import {
	Stack,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
	Fab,
	Card,
	Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MouseEvent, useState } from "react";
import { storedListItemProps } from "@/lib/sharedType";
import { EditForm } from "./editFrom";
import { deleteItem } from "@/lib/serverActions";

export default function StoredListItem({
	item,
	id,
	...other
}: storedListItemProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [edit, setEdit] = useState<boolean>(false);
	const open = Boolean(anchorEl);
	const menuId = open ? "menu-popper" : undefined;

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		// console.log(item.userId, id);
		deleteItem(id, item.userId);
	};
	const handleEdit = () => {
		setEdit(!edit);
	};
	return (
		<Card
			sx={{
				borderRadius: "8px",
				margin: "8px",
				padding: "8px",
			}}
		>
			<Stack
				direction="row"
				spacing={1}
				sx={{
					justifyContent: "space-between",
				}}
			>
				<EditForm
					{...item}
					itemId={id}
					isEdit={edit}
					handleClose={handleEdit}
				/>

				<Stack>
					<Fab
						size="small"
						disableRipple
						aria-describedby={menuId}
						onClick={handleClick}
					>
						{!anchorEl ? (
							<MoreVertIcon fontSize="small" />
						) : (
							<MoreHorizIcon fontSize="small" />
						)}
					</Fab>
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
				</Stack>
			</Stack>
		</Card>
	);
}
