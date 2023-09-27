import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack'
import Popper from '@mui/material/Popper';
import * as React from 'react';

export default function StoredListItem(listItem: any) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorEl(anchorEl ? null : event.currentTarget);
	};
    const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
	return <Box sx =
	{{border: "1px solid black", 
	width: "50%",
	minHeight: "75px"
	}}>{listItem.listItem[0]}
	<Stack sx ={{
		float: "right"
	}}>
     
	 <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
       ...
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
		<DeleteIcon/>
		<EditIcon/>
        </Box>
      </Popper>
    </div>
		<Box>
			<Checkbox/>
		
		</Box>
	</Stack>
	</Box>;
}
