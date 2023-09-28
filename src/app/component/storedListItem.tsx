import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Popper from "@mui/material/Popper";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

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
    <Box sx={{ border: "1px solid black", width: "50%", minHeight: "85px" }}>
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
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
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
