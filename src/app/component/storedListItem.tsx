"use client";
import {
	Box,
	Checkbox,
	Stack,
	Popper,
	IconButton,
	Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function StoredListItem(listItem: any) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const handleDelete = () => {
		console.log("hello delete");
	};
	const handleEdit = () => {
		console.log("hello edit");
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;
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
				<div>
					<Button
						variant="contained"
						aria-describedby={id}
						type="button"
						onClick={handleClick}
					>
						...
					</Button>
					<Popper id={id} open={open} anchorEl={anchorEl}>
						<Box
							sx={{
								border: 1,
								p: 1,
								bgcolor: "background.paper",
							}}
						>
							<IconButton onClick={handleDelete}>
								<DeleteIcon />
							</IconButton>
							<IconButton onClick={handleEdit}>
								<EditIcon />
							</IconButton>
						</Box>
					</Popper>
				</div>
				<Box>
					<Checkbox />
				</Box>
			</Stack>
		</Box>
	);
}
