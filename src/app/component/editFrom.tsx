import { editItem, handleIsDone } from "@/lib/serverActions";
import { editFormProps } from "@/lib/sharedType";
import { Check, Close } from "@mui/icons-material";
import {
	Checkbox,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

export function EditForm({
	content,
	isDone,
	priority,
	userId,
	itemId,
	isEdit,
	handleClose,
}: editFormProps) {
	const [contentState, setContentState] = useState<string>(content);
	const [isDoneState, setIsDoneState] = useState<boolean>(isDone);

	return (
		<>
			{isEdit ? (
				<form
					id="edit-form"
					action={(e) => {
						editItem(e, itemId, userId);
						handleClose();
					}}
				>
					<Stack direction="row" spacing={1}>
						<Checkbox
							name="isDone"
							checked={isDoneState}
							onChange={(e) => {
								setIsDoneState(e.target.checked);
							}}
						/>
						<TextField
							size="small"
							type="text"
							name="content"
							value={contentState}
							onChange={(e) => {
								setContentState(e.target.value);
							}}
						/>
						<TextField
							size="small"
							type="number"
							name="priority"
							defaultValue={priority}
						/>
						<IconButton aria-label="submit" type="submit">
							<Check />
						</IconButton>
						<IconButton
							type="button"
							aria-label="close"
							onClick={handleClose}
						>
							<Close />
						</IconButton>
					</Stack>
				</form>
			) : (
				<Stack direction={"row"} spacing={2}>
					<Checkbox
						name="isDone"
						checked={isDoneState}
						onChange={(e) => {
							handleIsDone(e.target.checked, itemId, userId);
							setIsDoneState(e.target.checked);
						}}
					/>
					<Typography
						variant="body1"
						sx={{
							display: "flex",
							flexWrap: "wrap",
							alignContent: "center",
						}}
					>
						{contentState}
					</Typography>
				</Stack>
			)}
		</>
	);
}
